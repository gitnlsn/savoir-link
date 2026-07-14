import { toNumber } from "~/lib/decimal";
import { OrderStatus, type PrismaClient } from "~/server/db-types";

export interface ListLeadsInput {
  /** When omitted (public browse), `alreadyUnlocked` is always false. */
  providerId?: string;
  categorySlug?: string;
  locationSlug?: string;
  search?: string;
  page?: number;
  pageSize?: number;
}

export interface LeadCard {
  publicId: string;
  title: string;
  description: string;
  budget: number;
  category: { name: string; slug: string };
  location: { city: string; state: string };
  createdAt: Date;
  expiresAt: Date | null;
  unlockCount: number;
  alreadyUnlocked: boolean;
}

/**
 * Provider-facing browse of ACTIVE, non-expired leads. Contact fields are never selected; each
 * card is annotated with whether the current provider already unlocked it.
 */
export class ListLeadsUseCase {
  constructor(private deps: { db: PrismaClient }) {}

  async execute(input: ListLeadsInput): Promise<{ leads: LeadCard[]; total: number }> {
    const { db } = this.deps;
    const page = Math.max(1, input.page ?? 1);
    const pageSize = Math.min(50, input.pageSize ?? 12);

    const where = {
      status: OrderStatus.ACTIVE,
      expiresAt: { gt: new Date() },
      ...(input.categorySlug ? { category: { slug: input.categorySlug } } : {}),
      ...(input.locationSlug ? { location: { slug: input.locationSlug } } : {}),
      ...(input.search
        ? {
            OR: [
              { title: { contains: input.search, mode: "insensitive" as const } },
              { description: { contains: input.search, mode: "insensitive" as const } },
            ],
          }
        : {}),
    };

    const [orders, total] = await Promise.all([
      db.order.findMany({
        where,
        orderBy: { publishedAt: "desc" },
        skip: (page - 1) * pageSize,
        take: pageSize,
        select: {
          publicId: true,
          title: true,
          description: true,
          budget: true,
          createdAt: true,
          expiresAt: true,
          unlockCount: true,
          category: { select: { name: true, slug: true } },
          location: { select: { city: true, state: true } },
          unlocks: input.providerId
            ? {
                where: { providerId: input.providerId },
                select: { id: true },
                take: 1,
              }
            : false,
        },
      }),
      db.order.count({ where }),
    ]);

    const leads: LeadCard[] = orders.map((o) => {
      const unlocks = (o as { unlocks?: { id: string }[] }).unlocks;
      return {
        publicId: o.publicId,
        title: o.title,
        description: o.description,
        budget: toNumber(o.budget),
        category: o.category,
        location: o.location,
        createdAt: o.createdAt,
        expiresAt: o.expiresAt,
        unlockCount: o.unlockCount,
        alreadyUnlocked: Array.isArray(unlocks) && unlocks.length > 0,
      };
    });

    return { leads, total };
  }
}
