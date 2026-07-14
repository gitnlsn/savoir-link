import type { Logger } from "~/lib/logger";
import {
  CreditTransactionType,
  PaymentStatus,
  PaymentType,
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

    return db.$transaction(async (tx) => {
      // Idempotency: has this payment already been credited?
      const existing = await tx.creditTransaction.findFirst({
        where: { paymentId: payment.id, type: CreditTransactionType.TOPUP },
      });
      if (existing) {
        return { walletId: existing.walletId };
      }

      const userId = payment.userId!;
      const credits = payment.creditQuantity!;

      const wallet = await tx.creditWallet.upsert({
        where: { userId },
        create: { userId, balance: credits },
        update: { balance: { increment: credits } },
      });

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
  }
}
