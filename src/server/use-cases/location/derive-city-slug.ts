import { slugify } from "~/lib/utils";

/**
 * Build the coarse-city slug used as the unique key on `Location` (matches the seed format, e.g.
 * "São Paulo" + "SP" → "sao-paulo-sp"). Used to upsert/find the city row a precise order belongs to.
 */
export function deriveCitySlug(city: string, state: string): string {
  return slugify(`${city}-${state}`);
}
