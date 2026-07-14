import type { Logger } from "~/lib/logger";
import {
  CreditTransactionType,
  OrderStatus,
  Prisma,
  type PrismaClient,
} from "~/server/db-types";
import { UNLOCK_COST_CREDITS } from "~/server/config/pricing";

export type UnlockErrorCode =
  | "NOT_FOUND"
  | "NOT_AVAILABLE"
  | "INSUFFICIENT_CREDITS";

export class UnlockError extends Error {
  constructor(
    public code: UnlockErrorCode,
    message: string,
  ) {
    super(message);
    this.name = "UnlockError";
  }
}

export interface RevealedContact {
  name: string;
  phone: string;
  whatsapp: string | null;
  email: string;
}

export interface UnlockContactResult {
  status: "unlocked" | "already";
  creditsSpent: number;
  balance: number;
  contact: RevealedContact;
}

export interface UnlockContactDeps {
  db: PrismaClient;
  logger: Logger;
}

/**
 * A provider spends credits to reveal an order's contact. All checks + mutations happen inside a
 * single transaction so concurrent unlocks can't double-charge or oversell the wallet:
 *  - order must be ACTIVE and not expired
 *  - if already unlocked by this provider → return the contact, no charge (idempotent)
 *  - wallet must hold at least UNLOCK_COST_CREDITS
 * The unique (providerId, orderId) constraint is the final backstop against races.
 */
export class UnlockContactUseCase {
  constructor(private deps: UnlockContactDeps) {}

  async execute(
    providerId: string,
    orderPublicId: string,
  ): Promise<UnlockContactResult> {
    const { db, logger } = this.deps;

    return db.$transaction(async (tx) => {
      const order = await tx.order.findUnique({
        where: { publicId: orderPublicId },
      });
      if (!order) throw new UnlockError("NOT_FOUND", "Pedido não encontrado.");

      const contact: RevealedContact = {
        name: order.contactName,
        phone: order.contactPhone,
        whatsapp: order.contactWhatsapp,
        email: order.contactEmail,
      };

      // Already unlocked? Return contact without charging again.
      const existing = await tx.contactUnlock.findUnique({
        where: { providerId_orderId: { providerId, orderId: order.id } },
      });
      const wallet = await tx.creditWallet.findUnique({ where: { userId: providerId } });
      if (existing) {
        return {
          status: "already",
          creditsSpent: existing.creditsSpent,
          balance: wallet?.balance ?? 0,
          contact,
        };
      }

      if (
        order.status !== OrderStatus.ACTIVE ||
        !order.expiresAt ||
        order.expiresAt <= new Date()
      ) {
        throw new UnlockError(
          "NOT_AVAILABLE",
          "Este pedido não está mais disponível.",
        );
      }

      if (!wallet || wallet.balance < UNLOCK_COST_CREDITS) {
        throw new UnlockError(
          "INSUFFICIENT_CREDITS",
          "Créditos insuficientes. Compre créditos para desbloquear.",
        );
      }

      // Charge + record. Unique constraint guards against a concurrent unlock.
      let unlock;
      try {
        unlock = await tx.contactUnlock.create({
          data: {
            providerId,
            orderId: order.id,
            creditsSpent: UNLOCK_COST_CREDITS,
          },
        });
      } catch (e) {
        if (
          e instanceof Prisma.PrismaClientKnownRequestError &&
          e.code === "P2002"
        ) {
          // Lost the race — someone unlocked simultaneously. Return without charging.
          return {
            status: "already",
            creditsSpent: UNLOCK_COST_CREDITS,
            balance: wallet.balance,
            contact,
          };
        }
        throw e;
      }

      const updatedWallet = await tx.creditWallet.update({
        where: { id: wallet.id },
        data: { balance: { decrement: UNLOCK_COST_CREDITS } },
      });
      await tx.creditTransaction.create({
        data: {
          walletId: wallet.id,
          type: CreditTransactionType.UNLOCK,
          delta: -UNLOCK_COST_CREDITS,
          contactUnlockId: unlock.id,
        },
      });
      await tx.order.update({
        where: { id: order.id },
        data: { unlockCount: { increment: 1 } },
      });

      logger.info("Contact unlocked", { providerId, orderId: order.id });
      return {
        status: "unlocked",
        creditsSpent: UNLOCK_COST_CREDITS,
        balance: updatedWallet.balance,
        contact,
      };
    });
  }
}
