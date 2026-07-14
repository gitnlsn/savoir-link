import type { Logger } from "~/lib/logger";
import type { GoogleMapsClient } from "~/server/integrations/google-maps/google-maps.client";
import type { PlaceDetails } from "~/server/integrations/google-maps/types";

export interface ResolvePlaceInput {
  placeId: string;
}

export interface ResolvePlaceDeps {
  logger: Logger;
  maps: GoogleMapsClient;
}

/**
 * Resolve a Google place id (from an autocomplete suggestion, which carries no coordinates) to its
 * precise coordinates and parsed Brazilian address. Called when the user picks a suggestion.
 */
export class ResolvePlaceUseCase {
  constructor(private deps: ResolvePlaceDeps) {}

  async execute(input: ResolvePlaceInput): Promise<PlaceDetails> {
    const { maps, logger } = this.deps;
    const details = await maps.getPlaceDetails(input.placeId);
    logger.info("Resolved place", {
      placeId: details.placeId,
      city: details.city,
      state: details.state,
    });
    return details;
  }
}
