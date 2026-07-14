import * as crypto from "node:crypto";
import { type NextRequest, NextResponse } from "next/server";

import { env } from "~/env";
import { logger } from "~/lib/logger";
import { db } from "~/server/db";
import type { PagarmeWebhookPayload } from "~/server/integrations/pagarme/types";
import { HandlePagarmeWebhookUseCase } from "~/server/use-cases/payment/handle-pagarme-webhook.use-case";

// Webhooks must run in the Node runtime (Prisma + crypto), never on the edge.
export const runtime = "nodejs";

/**
 * Pagar.me webhook endpoint.
 *
 * Security: Pagar.me signs webhook deliveries with HTTP Basic auth (username/password configured
 * when registering the endpoint). We verify those credentials with a timing-safe comparison when
 * configured. Fulfillment is idempotent (see HandlePagarmeWebhookUseCase).
 */
export async function POST(request: NextRequest) {
  // 1. Basic auth (if configured).
  if (env.WEBHOOK_AUTH_USERNAME && env.WEBHOOK_AUTH_PASSWORD) {
    if (!isAuthorized(request)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
  }

  // 2. Parse payload.
  let payload: PagarmeWebhookPayload;
  try {
    payload = (await request.json()) as PagarmeWebhookPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (!payload?.id || !payload?.type) {
    return NextResponse.json({ error: "Malformed payload" }, { status: 400 });
  }

  // 3. Process (idempotent). Always ack 2xx so Pagar.me stops retrying processed events.
  try {
    const result = await new HandlePagarmeWebhookUseCase({ db, logger }).execute(
      payload,
    );
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
