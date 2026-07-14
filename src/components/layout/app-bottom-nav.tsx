"use client";

import { Home, Search, Wallet, Contact, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "~/lib/utils";

const items = [
  { href: "/", label: "Início", icon: Home },
  { href: "/app/leads", label: "Leads", icon: Search },
  { href: "/app/unlocks", label: "Contatos", icon: Contact },
  { href: "/app/wallet", label: "Carteira", icon: Wallet },
  { href: "/app/profile", label: "Perfil", icon: User },
];

export function AppBottomNav() {
  const pathname = usePathname();
  return (
    <nav className="fixed bottom-0 left-0 z-50 flex w-full items-center justify-around rounded-t-2xl bg-surface-container-lowest px-2 py-1 shadow-[0_-4px_12px_rgba(11,28,48,0.06)] md:hidden">
      {items.map(({ href, label, icon: Icon }) => {
        const active =
          href === "/"
            ? pathname === "/"
            : pathname === href || pathname.startsWith(`${href}/`);
        return (
          <Link
            key={href}
            href={href}
            className={cn(
              "flex flex-col items-center justify-center rounded-full px-3 py-2 transition-transform active:scale-90",
              active
                ? "bg-secondary-container text-on-secondary-container"
                : "text-on-surface-variant hover:text-primary",
            )}
          >
            <Icon className="h-5 w-5" />
            <span className="mt-0.5 text-label-md">{label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
