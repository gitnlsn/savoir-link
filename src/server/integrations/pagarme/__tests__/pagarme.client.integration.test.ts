import { beforeAll, describe, expect, it } from "vitest";

import { env } from "~/env";
import { PagarmeClient } from "~/server/integrations/pagarme/pagarme.client";

/**
 * Integration tests for the Pagar.me hosted-checkout client, run against the real Pagar.me
 * SANDBOX API (https://sdx-api.pagar.me). They require a real `sk_test_*` key in `.env.test`;
 * without one the whole suite self-skips so CI/local runs stay green.
 *
 * These validate the actual request/response contract: a real order is created and a real
 * checkout URL comes back, and the same order can be fetched by id.
 */
const apiKey = env.PAGARME_API_KEY ?? "";
const HAS_SANDBOX_KEY =
  apiKey.startsWith("sk_test_") && apiKey !== "sk_test_placeholder";

if (!HAS_SANDBOX_KEY) {
  // eslint-disable-next-line no-console
  console.warn(
    "[pagarme integration] Skipping — set a real sk_test_* PAGARME_API_KEY in .env.test to run.",
  );
}

// ── unique test-data generators ──────────────────────────────────────────────
const uniqueEmail = () =>
  `test-${Date.now()}-${Math.random().toString(36).slice(2, 8)}@savoirlink.test`;

/** Generate a syntactically valid CPF (11 digits, correct check digits). */
function generateCPF(): string {
  const n: number[] = Array.from({ length: 9 }, () =>
    Math.floor(Math.random() * 10),
  );
  const digit = (base: number[], startWeight: number) => {
    const sum = base.reduce(
      (acc, d, i) => acc + d * (startWeight - i),
      0,
    );
    const mod = sum % 11;
    return mod < 2 ? 0 : 11 - mod;
  };
  n.push(digit(n, 10));
  n.push(digit(n, 11));
  return n.join("");
}

const uniquePhone = () => {
  const ddd = Math.floor(Math.random() * 89) + 11; // 11–99
  const number = Math.floor(Math.random() * 900000000) + 100000000;
  return `+55${ddd}${number}`;
};

describe.runIf(HAS_SANDBOX_KEY)("PagarmeClient — sandbox integration", () => {
  let client: PagarmeClient;

  beforeAll(() => {
    client = new PagarmeClient(apiKey);
  });

  describe("configuration", () => {
    it("uses a sandbox test key", () => {
      expect(apiKey).toMatch(/^sk_test_/);
    });
  });

  describe("createCheckoutOrder", () => {
    it("creates a PIX checkout and returns a payment URL", async () => {
      const result = await client.createCheckoutOrder({
        code: `order-pub-${Date.now()}`,
        amountCents: 2990,
        description: "Integração — publicação de pedido (PIX)",
        customer: {
          name: "Cliente Teste PIX",
          email: uniqueEmail(),
          document: generateCPF(),
          phone: uniquePhone(),
        },
        acceptedPaymentMethods: ["pix"],
      });

      expect(result.pagarmeOrderId).toBeTruthy();
      expect(result.pagarmeOrderId).toMatch(/^or_/);
      expect(result.checkoutUrl).toMatch(/^https:\/\//);
      expect(result.status).toBeTruthy();
    });

    it("creates a credit-card checkout", async () => {
      const result = await client.createCheckoutOrder({
        code: `order-card-${Date.now()}`,
        amountCents: 4990,
        description: "Integração — compra de créditos (cartão)",
        customer: {
          name: "Profissional Teste Cartão",
          email: uniqueEmail(),
          document: generateCPF(),
        },
        acceptedPaymentMethods: ["credit_card"],
      });

      expect(result.pagarmeOrderId).toMatch(/^or_/);
      expect(result.checkoutUrl).toMatch(/^https:\/\//);
    });

    it("creates a multi-method checkout with metadata + success URL", async () => {
      const result = await client.createCheckoutOrder({
        code: `order-multi-${Date.now()}`,
        amountCents: 12990,
        description: "Integração — múltiplos métodos",
        customer: {
          name: "Cliente Teste Multi",
          email: uniqueEmail(),
          document: generateCPF(),
          phone: uniquePhone(),
        },
        acceptedPaymentMethods: ["credit_card", "pix"],
        successUrl: "https://savoirlink.com/publicar/sucesso",
        metadata: { paymentId: "pay_test_123", orderId: "ord_test_123" },
      });

      expect(result.pagarmeOrderId).toMatch(/^or_/);
      expect(result.checkoutUrl).toMatch(/^https:\/\//);
    });

    it("rejects an invalid (zero) amount", async () => {
      await expect(
        client.createCheckoutOrder({
          code: `order-bad-${Date.now()}`,
          amountCents: 0,
          description: "Integração — valor inválido",
          customer: { name: "X", email: uniqueEmail() },
        }),
      ).rejects.toThrow(/Pagar\.me API error/);
    });
  });

  describe("getOrder", () => {
    it("fetches a previously created order by id", async () => {
      const created = await client.createCheckoutOrder({
        code: `order-get-${Date.now()}`,
        amountCents: 1990,
        description: "Integração — buscar pedido",
        customer: {
          name: "Cliente Teste Get",
          email: uniqueEmail(),
          document: generateCPF(),
        },
        acceptedPaymentMethods: ["pix"],
      });

      const fetched = await client.getOrder(created.pagarmeOrderId);
      expect(fetched.id).toBe(created.pagarmeOrderId);
      expect(fetched.status).toBeTruthy();
    });
  });
});
