import { env } from "~/env";
import { logger } from "~/lib/logger";

import type {
  AutocompleteOptions,
  PlaceDetails,
  PlacePrediction,
} from "./types";

const API_BASE = "https://places.googleapis.com/v1";
// Brazil, Portuguese — matches the marketplace's audience.
const LANGUAGE_CODE = "pt-BR";
const REGION_CODE = "BR";
// Only the fields we consume, to minimize Place Details billing (field-masked SKU).
const PLACE_DETAILS_FIELD_MASK =
  "id,formattedAddress,location,addressComponents";
// Text Search field mask (prefixed with `places.`) for the free-text geocode fallback.
const TEXT_SEARCH_FIELD_MASK =
  "places.id,places.formattedAddress,places.location,places.addressComponents";
// Rough bounding box of Brazil, used to hard-restrict the free-text geocode to Brazil.
const BRAZIL_BOUNDS = {
  low: { latitude: -33.75, longitude: -73.99 },
  high: { latitude: 5.27, longitude: -34.79 },
};

/** Shapes of the Places API (New) responses (only the fields we read). */
interface AutocompleteResponse {
  suggestions?: Array<{
    placePrediction?: {
      placeId: string;
      text: { text: string };
      structuredFormat?: {
        mainText: { text: string };
        secondaryText?: { text: string };
      };
    };
  }>;
  error?: { message: string };
}

interface PlaceDetailsResponse {
  id?: string;
  name?: string;
  formattedAddress?: string;
  location?: { latitude: number; longitude: number };
  addressComponents?: Array<{
    longText: string;
    shortText: string;
    types: string[];
  }>;
  error?: { message: string };
}

/**
 * Thin server-side client for Google Places API (New). Ported subset of the old app's
 * google-places.service.ts: autocomplete (suggestions) + place details (precise coordinates and
 * parsed Brazilian address). Deliberately drops the circuit breaker, rate limiter, in-memory cache
 * and session-token management — the client-side component debounces and caches, and calls are
 * proxied through tRPC.
 */
export class GoogleMapsClient {
  private readonly baseUrl: string;
  private readonly apiKey: string;

  constructor(apiKey: string, baseUrl?: string) {
    this.apiKey = apiKey;
    this.baseUrl = baseUrl ?? API_BASE;
  }

  /** Autocomplete suggestions for a partial address/place query. */
  async autocomplete(
    input: string,
    options: AutocompleteOptions = {},
  ): Promise<PlacePrediction[]> {
    const body: Record<string, unknown> = {
      input,
      languageCode: LANGUAGE_CODE,
      regionCode: REGION_CODE,
      // Hard-restrict suggestions to Brazil (not just bias).
      includedRegionCodes: [REGION_CODE],
    };
    if (options.sessionToken) body.sessionToken = options.sessionToken;
    if (options.bias) {
      body.locationBias = {
        circle: {
          center: { latitude: options.bias.lat, longitude: options.bias.lng },
          radius: options.bias.radius,
        },
      };
    }

    const response = await fetch(`${this.baseUrl}/places:autocomplete`, {
      method: "POST",
      headers: {
        "X-Goog-Api-Key": this.apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errorText = await response.text().catch(() => "");
      logger.error("Google Places autocomplete failed", {
        status: response.status,
        body: errorText.slice(0, 500),
      });
      throw new Error(`Google Places autocomplete error (${response.status})`);
    }

    const data = (await response.json()) as AutocompleteResponse;
    if (data.error) {
      throw new Error(`Google Places autocomplete error: ${data.error.message}`);
    }

    const predictions: PlacePrediction[] = [];
    for (const suggestion of data.suggestions ?? []) {
      const p = suggestion.placePrediction;
      if (!p?.placeId) continue;
      predictions.push({
        placeId: p.placeId,
        description: p.text.text,
        mainText: p.structuredFormat?.mainText.text ?? p.text.text,
        secondaryText: p.structuredFormat?.secondaryText?.text,
      });
    }
    return predictions;
  }

  /** Resolve a place id to its precise coordinates and parsed Brazilian address. */
  async getPlaceDetails(placeId: string): Promise<PlaceDetails> {
    const response = await fetch(`${this.baseUrl}/places/${placeId}`, {
      method: "GET",
      headers: {
        "X-Goog-Api-Key": this.apiKey,
        "X-Goog-FieldMask": PLACE_DETAILS_FIELD_MASK,
        "X-Goog-Language-Code": LANGUAGE_CODE,
      },
    });

    if (!response.ok) {
      const errorText = await response.text().catch(() => "");
      logger.error("Google Places details failed", {
        status: response.status,
        body: errorText.slice(0, 500),
      });
      throw new Error(`Google Places details error (${response.status})`);
    }

    const data = (await response.json()) as PlaceDetailsResponse;
    if (data.error) {
      throw new Error(`Google Places details error: ${data.error.message}`);
    }

    const resolvedId = data.id ?? data.name?.replace("places/", "");
    if (!resolvedId || !data.location) {
      logger.error("Google Places details missing id/location", { placeId });
      throw new Error("Resposta inválida da API de localização.");
    }

    const { city, state, neighborhood } = parseAddressComponents(
      data.addressComponents ?? [],
    );

    return {
      placeId: resolvedId,
      formattedAddress: data.formattedAddress ?? "",
      latitude: data.location.latitude,
      longitude: data.location.longitude,
      city,
      state,
      neighborhood,
    };
  }

  /**
   * Free-text geocode restricted to Brazil, via Places Text Search (New) — the same Places API (New)
   * used for autocomplete/details. Used as a fallback so a typed address that isn't surfaced as an
   * autocomplete place prediction can still resolve to coordinates + city/state. Returns null when
   * nothing is found.
   */
  async geocode(address: string): Promise<PlaceDetails | null> {
    const response = await fetch(`${this.baseUrl}/places:searchText`, {
      method: "POST",
      headers: {
        "X-Goog-Api-Key": this.apiKey,
        "X-Goog-FieldMask": TEXT_SEARCH_FIELD_MASK,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        textQuery: address,
        languageCode: LANGUAGE_CODE,
        regionCode: REGION_CODE,
        // Hard-restrict results to Brazil's bounding box.
        locationRestriction: { rectangle: BRAZIL_BOUNDS },
      }),
    });

    if (!response.ok) {
      const errorText = await response.text().catch(() => "");
      logger.error("Google text-search geocode failed", {
        status: response.status,
        body: errorText.slice(0, 500),
      });
      throw new Error(`Google geocode error (${response.status})`);
    }

    const data = (await response.json()) as TextSearchResponse;
    if (data.error) {
      throw new Error(`Google geocode error: ${data.error.message}`);
    }
    const place = data.places?.[0];
    if (!place?.location) return null;

    const resolvedId = place.id ?? place.name?.replace("places/", "");
    if (!resolvedId) return null;

    const { city, state, neighborhood } = parseAddressComponents(
      place.addressComponents ?? [],
    );
    return {
      placeId: resolvedId,
      formattedAddress: place.formattedAddress ?? "",
      latitude: place.location.latitude,
      longitude: place.location.longitude,
      city,
      state,
      neighborhood,
    };
  }
}

interface TextSearchResponse {
  places?: Array<{
    id?: string;
    name?: string;
    formattedAddress?: string;
    location?: { latitude: number; longitude: number };
    addressComponents?: Array<{
      longText: string;
      shortText: string;
      types: string[];
    }>;
  }>;
  error?: { message: string };
}

/** Map Google address_components → Brazilian city / UF / neighborhood (mirrors the old service). */
function parseAddressComponents(
  components: Array<{ longText: string; shortText: string; types: string[] }>,
): { city: string; state: string; neighborhood?: string } {
  let city = "";
  let state = "";
  let neighborhood: string | undefined;

  for (const c of components) {
    if (
      c.types.includes("locality") ||
      c.types.includes("administrative_area_level_2")
    ) {
      // Prefer locality; only fall back to level_2 if locality wasn't seen yet.
      if (!city || c.types.includes("locality")) city = c.longText;
    } else if (c.types.includes("administrative_area_level_1")) {
      state = c.shortText;
    } else if (
      c.types.includes("sublocality") ||
      c.types.includes("sublocality_level_1") ||
      c.types.includes("neighborhood")
    ) {
      neighborhood ??= c.longText;
    }
  }

  return { city, state, neighborhood };
}

let cached: GoogleMapsClient | null = null;

/**
 * Singleton accessor. Throws if the key is unset — callers must gate on
 * `env.GOOGLE_MAPS_API_KEY` / the feature flag before reaching this.
 */
export function getGoogleMapsClient(): GoogleMapsClient {
  if (!env.GOOGLE_MAPS_API_KEY) {
    throw new Error("GOOGLE_MAPS_API_KEY is not configured.");
  }
  cached ??= new GoogleMapsClient(env.GOOGLE_MAPS_API_KEY);
  return cached;
}
