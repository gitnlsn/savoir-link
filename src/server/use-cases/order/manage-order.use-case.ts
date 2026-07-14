import { env } from "~/env";
import type { Logger } from "~/lib/logger";
import { toNumber } from "~/lib/decimal";
import { OrderStatus, PaymentType, type PrismaClient } from "~/server/db-types";
import { getDurationTier } from "~/server/config/pricing";
import type { PagarmeClient } from "~/server/integrations/pagarme/pagarme.client";

export interface ManageOrderDeps {
  db: PrismaClient;
  logger: Logger;
  pagarme: PagarmeClient;
}

/**
 * Anonymous order management via the emailed manage token: view status + unlock count, close the
 * order early, or renew it (opens a fresh publication checkout for another duration tier).
 */
export class ManageOrderUseCase {
  constructor(private deps: ManageOrderDeps) {}

  /** Full order view (owner-only, includes contact + unlock count). */
  async get(manageToken: string) {
    const order = await this.deps.db.order.findUnique({
      where: { manageToken },
      include: { category: true, location: true },
    });
    if (!order) return null;
    return {
      id: order.id,
      publicId: order.publicId,
      status: order.status,
      title: order.title,
      description: order.description,
      budget: toNumber(order.budget),
      category: { name: order.category.name, slug: order.category.slug },
      location: { city: order.location.city, state: order.location.state },
      contactName: order.contactName,
      contactPhone: order.contactPhone,
      contactWhatsapp: order.contactWhatsapp,
      contactEmail: order.contactEmail,
      durationDays: order.durationDays,
      publishedAt: order.publishedAt,
      expiresAt: order.expiresAt,
      unlockCount: order.unlockCount,
      createdAt: order.createdAt,
    };
  }

  /** Close an active/pending order so it no longer appears to providers. */
  async close(manageToken: string): Promise<{ ok: boolean }> {
    const order = await this.deps.db.order.findUnique({ where: { manageToken } });
    if (!order) throw new Error("Pedido não encontrado.");
    if (order.status === OrderStatus.CLOSED) return { ok: true };
    await this.deps.db.order.update({
      where: { id: order.id },
      data: { status: OrderStatus.CLOSED },
    });
    this.deps.logger.info("Order closed by customer", { orderId: order.id });
    return { ok: true };
  }

  /** Renew a (typically expired) order: opens a new publication checkout. */
  async renew(
    manageToken: string,
    durationTierId: string,
  ): Promise<{ checkoutUrl: string }> {
    const { db, pagarme } = this.deps;
    const tier = getDurationTier(durationTierId);
    if (!tier) throw new Error("Plano de duração inválido.");

    const order = await db.order.findUnique({ where: { manageToken } });
    if (!order) throw new Error("Pedido não encontrado.");

    const payment = await db.payment.create({
      data: {
        type: PaymentType.ORDER_PUBLICATION,
        amount: tier.priceCents / 100,
        payerEmail: order.contactEmail,
        orderId: order.id,
      },
    });

    // Reset the purchased duration so activation stamps the right window.
    await db.order.update({
      where: { id: order.id },
      data: { durationDays: tier.days, status: OrderStatus.PENDING_PAYMENT },
    });

    const checkout = await pagarme.createCheckoutOrder({
      code: payment.id,
      amountCents: tier.priceCents,
      description: `Renovação de pedido (${tier.label}) — ${order.title}`,
      customer: { name: order.contactName, email: order.contactEmail, phone: order.contactPhone },
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

    return { checkoutUrl: checkout.checkoutUrl };
  }
}
