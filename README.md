# Savoir Link

A **leads / reverse marketplace** for services (GetNinjas / Thumbtack model):

- **Customers** pay a one-off fee to **publish an order** (service request). The fee is priced by how
  long the order stays open (tiered duration packages). Posting is anonymous — a signed manage token
  is emailed so they can view/renew/close the order later.
- **Service providers** buy **credits** (prepaid wallet) and spend them to **unlock a customer's
  contact**. Non-exclusive: multiple providers can unlock the same order.
- A single **Pagar.me** integration collects money from **both** sides into the platform. No money
  is ever paid out to providers, so there are no recipients, splits, transfers, KYC or payouts.

## Stack

Next.js 15 (App Router) · React 19 · TypeScript · tRPC v11 · Prisma / PostgreSQL · NextAuth v5
(Google) · Tailwind v4 · Pagar.me (hosted checkout) · Resend (email).

Design system: "Modern Corporate" (Manrope, blue/emerald Material-3 tokens) defined in
`src/styles/globals.css`, derived from `docs/stitch-v1`.

## Architecture

- **Backend = use-cases** (`src/server/use-cases/<domain>/*.use-case.ts`). tRPC routers
  (`src/server/api/routers/*`) stay thin and call use-cases; use-cases take explicit deps
  `{ db, logger, <externalService> }` and use Prisma directly. No service-layer DI.
- **Pagar.me** client: `src/server/integrations/pagarme/` (hosted checkout only). Webhook:
  `src/app/api/webhooks/pagarme/route.ts` → `handle-pagarme-webhook.use-case.ts` (idempotent via
  `WebhookEvent.pagarmeEventId`, routes a paid payment to order-activation or wallet-credit).
- **Contact safety**: contact fields live on `Order` and are **never** selected by public/browse
  queries — only revealed through a `ContactUnlock` (see `get-public-order` / `list-leads`).
- **Pricing** is config, not env: `src/server/config/pricing.ts`.
- **Auth gate**: `src/middleware.ts` gates `/app/*` (cheap cookie check); real enforcement is
  `protectedProcedure` + server components calling `auth()`.

## Local development

Requires Node 20+ and a PostgreSQL database.

```bash
cp .env.example .env      # fill AUTH_GOOGLE_*, PAGARME_API_KEY (sk_test_*), etc.
npm install
npm run db:push           # sync schema
npm run db:seed           # seed categories + locations
npm run dev
```

Key env (see `src/env.js` for the full validated schema): `DATABASE_URL`, `AUTH_SECRET`,
`AUTH_GOOGLE_ID/SECRET`, `PAGARME_API_KEY`, `WEBHOOK_AUTH_USERNAME/PASSWORD`, `RESEND_API_KEY`,
`APP_URL`, `CRON_SECRET`.

## Payments (Pagar.me sandbox)

Use an `sk_test_*` key (routes to `https://sdx-api.pagar.me`). Register a webhook pointing at
`/api/webhooks/pagarme` with the Basic-auth username/password from `WEBHOOK_AUTH_*`. Paid events
(`order.paid` / `charge.paid`) activate orders or credit wallets.

## Cron

`GET /api/cron/expire-orders` (auth: `Authorization: Bearer $CRON_SECRET` or `?secret=`) flips
expired `ACTIVE` orders to `EXPIRED`. Scheduled hourly via `vercel.json`.

## Tests

**Pagar.me sandbox integration tests** (vitest) exercise the real hosted-checkout client against the
Pagar.me sandbox — creating real orders and fetching them back. They need a real `sk_test_*` key in
`.env.test` (copy `.env.test.example`); without one they self-skip.

```bash
npm test        # vitest run  (src/**/*.test.ts)
```

**Domain integration checks** against a real database (`scripts/verify-*.ts`) cover webhook
fulfillment + idempotency, order flow, wallet top-up, unlock (atomicity / no contact leak /
insufficient-credits / expiry gating), and order expiry:

```bash
npx tsx --env-file=.env scripts/verify-unlock.ts   # (also: webhook, order, wallet, expire)
```
