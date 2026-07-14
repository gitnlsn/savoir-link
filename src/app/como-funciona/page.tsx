import { Contact, FileText, Unlock, Wallet } from "lucide-react";
import Link from "next/link";

import { PublicLayout } from "~/components/layout/public-layout";
import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";

export const metadata = {
  title: "Como funciona",
  description:
    "Entenda como o Savoir Link conecta clientes e profissionais de serviços.",
  alternates: { canonical: "/como-funciona" },
};

const CUSTOMER_STEPS = [
  { icon: FileText, title: "Publique seu pedido", text: "Descreva o serviço, orçamento e por quanto tempo o pedido fica ativo." },
  { icon: Contact, title: "Receba contatos", text: "Profissionais interessados desbloqueiam seu contato e falam com você." },
];

const PROVIDER_STEPS = [
  { icon: Wallet, title: "Compre créditos", text: "Adicione créditos à sua carteira uma única vez." },
  { icon: Unlock, title: "Desbloqueie leads", text: "Gaste 1 crédito para revelar o contato de um cliente e fechar negócio." },
];

export default function HowItWorksPage() {
  return (
    <PublicLayout>
      <div className="mx-auto w-full max-w-container px-4 py-12 md:px-8">
        <h1 className="text-headline-lg font-extrabold text-on-surface">
          Como funciona
        </h1>

        <section className="mt-8">
          <h2 className="text-headline-md text-on-surface">Para clientes</h2>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {CUSTOMER_STEPS.map((s) => (
              <Step key={s.title} {...s} />
            ))}
          </div>
          <Link href="/publicar" className="mt-6 inline-block">
            <Button>Publicar um pedido</Button>
          </Link>
        </section>

        <section className="mt-12">
          <h2 className="text-headline-md text-on-surface">Para profissionais</h2>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {PROVIDER_STEPS.map((s) => (
              <Step key={s.title} {...s} />
            ))}
          </div>
          <Link href="/app/leads" className="mt-6 inline-block">
            <Button variant="secondary">Ver leads disponíveis</Button>
          </Link>
        </section>
      </div>
    </PublicLayout>
  );
}

function Step({
  icon: Icon,
  title,
  text,
}: {
  icon: typeof FileText;
  title: string;
  text: string;
}) {
  return (
    <Card>
      <Icon className="h-8 w-8 text-primary" />
      <h3 className="mt-3 text-headline-sm text-on-surface">{title}</h3>
      <p className="mt-1 text-body-md text-on-surface-variant">{text}</p>
    </Card>
  );
}
