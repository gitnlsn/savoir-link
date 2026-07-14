import { type NextRequest, NextResponse } from "next/server";

import { env } from "~/env";
import { logger } from "~/lib/logger";
import { db } from "~/server/db";
import { ExpireOrdersUseCase } from "~/server/use-cases/order/expire-orders.use-case";

export const runtime = "nodejs";
// Never cache — this mutates state on each run.
export const dynamic = "force-dynamic";

/**
 * Cron endpoint that expires stale orders. Protect with CRON_SECRET (sent by the scheduler as a
 * Bearer token or `?secret=`). Configure a Vercel Cron (or any scheduler) to hit this hourly.
 */
export async function GET(request: NextRequest) {
  if (env.CRON_SECRET) {
    const auth = request.headers.get("authorization");
    const secret = request.nextUrl.searchParams.get("secret");
    const ok = auth === `Bearer ${env.CRON_SECRET}` || secret === env.CRON_SECRET;
    if (!ok) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
  }

  const result = await new ExpireOrdersUseCase({ db, logger }).execute();
  return NextResponse.json({ ok: true, ...result });
}
