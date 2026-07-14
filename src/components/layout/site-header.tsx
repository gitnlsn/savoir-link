import Link from "next/link";

import { Button } from "~/components/ui/button";

/** Public marketing header — glass app bar with brand + primary CTA. */
export function SiteHeader() {
  return (
    <header className="glass-header fixed top-0 z-50 w-full border-b border-outline-variant/30 bg-surface/80">
      <div className="mx-auto flex h-16 w-full max-w-container items-center justify-between px-4 md:px-8">
        <Link href="/" className="text-headline-md font-extrabold text-primary">
          Savoir Link
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/categorias"
            className="text-label-lg text-on-surface-variant transition-colors hover:text-primary"
          >
            Categorias
          </Link>
          <Link
            href="/como-funciona"
            className="text-label-lg text-on-surface-variant transition-colors hover:text-primary"
          >
            Como funciona
          </Link>
          <Link
            href="/precos"
            className="text-label-lg text-on-surface-variant transition-colors hover:text-primary"
          >
            Preços
          </Link>
          <Link
            href="/app/leads"
            className="text-label-lg text-on-surface-variant transition-colors hover:text-primary"
          >
            Sou profissional
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/publicar">
            <Button size="sm">Publicar pedido</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
