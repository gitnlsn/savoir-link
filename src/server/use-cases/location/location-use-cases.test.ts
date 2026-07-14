import { describe, expect, it, vi } from "vitest";

import { logger } from "~/lib/logger";
import type { GoogleMapsClient } from "~/server/integrations/google-maps/google-maps.client";
import type { PlaceDetails } from "~/server/integrations/google-maps/types";
import { deriveCitySlug } from "~/server/use-cases/location/derive-city-slug";
import { PlacesAutocompleteUseCase } from "~/server/use-cases/location/places-autocomplete.use-case";
import { ResolvePlaceUseCase } from "~/server/use-cases/location/resolve-place.use-case";

const details: PlaceDetails = {
  placeId: "p1",
  formattedAddress: "Av. Paulista, 1000",
  latitude: -23.56,
  longitude: -46.65,
  city: "São Paulo",
  state: "SP",
  neighborhood: "Bela Vista",
};

function fakeMaps(overrides: Partial<GoogleMapsClient> = {}): GoogleMapsClient {
  return {
    autocomplete: vi.fn().mockResolvedValue([]),
    getPlaceDetails: vi.fn().mockResolvedValue(details),
    ...overrides,
  } as unknown as GoogleMapsClient;
}

describe("deriveCitySlug", () => {
  it("matches the seed slug format", () => {
    expect(deriveCitySlug("São Paulo", "SP")).toBe("sao-paulo-sp");
    expect(deriveCitySlug("Rio de Janeiro", "RJ")).toBe("rio-de-janeiro-rj");
  });
});

describe("PlacesAutocompleteUseCase", () => {
  it("converts km bias to metres and returns predictions", async () => {
    const maps = fakeMaps({
      autocomplete: vi
        .fn()
        .mockResolvedValue([
          { placeId: "p1", description: "d", mainText: "m" },
        ]),
    });
    const result = await new PlacesAutocompleteUseCase({ logger, maps }).execute({
      input: "paulista",
      bias: { lat: -23.5, lng: -46.6, radiusKm: 5 },
    });
    expect(result).toHaveLength(1);
    expect(maps.autocomplete).toHaveBeenCalledWith("paulista", {
      bias: { lat: -23.5, lng: -46.6, radius: 5000 },
    });
  });

  it("degrades to an empty list when the client throws", async () => {
    const maps = fakeMaps({
      autocomplete: vi.fn().mockRejectedValue(new Error("boom")),
    });
    const result = await new PlacesAutocompleteUseCase({ logger, maps }).execute({
      input: "paulista",
    });
    expect(result).toEqual([]);
  });
});

describe("ResolvePlaceUseCase", () => {
  it("returns the resolved precise place", async () => {
    const maps = fakeMaps();
    const result = await new ResolvePlaceUseCase({ logger, maps }).execute({
      placeId: "p1",
    });
    expect(result).toEqual(details);
    expect(maps.getPlaceDetails).toHaveBeenCalledWith("p1");
  });
});
