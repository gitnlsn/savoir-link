import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Button } from "~/components/ui/button";

/** Closing conversion band. */
export function FinalCta() {
  return (
    <section className="mx-auto w-full max-w-container px-4 py-16 md:px-8 md:py-24">
      <div className="relative overflow-hidden rounded-2xl bg-primary px-6 py-14 text-center shadow-[var(--shadow-elev-3)] md:px-12">
        <div className="blob-bg pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-primary-fixed opacity-20" />
        <div className="relative z-10 mx-auto max-w-2xl">
          <h2 className="text-headline-lg font-extrabold text-on-primary">
            Pronto para encontrar o profissional certo?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-body-lg text-on-primary-container">
            Publique seu pedido gratuitamente e comece a receber contatos hoje
            mesmo.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/publicar">
              <Button
                size="lg"
                className="w-full rounded-full bg-surface-container-lowest text-primary hover:bg-surface-container-lowest hover:opacity-90 sm:w-auto"
              >
                Publicar um pedido
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="/app/leads">
              <Button
                size="lg"
                variant="secondary"
                className="w-full rounded-full border-on-primary text-on-primary hover:bg-on-primary hover:text-primary sm:w-auto"
              >
                Sou profissional
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
