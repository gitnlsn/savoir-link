import { OrderStatus, type PrismaClient } from "~/server/db-types";

export interface TopCategory {
  slug: string;
  name: string;
  /** Number of currently ACTIVE, non-expired orders in this category. */
  orderCount: number;
}

/**
 * Ranks categories by live demand — how many ACTIVE, non-expired orders each has.
 * Categories with no open orders are omitted, so callers can fall back to a
 * curated list while the marketplace is still filling up.
 */
export class ListTopCategoriesUseCase {
  constructor(private deps: { db: PrismaClient }) {}

  async execute({ limit = 12 }: { limit?: number } = {}): Promise<TopCategory[]> {
    const now = new Date();

    const categories = await this.deps.db.category.findMany({
      select: {
        slug: true,
        name: true,
        _count: {
          select: {
            orders: {
              where: { status: OrderStatus.ACTIVE, expiresAt: { gt: now } },
            },
          },
        },
      },
    });

    return categories
      .map((c) => ({ slug: c.slug, name: c.name, orderCount: c._count.orders }))
      .filter((c) => c.orderCount > 0)
      .sort((a, b) => b.orderCount - a.orderCount)
      .slice(0, limit);
  }
}
