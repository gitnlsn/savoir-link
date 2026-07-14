/* Throwaway verification for M3 webhook fulfillment + idempotency. Run: npx tsx scripts/verify-webhook.ts */
import { nanoid } from "nanoid";

import { logger } from "~/lib/logger";
import { db } from "~/server/db";
import { PaymentStatus, PaymentType } from "~/server/db-types";
import type { PagarmeWebhookPayload } from "~/server/integrations/pagarme/types";
import { HandlePagarmeWebhookUseCase } from "~/server/use-cases/payment/handle-pagarme-webhook.use-case";

async function main() {
  const uc = new HandlePagarmeWebhookUseCase({ db, logger });
  const category = await db.category.findFirstOrThrow();
  const location = await db.location.findFirstOrThrow();

  // ── ORDER PUBLICATION ───────────────────────────────────────────────
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

  const r1 = await uc.execute(orderPaid);
  const r2 = await uc.execute(orderPaid); // replay
  const orderAfter = await db.order.findUniqueOrThrow({ where: { id: order.id } });
  const pubPayAfter = await db.payment.findUniqueOrThrow({ where: { id: pubPayment.id } });

  assert(r1.status === "processed", `order.paid first => processed (got ${r1.status})`);
  assert(r2.status === "duplicate", `order.paid replay => duplicate (got ${r2.status})`);
  assert(orderAfter.status === "ACTIVE", `order ACTIVE (got ${orderAfter.status})`);
  assert(!!orderAfter.expiresAt && !!orderAfter.publishedAt, "publishedAt/expiresAt set");
  const days = Math.round(
    (orderAfter.expiresAt!.getTime() - orderAfter.publishedAt!.getTime()) / 86400000,
  );
  assert(days === 15, `expiresAt = published + 15d (got ${days})`);
  assert(pubPayAfter.status === PaymentStatus.PAID, "publication payment PAID");

  // ── CREDIT TOPUP ────────────────────────────────────────────────────
  const user = await db.user.create({
    data: { email: `pro-${nanoid(6)}@example.com`, name: "Pro" },
  });
  const topupPagarmeId = `or_${nanoid(10)}`;
  const topupPayment = await db.payment.create({
    data: {
      type: PaymentType.CREDIT_TOPUP,
      amount: 129.9,
      payerEmail: user.email!,
      userId: user.id,
      creditQuantity: 15,
      pagarmeOrderId: topupPagarmeId,
    },
  });
  const chargePaid: PagarmeWebhookPayload = {
    id: `evt_${nanoid(10)}`,
    type: "charge.paid",
    data: {
      id: `ch_${nanoid(10)}`,
      status: "paid",
      order: { id: topupPagarmeId, code: topupPayment.id },
    },
  };

  const c1 = await uc.execute(chargePaid);
  const c2 = await uc.execute(chargePaid); // replay
  const wallet = await db.creditWallet.findUniqueOrThrow({ where: { userId: user.id } });
  const txns = await db.creditTransaction.count({ where: { walletId: wallet.id } });

  assert(c1.status === "processed", `charge.paid first => processed (got ${c1.status})`);
  assert(c2.status === "duplicate", `charge.paid replay => duplicate (got ${c2.status})`);
  assert(wallet.balance === 15, `wallet balance 15 (got ${wallet.balance})`);
  assert(txns === 1, `exactly 1 ledger entry (got ${txns})`);

  // Cleanup
  await db.contactUnlock.deleteMany({ where: { orderId: order.id } });
  await db.payment.deleteMany({ where: { id: { in: [pubPayment.id, topupPayment.id] } } });
  await db.order.delete({ where: { id: order.id } });
  await db.creditTransaction.deleteMany({ where: { walletId: wallet.id } });
  await db.creditWallet.delete({ where: { id: wallet.id } });
  await db.user.delete({ where: { id: user.id } });
  await db.webhookEvent.deleteMany({
    where: { pagarmeEventId: { in: [orderPaid.id, chargePaid.id] } },
  });

  console.log("\n✅ M3 webhook verification passed");
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
