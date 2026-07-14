import type { Logger } from "~/lib/logger";
import type { GoogleMapsClient } from "~/server/integrations/google-maps/google-maps.client";
import type { PlaceDetails } from "~/server/integrations/google-maps/types";

export interface GeocodeInput {
  address: string;
}

export interface GeocodeDeps {
  logger: Logger;
  maps: GoogleMapsClient;
}

/**
 * Free-text geocode (restricted to Brazil) for the autocomplete's manual fallback: resolve a typed
 * address that wasn't surfaced as a place prediction. Returns null when nothing matches.
 */
export class GeocodeUseCase {
  constructor(private deps: GeocodeDeps) {}

  async execute(input: GeocodeInput): Promise<PlaceDetails | null> {
    const { maps, logger } = this.deps;
    try {
      return await maps.geocode(input.address);
    } catch (err) {
      logger.error("Geocode failed", { err });
      return null;
    }
  }
}
