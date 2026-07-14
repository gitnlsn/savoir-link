import type { Logger } from "~/lib/logger";
import { PaymentStatus, PaymentType, type PrismaClient } from "~/server/db-types";
import type { PagarmeWebhookPayload } from "~/server/integrations/pagarme/types";
import { ActivateOrderOnPaymentUseCase } from "~/server/use-cases/order/activate-order-on-payment.use-case";
import { CreditWalletOnPaymentUseCase } from "~/server/use-cases/wallet/credit-wallet-on-payment.use-case";

export interface HandlePagarmeWebhookDeps {
  db: PrismaClient;
  logger: Logger;
}

const PAID_EVENTS = new Set(["order.paid", "charge.paid"]);
const FAILED_EVENTS = new Set([
  "order.payment_failed",
  "charge.payment_failed",
]);
const CANCELLED_EVENTS = new Set([
  "order.canceled",
  "charge.refunded",
  "charge.canceled",
]);

/**
 * Processes a Pagar.me webhook. Idempotent via WebhookEvent.pagarmeEventId: a re-delivered event
 * that was already processed returns `{ status: "duplicate" }` without side effects.
 *
 * Routes a paid payment to the matching fulfillment (order activation or wallet credit) by the
 * Payment's `type`.
 */
export class HandlePagarmeWebhookUseCase {
  constructor(private deps: HandlePagarmeWebhookDeps) {}

  async execute(
    payload: PagarmeWebhookPayload,
  ): Promise<{ status: "processed" | "duplicate" | "ignored" | "unmatched" }> {
    const { db, logger } = this.deps;

    // Idempotency guard.
    const existing = await db.webhookEvent.findUnique({
      where: { pagarmeEventId: payload.id },
    });
    if (existing?.processedAt) {
      return { status: "duplicate" };
    }
    if (!existing) {
      await db.webhookEvent.create({
        data: {
          pagarmeEventId: payload.id,
          type: payload.type,
          payload: payload as unknown as object,
        },
      });
    }

    const result = await this.route(payload);

    await db.webhookEvent.update({
      where: { pagarmeEventId: payload.id },
      data: { processedAt: new Date() },
    });

    logger.info("Webhook processed", { type: payload.type, result });
    return result;
  }

  private async route(
    payload: PagarmeWebhookPayload,
  ): Promise<{ status: "processed" | "ignored" | "unmatched" }> {
    const { db, logger } = this.deps;
    const { type } = payload;

    if (
      !PAID_EVENTS.has(type) &&
      !FAILED_EVENTS.has(type) &&
      !CANCELLED_EVENTS.has(type)
    ) {
      return { status: "ignored" };
    }

    const pagarmeOrderId = extractOrderId(payload);
    const paymentCode = extractCode(payload);

    const payment = await db.payment.findFirst({
      where: {
        OR: [
          ...(pagarmeOrderId ? [{ pagarmeOrderId }] : []),
          ...(paymentCode ? [{ id: paymentCode }] : []),
        ],
      },
    });

    if (!payment) {
      logger.warn("Webhook: no matching payment", { pagarmeOrderId, paymentCode });
      return { status: "unmatched" };
    }

    // Backfill the pagarme order id if we matched by code.
    if (pagarmeOrderId && payment.pagarmeOrderId !== pagarmeOrderId) {
      await db.payment.update({
        where: { id: payment.id },
        data: { pagarmeOrderId },
      });
    }

    if (FAILED_EVENTS.has(type)) {
      await db.payment.update({
        where: { id: payment.id },
        data: { status: PaymentStatus.FAILED },
      });
      return { status: "processed" };
    }
    if (CANCELLED_EVENTS.has(type)) {
      await db.payment.update({
        where: { id: payment.id },
        data: { status: PaymentStatus.CANCELLED },
      });
      return { status: "processed" };
    }

    // Paid — dispatch fulfillment by payment type.
    if (payment.type === PaymentType.ORDER_PUBLICATION) {
      await new ActivateOrderOnPaymentUseCase({ db, logger }).execute(payment.id);
    } else if (payment.type === PaymentType.CREDIT_TOPUP) {
      await new CreditWalletOnPaymentUseCase({ db, logger }).execute(payment.id);
    }
    return { status: "processed" };
  }
}

function extractOrderId(payload: PagarmeWebhookPayload): string | undefined {
  const { type, data } = payload;
  if (type.startsWith("order.")) return data.id;
  // charge.* — the order id lives on the nested order or order_id field.
  return (
    data.order?.id ??
    (typeof data.order_id === "string" ? data.order_id : undefined)
  );
}

function extractCode(payload: PagarmeWebhookPayload): string | undefined {
  const { data } = payload;
  return (
    data.code ??
    data.order?.code ??
    data.metadata?.paymentId ??
    data.order?.metadata?.paymentId
  );
}
