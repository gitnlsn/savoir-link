import type { Logger } from "~/lib/logger";
import type { GoogleMapsClient } from "~/server/integrations/google-maps/google-maps.client";
import type { PlacePrediction } from "~/server/integrations/google-maps/types";

export interface PlacesAutocompleteInput {
  input: string;
  /** Optional circular bias (browse-side: rank suggestions near a point). Radius in km. */
  bias?: { lat: number; lng: number; radiusKm: number };
}

export interface PlacesAutocompleteDeps {
  logger: Logger;
  maps: GoogleMapsClient;
}

/** Returns Google Places autocomplete suggestions for a partial address query. */
export class PlacesAutocompleteUseCase {
  constructor(private deps: PlacesAutocompleteDeps) {}

  async execute(input: PlacesAutocompleteInput): Promise<PlacePrediction[]> {
    const { maps, logger } = this.deps;
    try {
      return await maps.autocomplete(input.input, {
        bias: input.bias
          ? {
              lat: input.bias.lat,
              lng: input.bias.lng,
              radius: input.bias.radiusKm * 1000, // km → metres
            }
          : undefined,
      });
    } catch (err) {
      // Degrade gracefully: a failed suggestion lookup shouldn't break the form.
      logger.error("Autocomplete failed", { err });
      return [];
    }
  }
}
