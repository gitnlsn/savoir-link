/** Minimal Pagar.me Core v5 types for the hosted-checkout flow used by Savoir Link. */

export type PagarmePaymentMethod = "credit_card" | "pix";

export interface PagarmeCustomerInput {
  name: string;
  email: string;
  /** CPF/CNPJ digits only (optional). */
  document?: string;
  /** E.164-ish phone, e.g. "+5511999998888" (optional). */
  phone?: string;
}

export interface CreateCheckoutOrderInput {
  /** Our reference code (e.g. the Payment id). */
  code: string;
  /** Total amount in cents. */
  amountCents: number;
  description: string;
  customer: PagarmeCustomerInput;
  /** Where Pagar.me redirects after a successful payment. */
  successUrl?: string;
  /** How long the checkout link stays valid, in minutes (default 1440 = 24h). */
  expiresInMinutes?: number;
  acceptedPaymentMethods?: PagarmePaymentMethod[];
  /** Arbitrary metadata echoed back on webhooks. */
  metadata?: Record<string, string>;
}

export interface CreateCheckoutOrderResult {
  pagarmeOrderId: string;
  checkoutUrl: string;
  status: string;
}

/** Raw order response (only the fields we consume). */
export interface PagarmeOrderResponse {
  id: string;
  status: string;
  checkouts?: Array<{
    id: string;
    payment_url: string;
    expired_at?: string;
  }>;
}

/** Webhook envelope. */
export interface PagarmeWebhookPayload {
  id: string;
  type: string; // e.g. "order.paid", "charge.paid", "order.payment_failed"
  data: {
    id: string; // order or charge id
    code?: string;
    status?: string;
    metadata?: Record<string, string>;
    order?: { id: string; code?: string; metadata?: Record<string, string> };
    [key: string]: unknown;
  };
}
