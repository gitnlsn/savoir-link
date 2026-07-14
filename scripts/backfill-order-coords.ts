/*
 * One-off backfill: copy each order's coarse city centroid (Location.latitude/longitude, seeded for
 * all 27 capitals) into Order.latitude/longitude where they are still null. Without this, orders
 * created before precise-location shipped are invisible to radius search. Run via tsx.
 */
import { logger } from "~/lib/logger";
import { db } from "~/server/db";

async function main() {
  const orders = await db.order.findMany({
    where: { OR: [{ latitude: null }, { longitude: null }] },
    select: {
      id: true,
      location: { select: { latitude: true, longitude: true } },
    },
  });

  logger.info("Backfilling order coordinates", { candidates: orders.length });

  let updated = 0;
  let skipped = 0;
  for (const order of orders) {
    const { latitude, longitude } = order.location;
    if (latitude == null || longitude == null) {
      // City has no centroid (shouldn't happen for the seeded capitals) — leave as-is.
      skipped++;
      continue;
    }
    await db.order.update({
      where: { id: order.id },
      data: { latitude, longitude },
    });
    updated++;
  }

  logger.info("Backfill complete", { updated, skipped });
}

main()
  .catch((err) => {
    logger.error("Backfill failed", { err });
    process.exitCode = 1;
  })
  .finally(() => db.$disconnect());
