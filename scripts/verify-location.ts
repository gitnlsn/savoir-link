/*
 * Precise-location verification (M?, run via `tsx --env-file=.env scripts/verify-location.ts`).
 * Exercises the real Google Places client + the geo helpers end-to-end:
 *   1. autocomplete("Av. Paulista") → resolve first prediction → assert coords/city/state
 *   2. upsert the coarse city (deriveCitySlug) so the FK path is proven
 *   3. bbox + Haversine nearby query over existing orders, printing distances
 * Requires GOOGLE_MAPS_API_KEY in .env.
 */
import { env } from "~/env";
import { filterAndSortByRadius, getBoundingBox } from "~/lib/geo";
import { logger } from "~/lib/logger";
import { db } from "~/server/db";
import { getGoogleMapsClient } from "~/server/integrations/google-maps/google-maps.client";
import { deriveCitySlug } from "~/server/use-cases/location/derive-city-slug";

async function main() {
  if (!env.GOOGLE_MAPS_API_KEY) {
    logger.warn("GOOGLE_MAPS_API_KEY not set — skipping Google checks");
    return;
  }
  const maps = getGoogleMapsClient();

  // 1. Autocomplete → resolve.
  const predictions = await maps.autocomplete("Av. Paulista, São Paulo");
  logger.info("Autocomplete predictions", {
    count: predictions.length,
    first: predictions[0]?.description,
  });
  const first = predictions[0];
  if (!first) throw new Error("No predictions returned");

  const place = await maps.getPlaceDetails(first.placeId);
  logger.info("Resolved place", place);
  if (!place.latitude || !place.longitude) throw new Error("Missing coords");
  if (!place.city || !place.state) throw new Error("Missing city/state");

  // 2. Upsert the coarse city (mirrors CreateOrderUseCase.resolveLocation).
  const slug = deriveCitySlug(place.city, place.state);
  const location = await db.location.upsert({
    where: { slug },
    create: {
      slug,
      city: place.city,
      state: place.state,
      latitude: place.latitude,
      longitude: place.longitude,
    },
    update: {},
    select: { id: true, slug: true },
  });
  logger.info("City upserted", location);

  // 3. Nearby query: bbox prefilter in DB, then exact Haversine filter.
  const radiusKm = 50;
  const box = getBoundingBox(place.latitude, place.longitude, radiusKm);
  const rows = await db.order.findMany({
    where: {
      latitude: { gte: box.minLat, lte: box.maxLat, not: null },
      longitude: { gte: box.minLng, lte: box.maxLng, not: null },
    },
    select: { publicId: true, title: true, latitude: true, longitude: true },
    take: 500,
  });
  const nearby = filterAndSortByRadius(
    rows,
    { lat: place.latitude, lng: place.longitude },
    radiusKm,
    (r) =>
      r.latitude != null && r.longitude != null
        ? { lat: r.latitude, lng: r.longitude }
        : null,
  );
  logger.info(`Orders within ${radiusKm}km`, {
    total: nearby.length,
    sample: nearby
      .slice(0, 5)
      .map((n) => ({ title: n.title, km: Number(n.distanceKm.toFixed(1)) })),
  });

  logger.info("verify-location OK");
}

main()
  .catch((err) => {
    logger.error("verify-location failed", { err: String(err) });
    process.exitCode = 1;
  })
  .finally(() => db.$disconnect());
