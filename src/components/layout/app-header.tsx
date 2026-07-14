import { Contact, Home, Search, Wallet } from "lucide-react";
import Link from "next/link";

/** Provider-area top app bar (desktop nav + brand). */
export function AppHeader({ balance }: { balance?: number }) {
  return (
    <header className="glass-header sticky top-0 z-50 w-full border-b border-outline-variant/30 bg-surface/80">
      <div className="mx-auto flex h-16 w-full max-w-container items-center justify-between px-4 md:px-8">
        <Link href="/" className="text-headline-md font-extrabold text-primary">
          Savoir Link
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          <NavLink href="/" icon={<Home className="h-5 w-5" />}>
            Início
          </NavLink>
          <NavLink href="/app/leads" icon={<Search className="h-5 w-5" />}>
            Leads
          </NavLink>
          <NavLink href="/app/unlocks" icon={<Contact className="h-5 w-5" />}>
            Meus contatos
          </NavLink>
          <NavLink href="/app/wallet" icon={<Wallet className="h-5 w-5" />}>
            Carteira
          </NavLink>
        </nav>
        <Link
          href="/app/wallet"
          className="flex items-center gap-2 rounded-full bg-surface-container px-4 py-2 text-label-lg text-on-surface"
        >
          <Wallet className="h-4 w-4 text-primary" />
          {balance ?? 0} créditos
        </Link>
      </div>
    </header>
  );
}

function NavLink({
  href,
  icon,
  children,
}: {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="flex items-center gap-2 text-label-lg text-on-surface-variant transition-colors hover:text-primary"
    >
      {icon}
      {children}
    </Link>
  );
}
