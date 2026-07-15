import { ArrowRight, ShieldCheck, Star, Timer, Wallet } from "lucide-react";
import Link from "next/link";

import { Button } from "~/components/ui/button";

const TRUST_CHIPS = [
  { icon: Timer, label: "Leva menos de 2 minutos" },
  { icon: Wallet, label: "Publicação a partir de R$5" },
  { icon: ShieldCheck, label: "Sem mensalidade para profissionais" },
];

/** Landing hero — headline, CTAs, trust chips and the floating-card illustration. */
export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="blob-bg pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-primary" />
      <div className="blob-bg pointer-events-none absolute -left-16 bottom-24 h-[300px] w-[300px] rounded-full bg-secondary opacity-10" />

      <div className="relative z-10 mx-auto w-full max-w-container px-4 py-20 md:px-8 md:py-28">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          {/* Copy column */}
          <div className="flex flex-col gap-6">
            <h1 className="max-w-xl text-headline-lg font-extrabold text-on-surface md:text-display">
              Encontre o profissional certo para o seu serviço
            </h1>
            <p className="max-w-lg text-body-lg text-on-surface-variant">
              Publique seu pedido e receba contato de profissionais
              qualificados da sua região. Rápido, simples e seguro.
            </p>

            <div className="mt-2 flex flex-col gap-3 sm:flex-row">
              <Link href="/publicar">
                <Button size="lg" className="w-full rounded-full sm:w-auto">
                  Publicar um pedido
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="/app/leads">
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full rounded-full sm:w-auto"
                >
                  Sou profissional
                </Button>
              </Link>
            </div>

            {/* Trust chips */}
            <div className="mt-4 flex flex-wrap items-center gap-3">
              {TRUST_CHIPS.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 rounded-full border border-outline-variant/20 bg-surface-container-low px-4 py-2"
                >
                  <Icon className="h-4 w-4 text-primary" />
                  <span className="text-body-sm text-on-surface-variant">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Illustration column */}
          <HeroIllustration />
        </div>
      </div>
    </section>
  );
}

/** Asymmetric stack of floating cards visualising a request being matched to pros. */
function HeroIllustration() {
  return (
    <div className="relative hidden h-[500px] md:block">
      {/* Connecting dashed lines */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 500 500"
        aria-hidden="true"
      >
        <path
          className="text-primary/20"
          d="M250,250 C350,150 400,150 450,100"
          fill="none"
          stroke="currentColor"
          strokeDasharray="8 4"
          strokeWidth="2"
        />
        <path
          className="text-primary/20"
          d="M250,250 C150,350 100,350 50,400"
          fill="none"
          stroke="currentColor"
          strokeDasharray="8 4"
          strokeWidth="2"
        />
      </svg>

      {/* Central request card */}
      <div className="animate-float absolute left-1/2 top-1/2 z-30 w-72 -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-outline-variant/10 bg-surface-container-lowest p-6 shadow-[var(--shadow-elev-3)]">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
            <ClipboardIcon />
          </div>
          <div>
            <h3 className="text-label-lg font-bold text-on-surface">
              Reforma de Sala
            </h3>
            <p className="text-body-sm text-on-surface-variant">São Paulo, SP</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="h-2 w-full overflow-hidden rounded-full bg-surface-container">
            <div className="h-full w-2/3 rounded-full bg-primary" />
          </div>
          <p className="text-body-sm font-semibold text-primary">
            Aguardando contatos (3/5)
          </p>
        </div>
      </div>

      {/* Matching professional — top right */}
      <ProCard
        className="right-0 top-12 -rotate-3"
        initials="RS"
        name="Ricardo Silva"
        role="Mestre de Obras"
        rating="4.9"
        footer={
          <div className="flex items-center justify-between">
            <span className="rounded-full bg-secondary-container px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-on-secondary-fixed-variant">
              Disponível
            </span>
            <span className="text-[10px] text-on-surface-variant">
              A 5km de você
            </span>
          </div>
        }
      />

      {/* Matching professional — bottom left */}
      <ProCard
        className="bottom-12 left-4 rotate-3"
        initials="AM"
        name="Ana Mendes"
        role="Arquiteta de Interiores"
        rating="5.0"
        footer={
          <div className="flex gap-1">
            <span className="rounded-full border border-secondary/10 bg-secondary/5 px-2 py-1 text-[10px] text-secondary">
              Reforma
            </span>
            <span className="rounded-full border border-secondary/10 bg-secondary/5 px-2 py-1 text-[10px] text-secondary">
              Design
            </span>
          </div>
        }
      />
    </div>
  );
}

function ProCard({
  className,
  initials,
  name,
  role,
  rating,
  footer,
}: {
  className: string;
  initials: string;
  name: string;
  role: string;
  rating: string;
  footer: React.ReactNode;
}) {
  return (
    <div
      className={`absolute z-20 w-64 rounded-2xl border border-outline-variant/10 bg-surface-container-lowest p-4 shadow-[var(--shadow-elev-2)] transition-transform duration-500 hover:rotate-0 ${className}`}
    >
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-label-lg font-bold text-primary">
          {initials}
        </div>
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <h4 className="text-label-lg font-bold text-on-surface">{name}</h4>
            <span className="flex items-center gap-1 text-[12px] font-bold text-tertiary">
              <Star className="h-3.5 w-3.5 fill-current" /> {rating}
            </span>
          </div>
          <p className="text-[12px] text-on-surface-variant">{role}</p>
        </div>
      </div>
      <div className="mt-4 border-t border-outline-variant/20 pt-4">{footer}</div>
    </div>
  );
}

function ClipboardIcon() {
  return (
    <svg
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
      />
    </svg>
  );
}
