import type { Logger } from "~/lib/logger";
import { OrderStatus, type PrismaClient } from "~/server/db-types";

export interface ExpireOrdersDeps {
  db: PrismaClient;
  logger: Logger;
}

/**
 * Flips ACTIVE orders whose expiresAt has passed to EXPIRED so they drop out of browse. Already
 * revealed contacts remain visible to the providers who unlocked them (ContactUnlock is untouched).
 */
export class ExpireOrdersUseCase {
  constructor(private deps: ExpireOrdersDeps) {}

  async execute(now = new Date()): Promise<{ expired: number }> {
    const result = await this.deps.db.order.updateMany({
      where: { status: OrderStatus.ACTIVE, expiresAt: { lte: now } },
      data: { status: OrderStatus.EXPIRED },
    });
    if (result.count > 0) {
      this.deps.logger.info("Expired orders", { count: result.count });
    }
    return { expired: result.count };
  }
}
