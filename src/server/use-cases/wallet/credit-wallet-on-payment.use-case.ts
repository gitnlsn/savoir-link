import type { Logger } from "~/lib/logger";
import {
  CreditTransactionType,
  PaymentStatus,
  PaymentType,
  Prisma,
  type PrismaClient,
} from "~/server/db-types";

export interface CreditWalletOnPaymentDeps {
  db: PrismaClient;
  logger: Logger;
}

/**
 * Fulfillment for a paid CREDIT_TOPUP payment: adds credits to the provider's wallet and writes a
 * ledger entry. Idempotent — guarded by an existing TOPUP ledger row referencing this payment.
 */
export class CreditWalletOnPaymentUseCase {
  constructor(private deps: CreditWalletOnPaymentDeps) {}

  async execute(paymentId: string): Promise<{ walletId: string | null }> {
    const { db, logger } = this.deps;

    const payment = await db.payment.findUnique({ where: { id: paymentId } });
    if (!payment || payment.type !== PaymentType.CREDIT_TOPUP) {
      logger.warn("credit-wallet: not a credit-topup payment", { paymentId });
      return { walletId: null };
    }
    if (!payment.userId || !payment.creditQuantity) {
      logger.warn("credit-wallet: payment missing user or credit quantity", { paymentId });
      return { walletId: null };
    }

    const userId = payment.userId;
    const credits = payment.creditQuantity;

    try {
      return await db.$transaction(async (tx) => {
        // Fast path for sequential re-delivery: already credited?
        const existing = await tx.creditTransaction.findFirst({
          where: { paymentId: payment.id, type: CreditTransactionType.TOPUP },
        });
        if (existing) {
          return { walletId: existing.walletId };
        }

        const wallet = await tx.creditWallet.upsert({
          where: { userId },
          create: { userId, balance: credits },
          update: { balance: { increment: credits } },
        });

        // The unique (paymentId, type) constraint makes this the atomic idempotency point:
        // a concurrent/duplicate delivery that raced past the findFirst throws P2002 here, which
        // rolls back the wallet increment above (handled below).
        await tx.creditTransaction.create({
          data: {
            walletId: wallet.id,
            type: CreditTransactionType.TOPUP,
            delta: credits,
            paymentId: payment.id,
          },
        });

        if (payment.status !== PaymentStatus.PAID) {
          await tx.payment.update({
            where: { id: payment.id },
            data: { status: PaymentStatus.PAID, paidAt: new Date() },
          });
        }

        logger.info("Wallet credited", { walletId: wallet.id, credits });
        return { walletId: wallet.id };
      });
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError && e.code === "P2002") {
        // Already credited by a concurrent/duplicate delivery — the increment was rolled back.
        logger.info("credit-wallet: duplicate delivery, already credited", { paymentId });
        const wallet = await db.creditWallet.findUnique({ where: { userId } });
        return { walletId: wallet?.id ?? null };
      }
      throw e;
    }
  }
}
