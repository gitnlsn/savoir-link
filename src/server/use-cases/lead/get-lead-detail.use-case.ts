import type { PrismaClient } from "~/server/db-types";
import { toView, type PublicOrderView } from "~/server/use-cases/order/get-public-order.use-case";
import type { RevealedContact } from "~/server/use-cases/lead/unlock-contact.use-case";

export interface LeadDetail {
  order: PublicOrderView;
  unlocked: boolean;
  contact: RevealedContact | null;
}

/**
 * Provider lead detail: the contact-stripped order view, plus the revealed contact only if THIS
 * provider has already unlocked it.
 */
export class GetLeadDetailUseCase {
  constructor(private deps: { db: PrismaClient }) {}

  async execute(
    providerId: string,
    orderPublicId: string,
  ): Promise<LeadDetail | null> {
    const order = await this.deps.db.order.findUnique({
      where: { publicId: orderPublicId },
      include: {
        category: true,
        location: true,
        unlocks: { where: { providerId }, take: 1 },
      },
    });
    if (!order) return null;

    const unlocked = order.unlocks.length > 0;
    return {
      order: toView(order),
      unlocked,
      contact: unlocked
        ? {
            name: order.contactName,
            phone: order.contactPhone,
            whatsapp: order.contactWhatsapp,
            email: order.contactEmail,
          }
        : null,
    };
  }
}
