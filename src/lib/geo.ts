import { bbox } from "@turf/bbox";
import { buffer } from "@turf/buffer";
import { distance } from "@turf/distance";
import { point } from "@turf/helpers";

/**
 * Geospatial helpers for precise-location + radius search. Kept as pure, DB-free functions so they
 * are trivially unit-testable and isolate the Turf dependency behind a small API.
 *
 * Coordinates are (lat, lng) throughout; GeoJSON internally is (lng, lat), handled here.
 */

export interface LatLng {
  lat: number;
  lng: number;
}

export interface BoundingBox {
  minLat: number;
  maxLat: number;
  minLng: number;
  maxLng: number;
}

/** Great-circle distance between two points, in kilometres. */
export function calculateDistanceKm(
  lat1: number,
  lng1: number,
  lat2: number,
  lng2: number,
): number {
  return distance(point([lng1, lat1]), point([lng2, lat2]), {
    units: "kilometres",
  });
}

/**
 * Axis-aligned bounding box around a point covering `radiusKm`, used as a coarse Prisma prefilter
 * before exact distance filtering. A small (~100m) tolerance is added so points right on the circle
 * edge aren't dropped by floating-point error.
 */
export function getBoundingBox(
  lat: number,
  lng: number,
  radiusKm: number,
): BoundingBox {
  const buffered = buffer(point([lng, lat]), radiusKm, { units: "kilometres" });
  // buffer() can theoretically return undefined for degenerate input; fall back to a naive box.
  if (!buffered) {
    const d = radiusKm / 111; // ~111 km per degree of latitude
    return {
      minLat: lat - d,
      maxLat: lat + d,
      minLng: lng - d,
      maxLng: lng + d,
    };
  }
  const [minLng, minLat, maxLng, maxLat] = bbox(buffered);
  const tolerance = 0.001;
  return {
    minLat: minLat - tolerance,
    maxLat: maxLat + tolerance,
    minLng: minLng - tolerance,
    maxLng: maxLng + tolerance,
  };
}

/**
 * Filter a list to items within `radiusKm` of `center` and sort by ascending distance. Each returned
 * item carries the computed `distanceKm`. `getCoords` extracts (lat, lng); items with null coords are
 * dropped. Generic so it works for orders here and anything spatial later.
 */
export function filterAndSortByRadius<T>(
  items: T[],
  center: LatLng,
  radiusKm: number,
  getCoords: (item: T) => LatLng | null,
): Array<T & { distanceKm: number }> {
  const withDistance: Array<T & { distanceKm: number }> = [];
  for (const item of items) {
    const coords = getCoords(item);
    if (!coords) continue;
    const distanceKm = calculateDistanceKm(
      center.lat,
      center.lng,
      coords.lat,
      coords.lng,
    );
    if (distanceKm <= radiusKm) {
      withDistance.push({ ...item, distanceKm });
    }
  }
  withDistance.sort((a, b) => a.distanceKm - b.distanceKm);
  return withDistance;
}
