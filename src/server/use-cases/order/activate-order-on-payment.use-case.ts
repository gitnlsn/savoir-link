import { env } from "~/env";
import type { Logger } from "~/lib/logger";
import { OrderStatus, PaymentStatus, PaymentType, type PrismaClient } from "~/server/db-types";
import { sendOrderPublishedEmail } from "~/server/integrations/email/email.client";

export interface ActivateOrderOnPaymentDeps {
  db: PrismaClient;
  logger: Logger;
}

/**
 * Fulfillment for a paid ORDER_PUBLICATION payment: flips the order to ACTIVE, stamps
 * publishedAt/expiresAt from the purchased duration. Idempotent — a re-delivered webhook for an
 * already-active order is a no-op.
 */
export class ActivateOrderOnPaymentUseCase {
  constructor(private deps: ActivateOrderOnPaymentDeps) {}

  async execute(paymentId: string): Promise<{ orderId: string | null }> {
    const { db, logger } = this.deps;

    const payment = await db.payment.findUnique({
      where: { id: paymentId },
      include: { order: true },
    });

    if (!payment || payment.type !== PaymentType.ORDER_PUBLICATION) {
      logger.warn("activate-order: not an order-publication payment", { paymentId });
      return { orderId: null };
    }
    if (!payment.order) {
      logger.warn("activate-order: payment has no order", { paymentId });
      return { orderId: null };
    }
    const now = new Date();
    const expiresAt = new Date(
      now.getTime() + payment.order.durationDays * 24 * 60 * 60 * 1000,
    );

    // Atomic transition: only the delivery that actually flips the order to ACTIVE proceeds to
    // send the email. A concurrent/duplicate delivery updates 0 rows and no-ops (no double email).
    const transition = await db.order.updateMany({
      where: { id: payment.order.id, status: { not: OrderStatus.ACTIVE } },
      data: { status: OrderStatus.ACTIVE, publishedAt: now, expiresAt },
    });
    if (transition.count === 0) {
      return { orderId: payment.order.id }; // already active — nothing to do
    }

    if (payment.status !== PaymentStatus.PAID) {
      await db.payment.update({
        where: { id: payment.id },
        data: { status: PaymentStatus.PAID, paidAt: now },
      });
    }

    await sendOrderPublishedEmail({
      to: payment.order.contactEmail,
      contactName: payment.order.contactName,
      title: payment.order.title,
      manageUrl: `${env.APP_URL}/pedido/gerenciar/${payment.order.manageToken}`,
      expiresAt,
    });

    logger.info("Order activated", { orderId: payment.order.id, expiresAt });
    return { orderId: payment.order.id };
  }
}
