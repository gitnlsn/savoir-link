import { nanoid } from "nanoid";

import { env } from "~/env";
import type { Logger } from "~/lib/logger";
import { slugify } from "~/lib/utils";
import { PaymentType, type PrismaClient } from "~/server/db-types";
import { getDurationTier } from "~/server/config/pricing";
import type { PagarmeClient } from "~/server/integrations/pagarme/pagarme.client";

export interface CreateOrderInput {
  title: string;
  description: string;
  budget: number;
  categoryIds: string[];
  locationId: string;
  contactName: string;
  contactPhone: string;
  contactWhatsapp?: string;
  contactEmail: string;
  durationTierId: string;
}

export interface CreateOrderDeps {
  db: PrismaClient;
  logger: Logger;
  pagarme: PagarmeClient;
}

export interface CreateOrderResult {
  orderPublicId: string;
  checkoutUrl: string;
  paymentId: string;
}

/**
 * Customer publishes an order. Prices the publication by the chosen duration tier, creates the
 * Order (PENDING_PAYMENT) and its Payment, opens a Pagar.me hosted checkout, and returns the
 * redirect URL. The order only becomes ACTIVE once the payment webhook arrives.
 */
export class CreateOrderUseCase {
  constructor(private deps: CreateOrderDeps) {}

  async execute(input: CreateOrderInput): Promise<CreateOrderResult> {
    const { db, logger, pagarme } = this.deps;

    const tier = getDurationTier(input.durationTierId);
    if (!tier) {
      throw new Error(`Invalid duration tier: ${input.durationTierId}`);
    }

    // Validate FK references exist (fail fast with a clear message).
    const [categoryCount, location] = await Promise.all([
      db.category.count({ where: { id: { in: input.categoryIds } } }),
      db.location.findUnique({ where: { id: input.locationId } }),
    ]);
    if (categoryCount !== input.categoryIds.length) {
      throw new Error("Categoria inválida.");
    }
    if (!location) throw new Error("Localização inválida.");

    const publicId = `${slugify(input.title)}-${nanoid(8)}`;
    const manageToken = nanoid(32);
    const amountReais = tier.priceCents / 100;

    // Create Order + Payment together so we have a Payment id to use as the Pagar.me `code`.
    const { order, payment } = await db.$transaction(async (tx) => {
      const order = await tx.order.create({
        data: {
          publicId,
          manageToken,
          title: input.title,
          description: input.description,
          budget: input.budget,
          categories: { connect: input.categoryIds.map((id) => ({ id })) },
          locationId: input.locationId,
          contactName: input.contactName,
          contactPhone: input.contactPhone,
          contactWhatsapp: input.contactWhatsapp,
          contactEmail: input.contactEmail,
          durationDays: tier.days,
        },
      });
      const payment = await tx.payment.create({
        data: {
          type: PaymentType.ORDER_PUBLICATION,
          amount: amountReais,
          payerEmail: input.contactEmail,
          orderId: order.id,
        },
      });
      return { order, payment };
    });

    // Open the hosted checkout.
    const checkout = await pagarme.createCheckoutOrder({
      code: payment.id,
      amountCents: tier.priceCents,
      description: `Publicação de pedido (${tier.label}) — ${input.title}`,
      customer: {
        name: input.contactName,
        email: input.contactEmail,
        phone: input.contactPhone,
      },
      successUrl: `${env.APP_URL}/publicar/sucesso?pedido=${order.publicId}`,
      metadata: { paymentId: payment.id, orderId: order.id },
    });

    await db.payment.update({
      where: { id: payment.id },
      data: {
        pagarmeOrderId: checkout.pagarmeOrderId,
        checkoutUrl: checkout.checkoutUrl,
      },
    });

    logger.info("Order created, checkout opened", {
      orderId: order.id,
      paymentId: payment.id,
    });

    return {
      orderPublicId: order.publicId,
      checkoutUrl: checkout.checkoutUrl,
      paymentId: payment.id,
    };
  }
}
