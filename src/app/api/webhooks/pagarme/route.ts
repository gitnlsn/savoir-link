import * as crypto from "node:crypto";
import { type NextRequest, NextResponse } from "next/server";

import { env } from "~/env";
import { logger } from "~/lib/logger";
import { db } from "~/server/db";
import { getPagarmeClient } from "~/server/integrations/pagarme/pagarme.client";
import type { PagarmeWebhookPayload } from "~/server/integrations/pagarme/types";
import { HandlePagarmeWebhookUseCase } from "~/server/use-cases/payment/handle-pagarme-webhook.use-case";

// Webhooks must run in the Node runtime (Prisma + crypto), never on the edge.
export const runtime = "nodejs";

/**
 * Pagar.me webhook endpoint.
 *
 * Security is layered: (1) optional HTTP Basic auth (verified with a timing-safe comparison when
 * WEBHOOK_AUTH_* are configured), and (2) the authoritative guard — before granting anything the
 * handler re-fetches the order from Pagar.me and confirms it is actually paid (see
 * HandlePagarmeWebhookUseCase). A forged/replayed event therefore cannot produce value.
 */
export async function POST(request: NextRequest) {
  // 1. Basic auth (defense-in-depth; when configured).
  if (env.WEBHOOK_AUTH_USERNAME && env.WEBHOOK_AUTH_PASSWORD) {
    if (!isAuthorized(request)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
  } else if (env.NODE_ENV === "production") {
    // Fail loud: in production the webhook must be authenticated.
    logger.error("Webhook auth not configured in production (WEBHOOK_AUTH_*)");
    return NextResponse.json({ error: "Webhook auth not configured" }, { status: 503 });
  }

  // 2. Parse payload.
  let payload: PagarmeWebhookPayload;
  try {
    payload = (await request.json()) as PagarmeWebhookPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  // Malformed payloads are non-retryable → 400 (so Pagar.me doesn't loop).
  if (!payload?.id || !payload?.type || !payload?.data) {
    return NextResponse.json({ error: "Malformed payload" }, { status: 400 });
  }

  // 3. Process (idempotent). Ack 2xx on success; 500 on retryable errors so Pagar.me redelivers.
  try {
    const result = await new HandlePagarmeWebhookUseCase({
      db,
      logger,
      pagarme: getPagarmeClient(),
    }).execute(payload);
    return NextResponse.json({ received: true, ...result });
  } catch (error) {
    logger.error("Webhook processing error", {
      type: payload.type,
      error: error instanceof Error ? error.message : String(error),
    });
    // 500 → Pagar.me will retry; the idempotency guard makes retries safe.
    return NextResponse.json({ error: "Processing failed" }, { status: 500 });
  }
}

function isAuthorized(request: NextRequest): boolean {
  const header = request.headers.get("authorization");
  if (!header?.startsWith("Basic ")) return false;

  const decoded = Buffer.from(header.slice(6), "base64").toString();
  const idx = decoded.indexOf(":");
  const username = idx >= 0 ? decoded.slice(0, idx) : "";
  const password = idx >= 0 ? decoded.slice(idx + 1) : "";

  return (
    timingSafeEqual(username, env.WEBHOOK_AUTH_USERNAME ?? "") &&
    timingSafeEqual(password, env.WEBHOOK_AUTH_PASSWORD ?? "")
  );
}

function timingSafeEqual(a: string, b: string): boolean {
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  if (bufA.length !== bufB.length) return false;
  return crypto.timingSafeEqual(bufA, bufB);
}
