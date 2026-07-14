import { env } from "~/env";
import type { Logger } from "~/lib/logger";
import { PaymentType, type PrismaClient } from "~/server/db-types";
import { getCreditPackage } from "~/server/config/pricing";
import type { PagarmeClient } from "~/server/integrations/pagarme/pagarme.client";

export interface TopupCreditsDeps {
  db: PrismaClient;
  logger: Logger;
  pagarme: PagarmeClient;
}

export interface TopupCreditsInput {
  userId: string;
  packageId: string;
}

/**
 * Provider buys a credit package. Creates a CREDIT_TOPUP payment and opens a Pagar.me checkout;
 * the wallet is only credited once the payment webhook confirms (credit-wallet-on-payment).
 */
export class TopupCreditsUseCase {
  constructor(private deps: TopupCreditsDeps) {}

  async execute(input: TopupCreditsInput): Promise<{ checkoutUrl: string }> {
    const { db, logger, pagarme } = this.deps;

    const pkg = getCreditPackage(input.packageId);
    if (!pkg) throw new Error("Pacote de créditos inválido.");

    const user = await db.user.findUnique({ where: { id: input.userId } });
    if (!user?.email) throw new Error("Usuário sem e-mail cadastrado.");

    const payment = await db.payment.create({
      data: {
        type: PaymentType.CREDIT_TOPUP,
        amount: pkg.priceCents / 100,
        payerEmail: user.email,
        userId: user.id,
        creditQuantity: pkg.credits,
      },
    });

    const checkout = await pagarme.createCheckoutOrder({
      code: payment.id,
      amountCents: pkg.priceCents,
      description: `Compra de ${pkg.credits} créditos — Savoir Link`,
      customer: { name: user.name ?? "Profissional", email: user.email },
      successUrl: `${env.APP_URL}/app/wallet?topup=sucesso`,
      metadata: { paymentId: payment.id, userId: user.id },
    });

    await db.payment.update({
      where: { id: payment.id },
      data: {
        pagarmeOrderId: checkout.pagarmeOrderId,
        checkoutUrl: checkout.checkoutUrl,
      },
    });

    logger.info("Credit top-up checkout opened", {
      paymentId: payment.id,
      credits: pkg.credits,
    });
    return { checkoutUrl: checkout.checkoutUrl };
  }
}
