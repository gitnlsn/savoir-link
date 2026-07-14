import { afterEach, describe, expect, it, vi } from "vitest";

import { GoogleMapsClient } from "~/server/integrations/google-maps/google-maps.client";

const client = new GoogleMapsClient("test-key");

function mockFetchOnce(body: unknown, ok = true, status = 200) {
  const fetchMock = vi.fn().mockResolvedValue({
    ok,
    status,
    json: async () => body,
    text: async () => JSON.stringify(body),
  });
  vi.stubGlobal("fetch", fetchMock);
  return fetchMock;
}

afterEach(() => {
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
});

describe("GoogleMapsClient.autocomplete", () => {
  it("sends the API key header + pt-BR/BR body and maps suggestions", async () => {
    const fetchMock = mockFetchOnce({
      suggestions: [
        {
          placePrediction: {
            placeId: "place-1",
            text: { text: "Av. Paulista, 1000 - Bela Vista, São Paulo - SP" },
            structuredFormat: {
              mainText: { text: "Av. Paulista, 1000" },
              secondaryText: { text: "Bela Vista, São Paulo - SP" },
            },
          },
        },
        { queryPrediction: { text: { text: "ignored — not a place" } } },
      ],
    });

    const result = await client.autocomplete("Av Paulista", {
      bias: { lat: -23.56, lng: -46.65, radius: 5000 },
    });

    const [url, init] = fetchMock.mock.calls[0]!;
    expect(url).toContain("/places:autocomplete");
    expect((init as RequestInit).method).toBe("POST");
    const headers = (init as RequestInit).headers as Record<string, string>;
    expect(headers["X-Goog-Api-Key"]).toBe("test-key");
    const body = JSON.parse((init as RequestInit).body as string);
    expect(body.languageCode).toBe("pt-BR");
    expect(body.regionCode).toBe("BR");
    expect(body.includedRegionCodes).toEqual(["BR"]); // hard-restricted to Brazil
    expect(body.locationBias.circle.radius).toBe(5000);

    expect(result).toEqual([
      {
        placeId: "place-1",
        description: "Av. Paulista, 1000 - Bela Vista, São Paulo - SP",
        mainText: "Av. Paulista, 1000",
        secondaryText: "Bela Vista, São Paulo - SP",
      },
    ]);
  });

  it("throws on a non-ok HTTP response", async () => {
    mockFetchOnce({ error: { message: "quota" } }, false, 429);
    await expect(client.autocomplete("x")).rejects.toThrow(/autocomplete error/);
  });
});

describe("GoogleMapsClient.getPlaceDetails", () => {
  it("requests the field mask and parses Brazilian address components", async () => {
    const fetchMock = mockFetchOnce({
      id: "place-1",
      formattedAddress: "Av. Paulista, 1000 - Bela Vista, São Paulo - SP, Brasil",
      location: { latitude: -23.5615, longitude: -46.6562 },
      addressComponents: [
        { longText: "1000", shortText: "1000", types: ["street_number"] },
        { longText: "Avenida Paulista", shortText: "Av. Paulista", types: ["route"] },
        { longText: "Bela Vista", shortText: "Bela Vista", types: ["sublocality"] },
        { longText: "São Paulo", shortText: "São Paulo", types: ["locality"] },
        {
          longText: "São Paulo",
          shortText: "SP",
          types: ["administrative_area_level_1"],
        },
        { longText: "Brasil", shortText: "BR", types: ["country"] },
      ],
    });

    const details = await client.getPlaceDetails("place-1");

    const [url, init] = fetchMock.mock.calls[0]!;
    expect(url).toContain("/places/place-1");
    const headers = (init as RequestInit).headers as Record<string, string>;
    expect(headers["X-Goog-FieldMask"]).toContain("addressComponents");
    expect(headers["X-Goog-Api-Key"]).toBe("test-key");

    expect(details).toEqual({
      placeId: "place-1",
      formattedAddress: "Av. Paulista, 1000 - Bela Vista, São Paulo - SP, Brasil",
      latitude: -23.5615,
      longitude: -46.6562,
      city: "São Paulo",
      state: "SP",
      neighborhood: "Bela Vista",
    });
  });

  it("throws when the response lacks a location", async () => {
    mockFetchOnce({ id: "place-1" });
    await expect(client.getPlaceDetails("place-1")).rejects.toThrow(
      /inválida/,
    );
  });
});

describe("GoogleMapsClient.geocode", () => {
  it("uses Text Search restricted to Brazil and parses components", async () => {
    const fetchMock = mockFetchOnce({
      places: [
        {
          id: "geo-1",
          formattedAddress: "Praça da Sé, São Paulo - SP, Brasil",
          location: { latitude: -23.55, longitude: -46.63 },
          addressComponents: [
            { longText: "Sé", shortText: "Sé", types: ["sublocality"] },
            { longText: "São Paulo", shortText: "São Paulo", types: ["locality"] },
            {
              longText: "São Paulo",
              shortText: "SP",
              types: ["administrative_area_level_1"],
            },
          ],
        },
      ],
    });

    const result = await client.geocode("Praça da Sé São Paulo");

    const [url, init] = fetchMock.mock.calls[0]!;
    expect(url).toContain("/places:searchText");
    const body = JSON.parse((init as RequestInit).body as string);
    expect(body.textQuery).toBe("Praça da Sé São Paulo");
    expect(body.regionCode).toBe("BR");
    expect(body.locationRestriction.rectangle).toBeTruthy(); // Brazil-restricted
    expect(result).toEqual({
      placeId: "geo-1",
      formattedAddress: "Praça da Sé, São Paulo - SP, Brasil",
      latitude: -23.55,
      longitude: -46.63,
      city: "São Paulo",
      state: "SP",
      neighborhood: "Sé",
    });
  });

  it("returns null when there are no places", async () => {
    mockFetchOnce({ places: [] });
    expect(await client.geocode("nowhere at all")).toBeNull();
  });
});
