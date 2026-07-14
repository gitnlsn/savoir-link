import { beforeAll, describe, expect, it } from "vitest";

import { env } from "~/env";
import { GoogleMapsClient } from "~/server/integrations/google-maps/google-maps.client";

/**
 * Integration tests against the REAL Google Places / Geocoding API. They require a real, billed
 * `GOOGLE_MAPS_API_KEY` in `.env.test`; without one (or with the local placeholder) the whole suite
 * self-skips so CI/local runs stay green. These validate the actual request/response contract:
 * autocomplete → resolve → geocode all return real Brazilian coordinates.
 */
const apiKey = env.GOOGLE_MAPS_API_KEY ?? "";
const HAS_REAL_KEY = apiKey.startsWith("AIza");

if (!HAS_REAL_KEY) {
  // eslint-disable-next-line no-console
  console.warn(
    "[google-maps integration] Skipping — set a real GOOGLE_MAPS_API_KEY in .env.test to run.",
  );
}

describe.runIf(HAS_REAL_KEY)("GoogleMapsClient — live Google API", () => {
  let client: GoogleMapsClient;

  beforeAll(() => {
    client = new GoogleMapsClient(apiKey);
  });

  it("autocompletes a São Paulo address and resolves precise coordinates", async () => {
    const predictions = await client.autocomplete("Avenida Paulista, São Paulo");
    expect(predictions.length).toBeGreaterThan(0);
    expect(predictions[0]!.placeId).toBeTruthy();

    const details = await client.getPlaceDetails(predictions[0]!.placeId);
    expect(details.latitude).toBeLessThan(0); // southern hemisphere
    expect(details.longitude).toBeLessThan(0); // western hemisphere
    // Roughly within Brazil's bounding box.
    expect(details.latitude).toBeGreaterThan(-34);
    expect(details.longitude).toBeGreaterThan(-74);
    expect(details.city).toBeTruthy();
    expect(details.state).toBeTruthy();
  });

  it("geocodes free text (Brazil-restricted) to coordinates", async () => {
    const result = await client.geocode("Praça da Sé, São Paulo");
    expect(result).not.toBeNull();
    expect(result!.state).toBe("SP");
    expect(result!.latitude).toBeGreaterThan(-34);
    expect(result!.latitude).toBeLessThan(5);
  });

  it("returns Brazilian results even for an ambiguous name (region restriction)", async () => {
    // "Salvador" exists in many countries; the country:BR restriction should keep us in Brazil.
    const result = await client.geocode("Salvador");
    expect(result).not.toBeNull();
    // Brazil longitudes are all negative and west of ~-34.
    expect(result!.longitude).toBeLessThan(-34);
  });
});
