import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  /**
   * Specify your server-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars.
   */
  server: {
    AUTH_SECRET:
      process.env.NODE_ENV === "production"
        ? z.string()
        : z.string().optional(),
    // Google is the only OAuth provider (providers log in with Google).
    AUTH_GOOGLE_ID: z.string(),
    AUTH_GOOGLE_SECRET: z.string(),
    NEXTAUTH_URL: z.string().url().optional(),

    DATABASE_URL: z.string().url(),
    NODE_ENV: z
      .enum(["development", "test", "production"])
      .default("development"),

    // Public app URL (used for building checkout return URLs, emails, sitemaps).
    APP_URL: z.string().url().default("http://localhost:3000"),

    // Pagar.me (single integration; collects from both customers and providers).
    PAGARME_API_KEY: z.string().startsWith("sk_"),
    PAGARME_WEBHOOK_URL: z.string().url().optional(),
    // Webhook authentication (Basic auth layer on top of HMAC signature).
    WEBHOOK_AUTH_USERNAME: z.string().min(1).optional(),
    WEBHOOK_AUTH_PASSWORD: z.string().min(1).optional(),

    // Email (Resend) — order confirmations, manage links.
    RESEND_API_KEY: z.string().startsWith("re_").optional(),
    RESEND_FROM_EMAIL: z.string().email().optional(),
    RESEND_FROM_NAME: z.string().optional().default("Savoir Link"),
    SUPPORT_EMAIL: z.string().email().default("suporte@savoirlink.com"),

    // Currency configuration.
    CURRENCY: z.string().length(3).default("BRL"),
    CURRENCY_LOCALE: z.string().default("pt-BR"),

    // Geographic services (server-side only).
    GOOGLE_MAPS_API_KEY: z.string().optional(),

    // Cron / revalidation secrets.
    CRON_SECRET: z.string().min(1).optional(),
    REVALIDATION_API_KEY: z.string().min(1).optional(),

    LOG_LEVEL: z.enum(["debug", "info", "warn", "error"]).optional(),
  },

  /**
   * Specify your client-side environment variables schema here. To expose them to the client,
   * prefix them with `NEXT_PUBLIC_`.
   */
  client: {
    NEXT_PUBLIC_ENABLE_GOOGLE_PLACES: z
      .string()
      .transform((val) => val === "true")
      .default("false"),
    NEXT_PUBLIC_GTM_ID: z.string().optional(),
    NEXT_PUBLIC_CURRENCY: z.string().length(3).default("BRL"),
    NEXT_PUBLIC_CURRENCY_LOCALE: z.string().default("pt-BR"),
  },

  /**
   * You can't destruct `process.env` as a regular object in the Next.js edge runtimes (e.g.
   * middlewares) or client-side so we need to destruct manually.
   */
  runtimeEnv: {
    AUTH_SECRET: process.env.AUTH_SECRET,
    AUTH_GOOGLE_ID: process.env.AUTH_GOOGLE_ID,
    AUTH_GOOGLE_SECRET: process.env.AUTH_GOOGLE_SECRET,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    DATABASE_URL: process.env.DATABASE_URL,
    NODE_ENV: process.env.NODE_ENV,
    APP_URL: process.env.APP_URL,

    PAGARME_API_KEY: process.env.PAGARME_API_KEY,
    PAGARME_WEBHOOK_URL: process.env.PAGARME_WEBHOOK_URL,
    WEBHOOK_AUTH_USERNAME: process.env.WEBHOOK_AUTH_USERNAME,
    WEBHOOK_AUTH_PASSWORD: process.env.WEBHOOK_AUTH_PASSWORD,

    RESEND_API_KEY: process.env.RESEND_API_KEY,
    RESEND_FROM_EMAIL: process.env.RESEND_FROM_EMAIL,
    RESEND_FROM_NAME: process.env.RESEND_FROM_NAME,
    SUPPORT_EMAIL: process.env.SUPPORT_EMAIL,

    CURRENCY: process.env.CURRENCY,
    CURRENCY_LOCALE: process.env.CURRENCY_LOCALE,

    GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY,

    CRON_SECRET: process.env.CRON_SECRET,
    REVALIDATION_API_KEY: process.env.REVALIDATION_API_KEY,
    LOG_LEVEL: process.env.LOG_LEVEL,

    NEXT_PUBLIC_ENABLE_GOOGLE_PLACES:
      process.env.NEXT_PUBLIC_ENABLE_GOOGLE_PLACES,
    NEXT_PUBLIC_GTM_ID: process.env.NEXT_PUBLIC_GTM_ID,
    NEXT_PUBLIC_CURRENCY: process.env.CURRENCY,
    NEXT_PUBLIC_CURRENCY_LOCALE: process.env.CURRENCY_LOCALE,
  },
  /**
   * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially
   * useful for Docker builds.
   */
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  /**
   * Makes it so that empty strings are treated as undefined. `SOME_VAR: z.string()` and
   * `SOME_VAR=''` will throw an error.
   */
  emptyStringAsUndefined: true,
});
