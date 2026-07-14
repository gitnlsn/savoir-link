import type { Logger } from "~/lib/logger";
import {
  PaymentStatus,
  PaymentType,
  Prisma,
  type PrismaClient,
} from "~/server/db-types";
import type { PagarmeClient } from "~/server/integrations/pagarme/pagarme.client";
import type { PagarmeWebhookPayload } from "~/server/integrations/pagarme/types";
import { ActivateOrderOnPaymentUseCase } from "~/server/use-cases/order/activate-order-on-payment.use-case";
import { CreditWalletOnPaymentUseCase } from "~/server/use-cases/wallet/credit-wallet-on-payment.use-case";

export interface HandlePagarmeWebhookDeps {
  db: PrismaClient;
  logger: Logger;
  pagarme: PagarmeClient;
}

export type WebhookResult = {
  status: "processed" | "duplicate" | "ignored";
};

const PAID_EVENTS = new Set(["order.paid", "charge.paid"]);
const FAILED_EVENTS = new Set(["order.payment_failed", "charge.payment_failed"]);
const CANCELLED_EVENTS = new Set([
  "order.canceled",
  "charge.refunded",
  "charge.canceled",
]);

/**
 * Processes a Pagar.me webhook.
 *
 * Trust model: the webhook is only a *trigger*. Before granting anything (activating an order or
 * crediting a wallet) we re-fetch the order from Pagar.me and confirm it is actually paid — so a
 * forged or replayed "paid" event cannot produce value even if the endpoint were reachable.
 *
 * Idempotency: `WebhookEvent.pagarmeEventId` is the audit/fast-path guard, but the real backstop is
 * DB-level — the unique `CreditTransaction(paymentId, type)` constraint and the atomic order
 * transition — so concurrent/duplicate deliveries can't double-fulfill.
 *
 * Retries: retryable conditions (unmatched paid event, "not yet paid" per Pagar.me, transient
 * errors) throw, so the route returns 500 and Pagar.me redelivers; the event is NOT marked
 * processed in that case.
 */
export class HandlePagarmeWebhookUseCase {
  constructor(private deps: HandlePagarmeWebhookDeps) {}

  async execute(payload: PagarmeWebhookPayload): Promise<WebhookResult> {
    const { db, logger } = this.deps;

    // Fast-path duplicate check.
    const existing = await db.webhookEvent.findUnique({
      where: { pagarmeEventId: payload.id },
    });
    if (existing?.processedAt) {
      logger.info("[webhook] duplicate — already processed", {
        eventId: payload.id,
        type: payload.type,
      });
      return { status: "duplicate" };
    }

    // Record the event for audit (atomic — ignore a concurrent create).
    if (!existing) {
      try {
        await db.webhookEvent.create({
          data: {
            pagarmeEventId: payload.id,
            type: payload.type,
            payload: payload as unknown as Prisma.InputJsonValue,
          },
        });
      } catch (e) {
        if (
          !(e instanceof Prisma.PrismaClientKnownRequestError && e.code === "P2002")
        ) {
          throw e;
        }
        // Concurrent delivery already recorded it; continue — fulfillment is idempotent.
      }
    }

    // route() throws for retryable conditions; in that case we never reach the mark-processed
    // below, the route returns 500, and Pagar.me redelivers.
    const result = await this.route(payload);

    await db.webhookEvent.update({
      where: { pagarmeEventId: payload.id },
      data: { processedAt: new Date() },
    });

    logger.info("Webhook processed", { type: payload.type, result });
    return result;
  }

  private async route(payload: PagarmeWebhookPayload): Promise<WebhookResult> {
    const { db, logger, pagarme } = this.deps;
    const { type } = payload;

    const isPaid = PAID_EVENTS.has(type);
    if (!isPaid && !FAILED_EVENTS.has(type) && !CANCELLED_EVENTS.has(type)) {
      logger.info("[webhook] ignored — unhandled event type", { type });
      return { status: "ignored" };
    }

    const pagarmeOrderId = extractOrderId(payload);
    const paymentCode = extractCode(payload);
    logger.info("[webhook] matching payment", {
      type,
      pagarmeOrderId,
      paymentCode,
    });

    const payment = await db.payment.findFirst({
      where: {
        OR: [
          ...(pagarmeOrderId ? [{ pagarmeOrderId }] : []),
          ...(paymentCode ? [{ id: paymentCode }] : []),
        ],
      },
    });

    if (!payment) {
      // For a paid event, a missing payment is almost always a race (webhook beat our write) or
      // out-of-order delivery — throw so Pagar.me retries. For failed/cancelled there's nothing to
      // fulfill, so we ack.
      if (isPaid) {
        throw new Error(
          `Webhook ${type}: no matching payment yet (order=${pagarmeOrderId}, code=${paymentCode}) — retry`,
        );
      }
      logger.warn("[webhook] no matching payment (non-paid event, ignoring)", {
        type,
        pagarmeOrderId,
        paymentCode,
      });
      return { status: "ignored" };
    }

    logger.info("[webhook] payment matched", {
      paymentId: payment.id,
      paymentType: payment.type,
      paymentStatus: payment.status,
    });

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

    // Paid — verify with Pagar.me before granting anything (the webhook is not trusted).
    const orderIdToVerify = payment.pagarmeOrderId ?? pagarmeOrderId;
    if (!orderIdToVerify) {
      throw new Error(`Webhook ${type}: no Pagar.me order id to verify payment ${payment.id}`);
    }
    logger.info("[webhook] verifying with Pagar.me", { orderIdToVerify });
    const remote = await pagarme.getOrder(orderIdToVerify);
    logger.info("[webhook] Pagar.me order status", {
      orderIdToVerify,
      remoteStatus: remote.status,
    });
    if (remote.status !== "paid") {
      // Either a race (not settled yet) or a forged/replayed event — do not fulfill; retry.
      throw new Error(
        `Webhook ${type}: Pagar.me order ${orderIdToVerify} is "${remote.status}", not paid — retry`,
      );
    }

    // Verified paid — dispatch fulfillment by payment type.
    logger.info("[webhook] fulfilling", {
      paymentId: payment.id,
      paymentType: payment.type,
    });
    if (payment.type === PaymentType.ORDER_PUBLICATION) {
      await new ActivateOrderOnPaymentUseCase({ db, logger }).execute(payment.id);
    } else if (payment.type === PaymentType.CREDIT_TOPUP) {
      await new CreditWalletOnPaymentUseCase({ db, logger }).execute(payment.id);
    }
    logger.info("[webhook] fulfilled", { paymentId: payment.id });
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
