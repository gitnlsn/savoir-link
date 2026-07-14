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
  const startedAt = Date.now();
  logger.info("[webhook] received", {
    hasAuthHeader: !!request.headers.get("authorization"),
    contentLength: request.headers.get("content-length") ?? undefined,
  });

  // 1. Optional HTTP Basic auth (defense-in-depth only).
  //
  // Pagar.me only sends an Authorization header when the webhook URL was registered with embedded
  // credentials (https://user:pass@host/...), and support for that is inconsistent. So we verify
  // credentials WHEN the caller sends them (catches a misconfigured proxy), but we must NOT reject
  // a credential-less delivery — otherwise every real webhook 401s and payments hang in PENDING.
  //
  // The authoritative security guard is in HandlePagarmeWebhookUseCase: it re-fetches the order
  // from Pagar.me and only grants value if that order is actually `paid`, so a forged/replayed
  // event can never produce credits or activate an order regardless of this header.
  if (env.WEBHOOK_AUTH_USERNAME && env.WEBHOOK_AUTH_PASSWORD) {
    const authHeader = request.headers.get("authorization");
    if (authHeader && !isAuthorized(request)) {
      logger.warn("[webhook] 401 — Basic auth header present but invalid");
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    logger.info("[webhook] auth ok", { basicAuthPresent: !!authHeader });
  }

  // 2. Parse payload.
  let payload: PagarmeWebhookPayload;
  try {
    payload = (await request.json()) as PagarmeWebhookPayload;
  } catch {
    logger.warn("[webhook] 400 — invalid JSON body");
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  // Malformed payloads are non-retryable → 400 (so Pagar.me doesn't loop).
  if (!payload?.id || !payload?.type || !payload?.data) {
    logger.warn("[webhook] 400 — malformed payload", {
      hasId: !!payload?.id,
      hasType: !!payload?.type,
      hasData: !!payload?.data,
    });
    return NextResponse.json({ error: "Malformed payload" }, { status: 400 });
  }

  logger.info("[webhook] parsed", {
    eventId: payload.id,
    type: payload.type,
    dataId: payload.data.id,
  });

  // 3. Process (idempotent). Ack 2xx on success; 500 on retryable errors so Pagar.me redelivers.
  try {
    const result = await new HandlePagarmeWebhookUseCase({
      db,
      logger,
      pagarme: getPagarmeClient(),
    }).execute(payload);
    logger.info("[webhook] 200 — done", {
      eventId: payload.id,
      type: payload.type,
      status: result.status,
      ms: Date.now() - startedAt,
    });
    return NextResponse.json({ received: true, ...result });
  } catch (error) {
    logger.error("[webhook] 500 — processing error (Pagar.me will retry)", {
      eventId: payload.id,
      type: payload.type,
      error: error instanceof Error ? error.message : String(error),
      ms: Date.now() - startedAt,
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
