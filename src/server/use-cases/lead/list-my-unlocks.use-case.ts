import { toNumber } from "~/lib/decimal";
import type { PrismaClient } from "~/server/db-types";

export interface UnlockedLead {
  orderPublicId: string;
  title: string;
  categories: { name: string }[];
  location: { city: string; state: string };
  budget: number;
  unlockedAt: Date;
  contact: {
    name: string;
    phone: string;
    whatsapp: string | null;
    email: string;
  };
}

/**
 * Lists the contacts a provider has already unlocked (revealed contact included). These remain
 * visible even after the underlying order expires or closes.
 */
export class ListMyUnlocksUseCase {
  constructor(private deps: { db: PrismaClient }) {}

  async execute(providerId: string): Promise<UnlockedLead[]> {
    const unlocks = await this.deps.db.contactUnlock.findMany({
      where: { providerId },
      orderBy: { createdAt: "desc" },
      include: {
        order: { include: { categories: true, location: true } },
      },
    });

    return unlocks.map((u) => ({
      orderPublicId: u.order.publicId,
      title: u.order.title,
      categories: u.order.categories.map((c) => ({ name: c.name })),
      location: { city: u.order.location.city, state: u.order.location.state },
      budget: toNumber(u.order.budget),
      unlockedAt: u.createdAt,
      contact: {
        name: u.order.contactName,
        phone: u.order.contactPhone,
        whatsapp: u.order.contactWhatsapp,
        email: u.order.contactEmail,
      },
    }));
  }
}
