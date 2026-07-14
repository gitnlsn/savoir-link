import { describe, expect, it } from "vitest";

import {
  calculateDistanceKm,
  filterAndSortByRadius,
  getBoundingBox,
} from "~/lib/geo";

// Seed centroids (prisma/seed.ts).
const SAO_PAULO = { lat: -23.5505, lng: -46.6333 };
const RIO = { lat: -22.9068, lng: -43.1729 };
const CAMPINAS = { lat: -22.9099, lng: -47.0626 }; // ~90 km from São Paulo

describe("calculateDistanceKm", () => {
  it("returns 0 for the same point", () => {
    expect(
      calculateDistanceKm(SAO_PAULO.lat, SAO_PAULO.lng, SAO_PAULO.lat, SAO_PAULO.lng),
    ).toBeCloseTo(0, 5);
  });

  it("matches the known São Paulo ↔ Rio great-circle distance (~360 km)", () => {
    const d = calculateDistanceKm(SAO_PAULO.lat, SAO_PAULO.lng, RIO.lat, RIO.lng);
    expect(d).toBeGreaterThan(350);
    expect(d).toBeLessThan(370);
  });

  it("is symmetric", () => {
    const ab = calculateDistanceKm(SAO_PAULO.lat, SAO_PAULO.lng, RIO.lat, RIO.lng);
    const ba = calculateDistanceKm(RIO.lat, RIO.lng, SAO_PAULO.lat, SAO_PAULO.lng);
    expect(ab).toBeCloseTo(ba, 6);
  });
});

describe("getBoundingBox", () => {
  it("contains the center point", () => {
    const box = getBoundingBox(SAO_PAULO.lat, SAO_PAULO.lng, 10);
    expect(SAO_PAULO.lat).toBeGreaterThan(box.minLat);
    expect(SAO_PAULO.lat).toBeLessThan(box.maxLat);
    expect(SAO_PAULO.lng).toBeGreaterThan(box.minLng);
    expect(SAO_PAULO.lng).toBeLessThan(box.maxLng);
  });

  it("grows with the radius", () => {
    const small = getBoundingBox(SAO_PAULO.lat, SAO_PAULO.lng, 5);
    const large = getBoundingBox(SAO_PAULO.lat, SAO_PAULO.lng, 50);
    expect(large.maxLat - large.minLat).toBeGreaterThan(small.maxLat - small.minLat);
  });
});

describe("filterAndSortByRadius", () => {
  const items = [
    { id: "rio", ...RIO },
    { id: "campinas", ...CAMPINAS },
    { id: "sp", ...SAO_PAULO },
    { id: "no-coords", lat: null as number | null, lng: null as number | null },
  ];
  const getCoords = (i: (typeof items)[number]) =>
    i.lat != null && i.lng != null ? { lat: i.lat, lng: i.lng } : null;

  it("keeps only items within the radius, dropping null coords", () => {
    // 100 km around São Paulo: includes SP + Campinas (~90 km), excludes Rio (~360 km).
    const result = filterAndSortByRadius(items, SAO_PAULO, 100, getCoords);
    expect(result.map((r) => r.id)).toEqual(["sp", "campinas"]);
  });

  it("sorts ascending by distance and attaches distanceKm", () => {
    const result = filterAndSortByRadius(items, SAO_PAULO, 500, getCoords);
    expect(result.map((r) => r.id)).toEqual(["sp", "campinas", "rio"]);
    expect(result[0]!.distanceKm).toBeCloseTo(0, 3);
    for (let i = 1; i < result.length; i++) {
      expect(result[i]!.distanceKm).toBeGreaterThanOrEqual(result[i - 1]!.distanceKm);
    }
  });

  it("includes a point essentially on the radius boundary", () => {
    const dCampinas = calculateDistanceKm(
      SAO_PAULO.lat,
      SAO_PAULO.lng,
      CAMPINAS.lat,
      CAMPINAS.lng,
    );
    const result = filterAndSortByRadius(items, SAO_PAULO, dCampinas, getCoords);
    expect(result.map((r) => r.id)).toContain("campinas");
  });
});
