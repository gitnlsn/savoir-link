/* Webhook fulfillment + idempotency + security verification. Run via tsx --env-file=.env */
import { nanoid } from "nanoid";

import { logger } from "~/lib/logger";
import { db } from "~/server/db";
import { PaymentStatus, PaymentType } from "~/server/db-types";
import type { PagarmeClient } from "~/server/integrations/pagarme/pagarme.client";
import type { PagarmeWebhookPayload } from "~/server/integrations/pagarme/types";
import { HandlePagarmeWebhookUseCase } from "~/server/use-cases/payment/handle-pagarme-webhook.use-case";

/** Mock Pagar.me whose getOrder reports a configurable status (the authoritative paid-check). */
function makePagarme(orderStatus = "paid"): PagarmeClient {
  return {
    getOrder: async (id: string) => ({ id, status: orderStatus }),
    createCheckoutOrder: async (input: { code: string }) => ({
      pagarmeOrderId: `or_${nanoid(10)}`,
      checkoutUrl: `https://sandbox/${input.code}`,
      status: "pending",
    }),
  } as unknown as PagarmeClient;
}

const paidHandler = new HandlePagarmeWebhookUseCase({
  db,
  logger,
  pagarme: makePagarme("paid"),
});

async function main() {
  const category = await db.category.findFirstOrThrow();
  const location = await db.location.findFirstOrThrow();
  const createdUserIds: string[] = [];
  const createdOrderIds: string[] = [];
  const createdEventIds: string[] = [];

  async function makeTopupPayment(credits: number) {
    const user = await db.user.create({
      data: { email: `pro-${nanoid(6)}@example.com`, name: "Pro" },
    });
    createdUserIds.push(user.id);
    const pagarmeOrderId = `or_${nanoid(10)}`;
    const payment = await db.payment.create({
      data: {
        type: PaymentType.CREDIT_TOPUP,
        amount: credits * 8.66,
        payerEmail: user.email!,
        userId: user.id,
        creditQuantity: credits,
        pagarmeOrderId,
      },
    });
    return { user, payment, pagarmeOrderId };
  }

  // ── ORDER PUBLICATION (paid → ACTIVE, idempotent) ────────────────────
  const order = await db.order.create({
    data: {
      publicId: `t-${nanoid(8)}`,
      manageToken: nanoid(24),
      title: "Test order",
      description: "verify",
      budget: 500,
      categoryId: category.id,
      locationId: location.id,
      contactName: "Cliente",
      contactPhone: "+5511999998888",
      contactEmail: "cliente@example.com",
      durationDays: 15,
    },
  });
  createdOrderIds.push(order.id);
  const pubPagarmeId = `or_${nanoid(10)}`;
  const pubPayment = await db.payment.create({
    data: {
      type: PaymentType.ORDER_PUBLICATION,
      amount: 29.9,
      payerEmail: "cliente@example.com",
      orderId: order.id,
      pagarmeOrderId: pubPagarmeId,
    },
  });
  const orderPaid: PagarmeWebhookPayload = {
    id: `evt_${nanoid(10)}`,
    type: "order.paid",
    data: { id: pubPagarmeId, code: pubPayment.id, status: "paid" },
  };
  createdEventIds.push(orderPaid.id);

  const r1 = await paidHandler.execute(orderPaid);
  const r2 = await paidHandler.execute(orderPaid); // replay
  const orderAfter = await db.order.findUniqueOrThrow({ where: { id: order.id } });
  assert(r1.status === "processed", `order.paid first => processed (got ${r1.status})`);
  assert(r2.status === "duplicate", `order.paid replay => duplicate (got ${r2.status})`);
  assert(orderAfter.status === "ACTIVE", `order ACTIVE (got ${orderAfter.status})`);
  const days = Math.round(
    (orderAfter.expiresAt!.getTime() - orderAfter.publishedAt!.getTime()) / 86400000,
  );
  assert(days === 15, `expiresAt = published + 15d (got ${days})`);

  // ── CREDIT TOPUP (paid → credited, idempotent replay) ────────────────
  {
    const { user, payment, pagarmeOrderId } = await makeTopupPayment(15);
    const evt: PagarmeWebhookPayload = {
      id: `evt_${nanoid(10)}`,
      type: "charge.paid",
      data: { id: `ch_${nanoid(10)}`, order: { id: pagarmeOrderId, code: payment.id } },
    };
    createdEventIds.push(evt.id);
    const c1 = await paidHandler.execute(evt);
    const c2 = await paidHandler.execute(evt); // replay
    const wallet = await db.creditWallet.findUniqueOrThrow({ where: { userId: user.id } });
    const txns = await db.creditTransaction.count({ where: { walletId: wallet.id } });
    assert(c1.status === "processed", `charge.paid first => processed (got ${c1.status})`);
    assert(c2.status === "duplicate", `charge.paid replay => duplicate (got ${c2.status})`);
    assert(wallet.balance === 15, `wallet balance 15 (got ${wallet.balance})`);
    assert(txns === 1, `exactly 1 ledger entry (got ${txns})`);
  }

  // ── SECURITY: unpaid per Pagar.me → NOT fulfilled, throws (retryable) ─
  {
    const { user, payment, pagarmeOrderId } = await makeTopupPayment(40);
    const evt: PagarmeWebhookPayload = {
      id: `evt_${nanoid(10)}`,
      type: "charge.paid",
      data: { id: `ch_${nanoid(10)}`, order: { id: pagarmeOrderId, code: payment.id } },
    };
    createdEventIds.push(evt.id);
    const unpaidHandler = new HandlePagarmeWebhookUseCase({
      db,
      logger,
      pagarme: makePagarme("pending"), // Pagar.me says NOT paid
    });
    let threw = false;
    try {
      await unpaidHandler.execute(evt);
    } catch {
      threw = true;
    }
    const wallet = await db.creditWallet.findUnique({ where: { userId: user.id } });
    const ev = await db.webhookEvent.findUnique({ where: { pagarmeEventId: evt.id } });
    assert(threw, "forged/unpaid paid-event throws (→ 500 retry)");
    assert(!wallet || wallet.balance === 0, "wallet NOT credited when order unpaid");
    assert(ev !== null && ev.processedAt === null, "unpaid event NOT marked processed (retryable)");
  }

  // ── CONCURRENCY: overlapping duplicate deliveries credit only once ───
  {
    const { user, payment, pagarmeOrderId } = await makeTopupPayment(5);
    const evt: PagarmeWebhookPayload = {
      id: `evt_${nanoid(10)}`,
      type: "charge.paid",
      data: { id: `ch_${nanoid(10)}`, order: { id: pagarmeOrderId, code: payment.id } },
    };
    createdEventIds.push(evt.id);
    // Two identical deliveries racing at the same time.
    await Promise.all([paidHandler.execute(evt), paidHandler.execute(evt)]);
    const wallet = await db.creditWallet.findUniqueOrThrow({ where: { userId: user.id } });
    const txns = await db.creditTransaction.count({
      where: { walletId: wallet.id, type: "TOPUP" },
    });
    assert(wallet.balance === 5, `concurrent duplicate credits ONCE (balance ${wallet.balance})`);
    assert(txns === 1, `concurrent duplicate => exactly 1 ledger entry (got ${txns})`);
  }

  // ── UNMATCHED paid event → throws (retry), not marked processed ──────
  {
    const evt: PagarmeWebhookPayload = {
      id: `evt_${nanoid(10)}`,
      type: "order.paid",
      data: { id: `or_${nanoid(10)}`, code: `nonexistent-${nanoid(6)}`, status: "paid" },
    };
    createdEventIds.push(evt.id);
    let threw = false;
    try {
      await paidHandler.execute(evt);
    } catch {
      threw = true;
    }
    const ev = await db.webhookEvent.findUnique({ where: { pagarmeEventId: evt.id } });
    assert(threw, "unmatched paid event throws (retryable)");
    assert(ev?.processedAt === null, "unmatched event NOT marked processed");
  }

  // Cleanup
  for (const uid of createdUserIds) {
    const w = await db.creditWallet.findUnique({ where: { userId: uid } });
    if (w) await db.creditTransaction.deleteMany({ where: { walletId: w.id } });
    await db.creditWallet.deleteMany({ where: { userId: uid } });
    await db.payment.deleteMany({ where: { userId: uid } });
  }
  await db.payment.deleteMany({ where: { orderId: { in: createdOrderIds } } });
  await db.order.deleteMany({ where: { id: { in: createdOrderIds } } });
  await db.user.deleteMany({ where: { id: { in: createdUserIds } } });
  await db.webhookEvent.deleteMany({ where: { pagarmeEventId: { in: createdEventIds } } });

  console.log("\n✅ Webhook verification passed");
}

function assert(cond: boolean, msg: string) {
  if (!cond) throw new Error(`ASSERT FAILED: ${msg}`);
  console.log(`  ✓ ${msg}`);
}

main()
  .catch((e) => {
    console.error("\n❌", e.message);
    process.exit(1);
  })
  .finally(() => db.$disconnect());
