import {
  CalendarClock,
  Contact,
  CreditCard,
  FileText,
  Search,
  Unlock,
} from "lucide-react";
import Link from "next/link";

import { Button } from "~/components/ui/button";
import { UNLOCK_COST_CREDITS } from "~/server/config/pricing";

const CUSTOMER_STEPS = [
  {
    icon: FileText,
    title: "Publique seu pedido",
    text: "Descreva o serviço de forma anônima em menos de 2 minutos.",
  },
  {
    icon: CalendarClock,
    title: "Escolha por quanto tempo fica no ar",
    text: "Pague uma vez e mantenha o pedido ativo por 7, 15 ou 30 dias.",
  },
  {
    icon: Contact,
    title: "Receba contatos",
    text: "Profissionais qualificados da sua região entram em contato com você.",
  },
];

const PROVIDER_STEPS = [
  {
    icon: CreditCard,
    title: "Compre créditos",
    text: "Pacotes pré-pagos, sem mensalidade e sem comissão sobre o serviço.",
  },
  {
    icon: Search,
    title: "Encontre leads na sua região",
    text: "Veja pedidos recentes de clientes reais prontos para contratar.",
  },
  {
    icon: Unlock,
    title: "Desbloqueie o contato",
    text: `Gaste ${UNLOCK_COST_CREDITS} crédito para revelar os dados e fechar negócio.`,
  },
];

/** "Como funciona" — two parallel step tracks for clients and providers. */
export function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="scroll-mt-24 bg-surface-container-low py-16 md:py-24"
    >
      <div className="mx-auto w-full max-w-container px-4 md:px-8">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-headline-lg font-extrabold text-on-surface">
            Como funciona
          </h2>
          <p className="mt-3 text-body-lg text-on-surface-variant">
            Simples para quem contrata e para quem trabalha — dos dois lados do
            marketplace.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Track
            eyebrow="Para clientes"
            accent="primary"
            steps={CUSTOMER_STEPS}
            cta={
              <Link href="/publicar">
                <Button className="rounded-full">Publicar um pedido</Button>
              </Link>
            }
          />
          <Track
            eyebrow="Para profissionais"
            accent="secondary"
            steps={PROVIDER_STEPS}
            cta={
              <Link href="/app/leads">
                <Button variant="success" className="rounded-full">
                  Ver leads disponíveis
                </Button>
              </Link>
            }
          />
        </div>
      </div>
    </section>
  );
}

function Track({
  eyebrow,
  accent,
  steps,
  cta,
}: {
  eyebrow: string;
  accent: "primary" | "secondary";
  steps: { icon: typeof FileText; title: string; text: string }[];
  cta: React.ReactNode;
}) {
  const isPrimary = accent === "primary";
  const badge = isPrimary
    ? "bg-primary/10 text-primary"
    : "bg-secondary/10 text-secondary";
  const numberBadge = isPrimary
    ? "bg-primary text-on-primary"
    : "bg-secondary text-on-secondary";

  return (
    <div className="flex flex-col rounded-2xl border border-outline-variant/20 bg-surface-container-lowest p-6 shadow-[var(--shadow-elev-1)] md:p-8">
      <span
        className={`w-fit rounded-full px-3 py-1 text-label-md font-semibold ${badge}`}
      >
        {eyebrow}
      </span>

      <ol className="mt-6 flex flex-1 flex-col gap-6">
        {steps.map(({ icon: Icon, title, text }, i) => (
          <li key={title} className="flex gap-4">
            <div className="flex flex-col items-center">
              <span
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-label-lg font-bold ${numberBadge}`}
              >
                {i + 1}
              </span>
              {i < steps.length - 1 && (
                <span className="mt-1 h-full w-px flex-1 bg-outline-variant/40" />
              )}
            </div>
            <div className="pb-2">
              <div className="flex items-center gap-2">
                <Icon
                  className={`h-5 w-5 ${isPrimary ? "text-primary" : "text-secondary"}`}
                />
                <h3 className="text-headline-sm text-on-surface">{title}</h3>
              </div>
              <p className="mt-1 text-body-md text-on-surface-variant">{text}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-8">{cta}</div>
    </div>
  );
}
