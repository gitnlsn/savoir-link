/**
 * Central pricing configuration for both sides of the marketplace.
 *
 * - Customers pay a one-off publication fee, priced by how long their order stays open
 *   (tiered duration packages — longer = more expensive).
 * - Providers buy credits in packages (one Pagar.me checkout per top-up), then spend a flat
 *   number of credits to unlock a customer's contact.
 *
 * All money values are in cents (BRL). Credit values are whole credits.
 */

export interface DurationTier {
  /** Stable identifier used by the order form + create-order input. */
  id: string;
  /** How many days the order stays ACTIVE / visible to providers. */
  days: number;
  /** Publication fee in cents. */
  priceCents: number;
  label: string;
}

export interface CreditPackage {
  id: string;
  credits: number;
  /** Price in cents. */
  priceCents: number;
  label: string;
}

/** Customer publication tiers (longer open window = higher fee). */
export const DURATION_TIERS: readonly DurationTier[] = [
  { id: "7d", days: 7, priceCents: 1990, label: "7 dias" },
  { id: "15d", days: 15, priceCents: 2990, label: "15 dias" },
  { id: "30d", days: 30, priceCents: 4990, label: "30 dias" },
] as const;

/** Flat cost, in credits, for a provider to unlock one order's contact. */
export const UNLOCK_COST_CREDITS = 1;

/** Provider credit top-up packages. */
export const CREDIT_PACKAGES: readonly CreditPackage[] = [
  { id: "credits-5", credits: 5, priceCents: 4990, label: "5 créditos" },
  { id: "credits-15", credits: 15, priceCents: 12990, label: "15 créditos" },
  { id: "credits-40", credits: 40, priceCents: 29990, label: "40 créditos" },
] as const;

export function getDurationTier(id: string): DurationTier | undefined {
  return DURATION_TIERS.find((t) => t.id === id);
}

export function getCreditPackage(id: string): CreditPackage | undefined {
  return CREDIT_PACKAGES.find((p) => p.id === id);
}
