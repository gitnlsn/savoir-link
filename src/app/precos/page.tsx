import { Check } from "lucide-react";
import Link from "next/link";

import { PublicLayout } from "~/components/layout/public-layout";
import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import { formatCents } from "~/lib/currency";
import { CREDIT_PACKAGES, DURATION_TIERS, UNLOCK_COST_CREDITS } from "~/server/config/pricing";

export const metadata = {
  title: "Preços",
  description:
    "Clientes pagam para publicar pedidos; profissionais compram créditos para desbloquear contatos. Veja os valores.",
  alternates: { canonical: "/precos" },
};

export default function PricingPage() {
  return (
    <PublicLayout>
      <div className="mx-auto w-full max-w-container px-4 py-12 md:px-8">
        <h1 className="text-headline-lg font-extrabold text-on-surface">Preços</h1>
        <p className="mt-2 text-body-lg text-on-surface-variant">
          Transparente para os dois lados do marketplace.
        </p>

        {/* Customers */}
        <section className="mt-10">
          <h2 className="text-headline-md text-on-surface">Para clientes</h2>
          <p className="mt-1 text-body-md text-on-surface-variant">
            Pague uma vez para publicar seu pedido. Quanto mais tempo ativo, mais
            profissionais o encontram.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {DURATION_TIERS.map((t) => (
              <Card key={t.id} className="text-center">
                <p className="text-headline-sm text-on-surface">{t.label}</p>
                <p className="mt-2 text-display font-extrabold leading-none text-primary">
                  {formatCents(t.priceCents)}
                </p>
                <p className="mt-2 text-body-sm text-on-surface-variant">
                  Pedido ativo por {t.days} dias
                </p>
              </Card>
            ))}
          </div>
          <div className="mt-6">
            <Link href="/publicar">
              <Button size="lg">Publicar um pedido</Button>
            </Link>
          </div>
        </section>

        {/* Providers */}
        <section className="mt-14">
          <h2 className="text-headline-md text-on-surface">Para profissionais</h2>
          <p className="mt-1 text-body-md text-on-surface-variant">
            Compre créditos e gaste {UNLOCK_COST_CREDITS} crédito para desbloquear
            o contato de cada pedido.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {CREDIT_PACKAGES.map((p) => (
              <Card key={p.id} className="flex flex-col text-center">
                <p className="text-headline-md font-extrabold text-on-surface">
                  {p.credits} créditos
                </p>
                <p className="mt-2 text-display font-extrabold leading-none text-primary">
                  {formatCents(p.priceCents)}
                </p>
                <ul className="mt-4 space-y-2 text-left text-body-sm text-on-surface-variant">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-secondary" />
                    {p.credits} desbloqueios de contato
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-secondary" />
                    Sem mensalidade
                  </li>
                </ul>
              </Card>
            ))}
          </div>
          <div className="mt-6">
            <Link href="/app/leads">
              <Button variant="secondary" size="lg">
                Ver leads disponíveis
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </PublicLayout>
  );
}
