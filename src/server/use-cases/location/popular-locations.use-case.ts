import type { PrismaClient } from "~/server/db-types";

export interface PopularLocation {
  id: string;
  slug: string;
  city: string;
  state: string;
}

export interface PopularLocationsDeps {
  db: PrismaClient;
}

/**
 * Returns the seeded coarse cities (the 27 Brazilian capitals) for the graceful-fallback dropdown
 * used when Google Places is disabled. No external call.
 */
export class PopularLocationsUseCase {
  constructor(private deps: PopularLocationsDeps) {}

  async execute(): Promise<PopularLocation[]> {
    return this.deps.db.location.findMany({
      orderBy: [{ state: "asc" }, { city: "asc" }],
      select: { id: true, slug: true, city: true, state: true },
    });
  }
}
