import { toNumber } from "~/lib/decimal";
import type { PrismaClient } from "~/server/db-types";

export interface PublicOrderView {
  id: string;
  publicId: string;
  status: string;
  title: string;
  description: string;
  budget: number;
  categories: { name: string; slug: string }[];
  location: { city: string; state: string; slug: string };
  durationDays: number;
  publishedAt: Date | null;
  expiresAt: Date | null;
  unlockCount: number;
  createdAt: Date;
}

/**
 * Read model for a single order WITHOUT any contact details. This is the only shape that reaches
 * public pages and the provider browse; contact fields are revealed exclusively through an unlock.
 */
export class GetPublicOrderUseCase {
  constructor(private deps: { db: PrismaClient }) {}

  async byPublicId(publicId: string): Promise<PublicOrderView | null> {
    const order = await this.deps.db.order.findUnique({
      where: { publicId },
      include: { categories: true, location: true },
    });
    if (!order) return null;
    return toView(order);
  }
}

export function toView(order: {
  id: string;
  publicId: string;
  status: string;
  title: string;
  description: string;
  budget: unknown;
  categories: { name: string; slug: string }[];
  location: { city: string; state: string; slug: string };
  durationDays: number;
  publishedAt: Date | null;
  expiresAt: Date | null;
  unlockCount: number;
  createdAt: Date;
}): PublicOrderView {
  return {
    id: order.id,
    publicId: order.publicId,
    status: order.status,
    title: order.title,
    description: order.description,
    budget: toNumber(order.budget as never),
    categories: order.categories.map((c) => ({ name: c.name, slug: c.slug })),
    location: {
      city: order.location.city,
      state: order.location.state,
      slug: order.location.slug,
    },
    durationDays: order.durationDays,
    publishedAt: order.publishedAt,
    expiresAt: order.expiresAt,
    unlockCount: order.unlockCount,
    createdAt: order.createdAt,
  };
}
