/* M6 verification: list-leads (contact stripped) + unlock-contact (atomic, idempotent). Run via tsx. */
import { nanoid } from "nanoid";

import { logger } from "~/lib/logger";
import { db } from "~/server/db";
import { ListLeadsUseCase } from "~/server/use-cases/lead/list-leads.use-case";
import { ListMyUnlocksUseCase } from "~/server/use-cases/lead/list-my-unlocks.use-case";
import {
  UnlockContactUseCase,
  UnlockError,
} from "~/server/use-cases/lead/unlock-contact.use-case";

async function makeActiveOrder(days = 15) {
  const category = await db.category.findFirstOrThrow();
  const location = await db.location.findFirstOrThrow();
  const now = new Date();
  return db.order.create({
    data: {
      publicId: `t-${nanoid(8)}`,
      manageToken: nanoid(24),
      status: "ACTIVE",
      title: "Pintura de apartamento",
      description: "Pintar 2 quartos e sala",
      budget: 1200,
      categoryId: category.id,
      locationId: location.id,
      contactName: "João Cliente",
      contactPhone: "+5511977776666",
      contactWhatsapp: "+5511977776666",
      contactEmail: "joao@example.com",
      durationDays: days,
      publishedAt: now,
      expiresAt: new Date(now.getTime() + days * 86400000),
    },
  });
}

async function main() {
  const provider = await db.user.create({
    data: { email: `pro-${nanoid(6)}@example.com`, name: "Pro" },
  });
  const order = await makeActiveOrder();
  const unlock = new UnlockContactUseCase({ db, logger });

  // ── list-leads never leaks contact ──────────────────────────────────
  const listed = await new ListLeadsUseCase({ db }).execute({
    providerId: provider.id,
  });
  const card = listed.leads.find((l) => l.publicId === order.publicId);
  assert(!!card, "order appears in browse");
  const cardJson = JSON.stringify(card);
  assert(!cardJson.includes("977776666") && !cardJson.includes("joao@"),
    "browse card contains NO contact details");
  assert(card!.alreadyUnlocked === false, "not yet unlocked");

  // ── unlock without credits → INSUFFICIENT_CREDITS ───────────────────
  let threw: UnlockError | null = null;
  try {
    await unlock.execute(provider.id, order.publicId);
  } catch (e) {
    threw = e as UnlockError;
  }
  assert(threw?.code === "INSUFFICIENT_CREDITS", `no credits => INSUFFICIENT_CREDITS (got ${threw?.code})`);

  // ── give 2 credits, unlock ──────────────────────────────────────────
  await db.creditWallet.create({ data: { userId: provider.id, balance: 2 } });
  const r1 = await unlock.execute(provider.id, order.publicId);
  assert(r1.status === "unlocked", `first unlock => unlocked (got ${r1.status})`);
  assert(r1.contact.phone === "+5511977776666", "contact revealed on unlock");
  assert(r1.balance === 1, `balance decremented to 1 (got ${r1.balance})`);

  const orderAfter = await db.order.findUniqueOrThrow({ where: { id: order.id } });
  assert(orderAfter.unlockCount === 1, `order.unlockCount = 1 (got ${orderAfter.unlockCount})`);

  // ── unlock again → idempotent, no extra charge ──────────────────────
  const r2 = await unlock.execute(provider.id, order.publicId);
  assert(r2.status === "already", `second unlock => already (got ${r2.status})`);
  const wallet = await db.creditWallet.findUniqueOrThrow({ where: { userId: provider.id } });
  assert(wallet.balance === 1, `balance unchanged on re-unlock (got ${wallet.balance})`);
  const txnCount = await db.creditTransaction.count({ where: { walletId: wallet.id } });
  assert(txnCount === 1, `exactly 1 UNLOCK ledger entry (got ${txnCount})`);

  // ── my unlocks shows the contact ────────────────────────────────────
  const mine = await new ListMyUnlocksUseCase({ db }).execute(provider.id);
  assert(mine.length === 1 && mine[0]!.contact.email === "joao@example.com", "my-unlocks reveals contact");

  // ── expired order cannot be unlocked ────────────────────────────────
  const provider2 = await db.user.create({
    data: { email: `pro2-${nanoid(6)}@example.com`, name: "Pro2" },
  });
  await db.creditWallet.create({ data: { userId: provider2.id, balance: 5 } });
  const expired = await makeActiveOrder(1);
  await db.order.update({
    where: { id: expired.id },
    data: { status: "EXPIRED", expiresAt: new Date(Date.now() - 1000) },
  });
  let expErr: UnlockError | null = null;
  try {
    await unlock.execute(provider2.id, expired.publicId);
  } catch (e) {
    expErr = e as UnlockError;
  }
  assert(expErr?.code === "NOT_AVAILABLE", `expired => NOT_AVAILABLE (got ${expErr?.code})`);

  // cleanup
  for (const p of [provider.id, provider2.id]) {
    const w = await db.creditWallet.findUnique({ where: { userId: p } });
    if (w) await db.creditTransaction.deleteMany({ where: { walletId: w.id } });
  }
  await db.contactUnlock.deleteMany({ where: { orderId: { in: [order.id, expired.id] } } });
  await db.creditWallet.deleteMany({ where: { userId: { in: [provider.id, provider2.id] } } });
  await db.order.deleteMany({ where: { id: { in: [order.id, expired.id] } } });
  await db.user.deleteMany({ where: { id: { in: [provider.id, provider2.id] } } });

  console.log("\n✅ M6 unlock verification passed");
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
