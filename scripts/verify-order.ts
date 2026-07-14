/* M4 verification: create-order + manage, with a mocked Pagar.me client. Run via tsx. */
import { nanoid } from "nanoid";

import { logger } from "~/lib/logger";
import { db } from "~/server/db";
import type { PagarmeClient } from "~/server/integrations/pagarme/pagarme.client";
import type { PagarmeWebhookPayload } from "~/server/integrations/pagarme/types";
import { CreateOrderUseCase } from "~/server/use-cases/order/create-order.use-case";
import { ManageOrderUseCase } from "~/server/use-cases/order/manage-order.use-case";
import { HandlePagarmeWebhookUseCase } from "~/server/use-cases/payment/handle-pagarme-webhook.use-case";

// Mock Pagar.me: returns deterministic checkout data, records nothing external.
function mockPagarme(): PagarmeClient {
  return {
    createCheckoutOrder: async (input: { code: string }) => ({
      pagarmeOrderId: `or_${nanoid(10)}`,
      checkoutUrl: `https://sandbox.pagar.me/checkout/${input.code}`,
      status: "pending",
    }),
    getOrder: async (id: string) => ({ id, status: "paid" }),
  } as unknown as PagarmeClient;
}

async function main() {
  const pagarme = mockPagarme();
  const category = await db.category.findFirstOrThrow();
  const location = await db.location.findFirstOrThrow();

  // ── create-order ────────────────────────────────────────────────────
  const created = await new CreateOrderUseCase({ db, logger, pagarme }).execute({
    title: "Instalação de chuveiro elétrico",
    description: "Preciso instalar um chuveiro novo na área de serviço, com fiação.",
    budget: 350,
    categoryId: category.id,
    locationId: location.id,
    contactName: "Maria",
    contactPhone: "+5511988887777",
    contactEmail: "maria@example.com",
    durationTierId: "15d",
  });

  assert(!!created.checkoutUrl, "checkoutUrl returned");
  const order = await db.order.findUniqueOrThrow({
    where: { publicId: created.orderPublicId },
  });
  const payment = await db.payment.findUniqueOrThrow({ where: { id: created.paymentId } });
  assert(order.status === "PENDING_PAYMENT", `order starts PENDING_PAYMENT (got ${order.status})`);
  assert(order.durationDays === 15, `durationDays from tier (got ${order.durationDays})`);
  assert(Number(payment.amount) === 29.9, `payment amount = tier price (got ${payment.amount})`);
  assert(!!payment.pagarmeOrderId && !!payment.checkoutUrl, "payment has pagarme refs");
  assert(!!order.manageToken && order.publicId.includes("-"), "publicId + manageToken generated");

  // ── activate via webhook ────────────────────────────────────────────
  const evt: PagarmeWebhookPayload = {
    id: `evt_${nanoid(10)}`,
    type: "order.paid",
    data: { id: payment.pagarmeOrderId!, code: payment.id, status: "paid" },
  };
  await new HandlePagarmeWebhookUseCase({ db, logger, pagarme }).execute(evt);
  const active = await db.order.findUniqueOrThrow({ where: { id: order.id } });
  assert(active.status === "ACTIVE", `order ACTIVE after paid (got ${active.status})`);

  // ── manage: get + close ─────────────────────────────────────────────
  const manage = new ManageOrderUseCase({ db, logger, pagarme });
  const view = await manage.get(order.manageToken);
  assert(view?.contactPhone === "+5511988887777", "manage.get returns contact");
  assert(view?.unlockCount === 0, "unlock count 0");

  await manage.close(order.manageToken);
  const closed = await db.order.findUniqueOrThrow({ where: { id: order.id } });
  assert(closed.status === "CLOSED", `order CLOSED (got ${closed.status})`);

  // ── manage: renew ───────────────────────────────────────────────────
  const renewed = await manage.renew(order.manageToken, "30d");
  assert(!!renewed.checkoutUrl, "renew returns checkoutUrl");
  const afterRenew = await db.order.findUniqueOrThrow({ where: { id: order.id } });
  assert(afterRenew.status === "PENDING_PAYMENT", `renew resets to PENDING_PAYMENT (got ${afterRenew.status})`);
  assert(afterRenew.durationDays === 30, `renew updates duration (got ${afterRenew.durationDays})`);

  // cleanup
  await db.payment.deleteMany({ where: { orderId: order.id } });
  await db.order.delete({ where: { id: order.id } });
  await db.webhookEvent.deleteMany({ where: { pagarmeEventId: evt.id } });

  console.log("\n✅ M4 order flow verification passed");
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
