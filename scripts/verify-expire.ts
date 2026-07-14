/* M8 verification: expire-orders + revealed contacts survive expiry. Run via tsx. */
import { nanoid } from "nanoid";

import { logger } from "~/lib/logger";
import { db } from "~/server/db";
import { ListLeadsUseCase } from "~/server/use-cases/lead/list-leads.use-case";
import { ListMyUnlocksUseCase } from "~/server/use-cases/lead/list-my-unlocks.use-case";
import { ExpireOrdersUseCase } from "~/server/use-cases/order/expire-orders.use-case";

async function makeOrder(expiresAt: Date) {
  const category = await db.category.findFirstOrThrow();
  const location = await db.location.findFirstOrThrow();
  return db.order.create({
    data: {
      publicId: `t-${nanoid(8)}`,
      manageToken: nanoid(24),
      status: "ACTIVE",
      title: "Serviço de teste",
      description: "descrição de teste",
      budget: 300,
      categoryId: category.id,
      locationId: location.id,
      contactName: "Cliente",
      contactPhone: "+5511900000000",
      contactEmail: "cliente@example.com",
      durationDays: 7,
      publishedAt: new Date(),
      expiresAt,
    },
  });
}

async function main() {
  const past = await makeOrder(new Date(Date.now() - 3600_000)); // expired 1h ago
  const future = await makeOrder(new Date(Date.now() + 7 * 86400_000)); // active

  // A provider unlocked the soon-to-expire order.
  const provider = await db.user.create({
    data: { email: `pro-${nanoid(6)}@example.com`, name: "Pro" },
  });
  await db.contactUnlock.create({
    data: { providerId: provider.id, orderId: past.id, creditsSpent: 1 },
  });

  const { expired } = await new ExpireOrdersUseCase({ db, logger }).execute();
  assert(expired >= 1, `expire flips at least the past order (count ${expired})`);

  const pastAfter = await db.order.findUniqueOrThrow({ where: { id: past.id } });
  const futureAfter = await db.order.findUniqueOrThrow({ where: { id: future.id } });
  assert(pastAfter.status === "EXPIRED", `past order EXPIRED (got ${pastAfter.status})`);
  assert(futureAfter.status === "ACTIVE", `future order still ACTIVE (got ${futureAfter.status})`);

  // Expired order no longer in browse.
  const { leads } = await new ListLeadsUseCase({ db }).execute({ pageSize: 50 });
  assert(!leads.some((l) => l.publicId === past.publicId), "expired order dropped from browse");
  assert(leads.some((l) => l.publicId === future.publicId), "active order still in browse");

  // Revealed contact survives expiry.
  const mine = await new ListMyUnlocksUseCase({ db }).execute(provider.id);
  assert(
    mine.some((u) => u.orderPublicId === past.publicId && u.contact.phone === "+5511900000000"),
    "previously unlocked contact still visible after expiry",
  );

  // cleanup
  await db.contactUnlock.deleteMany({ where: { orderId: past.id } });
  await db.order.deleteMany({ where: { id: { in: [past.id, future.id] } } });
  await db.user.delete({ where: { id: provider.id } });

  console.log("\n✅ M8 expire verification passed");
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
