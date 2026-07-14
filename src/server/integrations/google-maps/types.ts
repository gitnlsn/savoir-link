/** Minimal Google Places API (New) types for the autocomplete + geocoding used by Savoir Link. */

/** A single autocomplete suggestion (no coordinates — resolve via getPlaceDetails). */
export interface PlacePrediction {
  placeId: string;
  /** Full suggestion text, e.g. "Av. Paulista, 1000 - Bela Vista, São Paulo - SP". */
  description: string;
  /** Bold "main" line (street/establishment) shown first. */
  mainText: string;
  /** Muted secondary line (neighborhood, city). */
  secondaryText?: string;
}

/** Resolved precise place: coordinates + parsed Brazilian address components. */
export interface PlaceDetails {
  placeId: string;
  /** Google formatted, street-level address. */
  formattedAddress: string;
  latitude: number;
  longitude: number;
  /** locality / administrative_area_level_2. */
  city: string;
  /** UF short code from administrative_area_level_1, e.g. "SP". */
  state: string;
  /** sublocality / neighborhood (bairro), when present. */
  neighborhood?: string;
}

/** Optional circular bias to rank suggestions near a point (browse-side). */
export interface AutocompleteBias {
  lat: number;
  lng: number;
  /** Radius in metres. */
  radius: number;
}

export interface AutocompleteOptions {
  bias?: AutocompleteBias;
  /** Google Places session token (billing optimization). Passed through if provided. */
  sessionToken?: string;
}
