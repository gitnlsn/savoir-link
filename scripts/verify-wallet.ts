/* M5 verification: topup-credits + wallet crediting via webhook. Run via tsx. */
import { nanoid } from "nanoid";

import { logger } from "~/lib/logger";
import { db } from "~/server/db";
import type { PagarmeClient } from "~/server/integrations/pagarme/pagarme.client";
import type { PagarmeWebhookPayload } from "~/server/integrations/pagarme/types";
import { GetWalletUseCase } from "~/server/use-cases/wallet/get-wallet.use-case";
import { TopupCreditsUseCase } from "~/server/use-cases/wallet/topup-credits.use-case";
import { HandlePagarmeWebhookUseCase } from "~/server/use-cases/payment/handle-pagarme-webhook.use-case";

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
  const user = await db.user.create({
    data: { email: `pro-${nanoid(6)}@example.com`, name: "Pro" },
  });

  // Wallet starts at zero (lazily created).
  const w0 = await new GetWalletUseCase({ db }).execute(user.id);
  assert(w0.balance === 0, `new wallet balance 0 (got ${w0.balance})`);

  // Buy the 15-credit package.
  const { checkoutUrl } = await new TopupCreditsUseCase({ db, logger, pagarme }).execute({
    userId: user.id,
    packageId: "credits-15",
  });
  assert(!!checkoutUrl, "topup returns checkoutUrl");
  const payment = await db.payment.findFirstOrThrow({
    where: { userId: user.id, type: "CREDIT_TOPUP" },
  });
  assert(payment.creditQuantity === 15, `payment records 15 credits (got ${payment.creditQuantity})`);
  assert(payment.status === "PENDING", "payment still PENDING before webhook");

  // Confirm payment → credit wallet.
  const evt: PagarmeWebhookPayload = {
    id: `evt_${nanoid(10)}`,
    type: "charge.paid",
    data: { id: `ch_${nanoid(8)}`, order: { id: payment.pagarmeOrderId!, code: payment.id } },
  };
  await new HandlePagarmeWebhookUseCase({ db, logger, pagarme }).execute(evt);

  const w1 = await new GetWalletUseCase({ db }).execute(user.id);
  assert(w1.balance === 15, `wallet credited to 15 (got ${w1.balance})`);
  assert(w1.transactions.length === 1 && w1.transactions[0]!.type === "TOPUP", "one TOPUP ledger entry");

  // cleanup
  const wallet = await db.creditWallet.findUniqueOrThrow({ where: { userId: user.id } });
  await db.creditTransaction.deleteMany({ where: { walletId: wallet.id } });
  await db.creditWallet.delete({ where: { id: wallet.id } });
  await db.payment.deleteMany({ where: { userId: user.id } });
  await db.user.delete({ where: { id: user.id } });
  await db.webhookEvent.deleteMany({ where: { pagarmeEventId: evt.id } });

  console.log("\n✅ M5 wallet verification passed");
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
