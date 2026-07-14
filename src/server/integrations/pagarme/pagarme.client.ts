import { env } from "~/env";
import { logger } from "~/lib/logger";

import type {
  CreateCheckoutOrderInput,
  CreateCheckoutOrderResult,
  PagarmeOrderResponse,
} from "./types";

// Pagar.me Core v5 has a single API host; the key (sk_test_* vs sk_*) selects sandbox vs live.
const API_URL = "https://api.pagar.me/core/v5";

/**
 * Thin Pagar.me Core v5 client for hosted checkout.
 *
 * Savoir Link collects money from BOTH sides of the marketplace into the platform account, so
 * there are no recipients, splits, transfers or payouts here — just a single order with
 * `payment_method: "checkout"` that returns a redirect URL.
 */
export class PagarmeClient {
  private readonly apiUrl: string;
  private readonly headers: Record<string, string>;

  constructor(apiKey: string, baseUrl?: string) {
    // Explicit override wins (tests, self-hosted proxies); test vs live is driven by the key,
    // not the host — Core v5 has one host and the sk_test_ key runs it in sandbox mode.
    this.apiUrl = baseUrl ?? API_URL;

    const base64Auth = Buffer.from(`${apiKey}:`).toString("base64");
    this.headers = {
      Authorization: `Basic ${base64Auth}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    };
  }

  /** Create an order with a hosted checkout and return the payment URL. */
  async createCheckoutOrder(
    input: CreateCheckoutOrderInput,
  ): Promise<CreateCheckoutOrderResult> {
    const acceptedPaymentMethods = input.acceptedPaymentMethods ?? [
      "credit_card",
      "pix",
    ];
    const expiresInMinutes = input.expiresInMinutes ?? 1440;

    const phones = buildPhones(input.customer.phone);

    const orderPayload = {
      code: input.code,
      closed: true,
      customer: {
        name: input.customer.name,
        email: input.customer.email,
        type: "individual" as const,
        ...(input.customer.document
          ? { document: input.customer.document, document_type: "cpf" as const }
          : {}),
        ...(phones ? { phones } : {}),
      },
      items: [
        {
          amount: input.amountCents,
          description: input.description,
          quantity: 1,
          code: input.code,
        },
      ],
      payments: [
        {
          payment_method: "checkout" as const,
          amount: input.amountCents,
          checkout: {
            expires_in: expiresInMinutes,
            accepted_payment_methods: acceptedPaymentMethods,
            success_url: input.successUrl,
            skip_checkout_success_page: false,
            customer_editable: false,
            billing_address_editable: false,
            ...(acceptedPaymentMethods.includes("pix")
              ? { pix: { expires_in: expiresInMinutes * 60 } }
              : {}),
          },
        },
      ],
      metadata: input.metadata,
    };

    const response = await fetch(`${this.apiUrl}/orders`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify(orderPayload),
    });

    if (!response.ok) {
      const errorText = await response.text().catch(() => "");
      logger.error("Pagar.me create-order failed", {
        status: response.status,
        body: errorText.slice(0, 500),
      });
      throw new Error(
        `Pagar.me API error (${response.status}): ${errorText.slice(0, 200)}`,
      );
    }

    const data = (await response.json()) as PagarmeOrderResponse;
    const checkoutUrl = data.checkouts?.[0]?.payment_url;

    if (!data.id || !checkoutUrl) {
      logger.error("Pagar.me order missing id/checkout url", { data });
      throw new Error("Pagar.me did not return a checkout URL");
    }

    return { pagarmeOrderId: data.id, checkoutUrl, status: data.status };
  }

  /** Fetch an order (used to reconcile status if needed). */
  async getOrder(orderId: string): Promise<PagarmeOrderResponse> {
    const response = await fetch(`${this.apiUrl}/orders/${orderId}`, {
      headers: this.headers,
    });
    if (!response.ok) {
      throw new Error(`Pagar.me get-order failed (${response.status})`);
    }
    return (await response.json()) as PagarmeOrderResponse;
  }
}

/** Parse a Brazilian phone like "+5511999998888" into Pagar.me's phone object. */
function buildPhones(phone?: string) {
  if (!phone) return undefined;
  const match = phone.replace(/\D/g, "").match(/^55?(\d{2})(\d{8,9})$/);
  if (!match) return undefined;
  return {
    mobile_phone: {
      country_code: "55",
      area_code: match[1] ?? "",
      number: match[2] ?? "",
    },
  };
}

let cached: PagarmeClient | null = null;

/** Singleton accessor using the configured API key. */
export function getPagarmeClient(): PagarmeClient {
  cached ??= new PagarmeClient(env.PAGARME_API_KEY);
  return cached;
}
