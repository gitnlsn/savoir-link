import { ArrowRight, Search } from "lucide-react";
import Link from "next/link";

import { PublicLayout } from "~/components/layout/public-layout";
import { Button } from "~/components/ui/button";

export default function HomePage() {
  return (
    <PublicLayout>
      <section className="relative overflow-hidden">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-primary-container/10 blur-3xl" />
        <div className="mx-auto w-full max-w-container px-4 py-24 md:px-8 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-headline-lg font-extrabold text-on-surface md:text-display">
              Encontre o profissional certo para o seu serviço
            </h1>
            <p className="mt-4 text-body-lg text-on-surface-variant">
              Publique seu pedido e receba contato de profissionais
              qualificados da sua região. Rápido, simples e seguro.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/publicar">
                <Button size="lg" className="w-full sm:w-auto">
                  Publicar um pedido
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="/app/leads">
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  <Search className="h-5 w-5" />
                  Sou profissional
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
