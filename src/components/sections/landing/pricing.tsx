import { Check } from "lucide-react";
import Link from "next/link";

import { Button } from "~/components/ui/button";
import { formatCents } from "~/lib/currency";
import {
  CREDIT_PACKAGES,
  DURATION_TIERS,
  UNLOCK_COST_CREDITS,
} from "~/server/config/pricing";

// Highlighted tiers (middle option) — purely presentational.
const POPULAR_DURATION_ID = "15d";
const POPULAR_CREDIT_ID = "credits-15";

/** "Preços" — transparent pricing for both sides, sourced from pricing config. */
export function Pricing() {
  return (
    <section id="precos" className="scroll-mt-24 py-16 md:py-24">
      <div className="mx-auto w-full max-w-container px-4 md:px-8">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-headline-lg font-extrabold text-on-surface">
            Preços
          </h2>
          <p className="mt-3 text-body-lg text-on-surface-variant">
            Transparente para os dois lados. Sem comissão sobre o serviço, sem
            surpresas.
          </p>
        </div>

        {/* Clients */}
        <div className="mb-14">
          <div className="mb-6 flex flex-col gap-1">
            <h3 className="text-headline-md text-on-surface">
              Para clientes — publicação por período
            </h3>
            <p className="text-body-md text-on-surface-variant">
              Pague uma vez. Quanto mais tempo ativo, mais profissionais
              encontram seu pedido.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {DURATION_TIERS.map((tier) => (
              <PriceCard
                key={tier.id}
                title={tier.label}
                price={formatCents(tier.priceCents)}
                subtitle={`Pedido ativo por ${tier.days} dias`}
                accent="primary"
                popular={tier.id === POPULAR_DURATION_ID}
                cta={
                  <Link href="/publicar" className="block">
                    <Button className="w-full rounded-full">
                      Publicar pedido
                    </Button>
                  </Link>
                }
              />
            ))}
          </div>
        </div>

        {/* Providers */}
        <div>
          <div className="mb-6 flex flex-col gap-1">
            <h3 className="text-headline-md text-on-surface">
              Para profissionais — créditos pré-pagos
            </h3>
            <p className="text-body-md text-on-surface-variant">
              {UNLOCK_COST_CREDITS} crédito desbloqueia 1 contato. Sem
              mensalidade.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {CREDIT_PACKAGES.map((pkg) => (
              <PriceCard
                key={pkg.id}
                title={`${pkg.credits} créditos`}
                price={formatCents(pkg.priceCents)}
                accent="secondary"
                popular={pkg.id === POPULAR_CREDIT_ID}
                features={[
                  `${pkg.credits} desbloqueios de contato`,
                  "Sem mensalidade",
                ]}
                cta={
                  <Link href="/app/leads" className="block">
                    <Button variant="success" className="w-full rounded-full">
                      Comprar créditos
                    </Button>
                  </Link>
                }
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PriceCard({
  title,
  price,
  subtitle,
  features,
  accent,
  popular = false,
  cta,
}: {
  title: string;
  price: string;
  subtitle?: string;
  features?: string[];
  accent: "primary" | "secondary";
  popular?: boolean;
  cta: React.ReactNode;
}) {
  const priceColor = accent === "primary" ? "text-primary" : "text-secondary";
  const ringColor =
    accent === "primary"
      ? "border-primary ring-1 ring-primary"
      : "border-secondary ring-1 ring-secondary";

  return (
    <div
      className={`relative flex flex-col rounded-2xl border bg-surface-container-lowest p-6 shadow-[var(--shadow-elev-1)] transition-shadow hover:shadow-[var(--shadow-elev-2)] ${
        popular ? ringColor : "border-outline-variant/30"
      }`}
    >
      {popular && (
        <span
          className={`absolute -top-3 left-6 rounded-full px-3 py-1 text-label-md font-semibold text-on-primary ${
            accent === "primary" ? "bg-primary" : "bg-secondary"
          }`}
        >
          Mais popular
        </span>
      )}

      <p className="text-headline-sm text-on-surface">{title}</p>
      <p className={`mt-2 text-display font-extrabold leading-none ${priceColor}`}>
        {price}
      </p>

      {subtitle && (
        <p className="mt-2 text-body-sm text-on-surface-variant">{subtitle}</p>
      )}

      {features && (
        <ul className="mt-4 space-y-2 text-body-sm text-on-surface-variant">
          {features.map((f) => (
            <li key={f} className="flex items-center gap-2">
              <Check className="h-4 w-4 shrink-0 text-secondary" />
              {f}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-6 pt-2">{cta}</div>
    </div>
  );
}
