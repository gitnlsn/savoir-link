import { z } from "zod";

import { env } from "~/env";
import { logger } from "~/lib/logger";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { getGoogleMapsClient } from "~/server/integrations/google-maps/google-maps.client";
import { GeocodeUseCase } from "~/server/use-cases/location/geocode.use-case";
import { PlacesAutocompleteUseCase } from "~/server/use-cases/location/places-autocomplete.use-case";
import { PopularLocationsUseCase } from "~/server/use-cases/location/popular-locations.use-case";
import { ResolvePlaceUseCase } from "~/server/use-cases/location/resolve-place.use-case";

/**
 * Precise-location endpoints backed by Google Places. All server-proxied (no client-side Google
 * widget/key). When the API key is absent, Google-backed procedures degrade to empty results so the
 * UI can fall back to the coarse city dropdown (`popular`).
 */
export const locationRouter = createTRPCRouter({
  autocomplete: publicProcedure
    .input(
      z.object({
        input: z.string().min(2),
        bias: z
          .object({
            lat: z.number(),
            lng: z.number(),
            radiusKm: z.number().positive(),
          })
          .optional(),
      }),
    )
    .query(async ({ input }) => {
      if (!env.GOOGLE_MAPS_API_KEY) return [];
      return new PlacesAutocompleteUseCase({
        logger,
        maps: getGoogleMapsClient(),
      }).execute(input);
    }),

  resolve: publicProcedure
    .input(z.object({ placeId: z.string().min(1) }))
    .query(async ({ input }) => {
      return new ResolvePlaceUseCase({
        logger,
        maps: getGoogleMapsClient(),
      }).execute(input);
    }),

  // Free-text fallback (Brazil-restricted): resolve a typed address not surfaced as a prediction.
  geocode: publicProcedure
    .input(z.object({ address: z.string().min(3) }))
    .query(async ({ input }) => {
      if (!env.GOOGLE_MAPS_API_KEY) return null;
      return new GeocodeUseCase({
        logger,
        maps: getGoogleMapsClient(),
      }).execute(input);
    }),

  popular: publicProcedure.query(async ({ ctx }) => {
    return new PopularLocationsUseCase({ db: ctx.db }).execute();
  }),
});
