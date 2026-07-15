import { sendGAEvent } from "@next/third-parties/google";

/**
 * Centralized GA4 event helpers. Import only from client components
 * ("use client") — `sendGAEvent` pushes to the browser dataLayer and is a
 * no-op when `NEXT_PUBLIC_GA_MEASUREMENT_ID` is unset (the tag never loads).
 *
 * Event names are snake_case pt-BR to match the funnel vocabulary the team
 * uses in GA4 reports. Values are passed as GA4 params.
 */
type EventParams = Record<string, string | number | boolean | undefined>;

function track(name: string, params: EventParams = {}) {
  sendGAEvent("event", name, params);
}

/** Client published a service request (main conversion → Pagar.me checkout). */
export function trackPublishOrder(params: {
  numCategories: number;
  budgetCents: number;
  durationTierId: string;
  locationMode: "places" | "select";
}) {
  track("publicar_pedido", {
    num_categories: params.numCategories,
    value: params.budgetCents / 100,
    currency: "BRL",
    duration_tier: params.durationTierId,
    location_mode: params.locationMode,
  });
}

/** Professional spent a credit to reveal a client's contact (monetization). */
export function trackUnlockContact(params: { category?: string }) {
  track("desbloquear_contato", {
    value: 1,
    category: params.category,
  });
}

/** Professional started a credit purchase (begin checkout for credits). */
export function trackBuyCredits(params: {
  packageId: string;
  credits: number;
  priceCents: number;
}) {
  track("comprar_creditos", {
    package_id: params.packageId,
    credits: params.credits,
    value: params.priceCents / 100,
    currency: "BRL",
  });
}

/** Professional clicked a revealed contact channel after unlocking. */
export function trackContactClick(channel: "whatsapp" | "phone" | "email") {
  track("contato_click", { channel });
}
