import type { Metadata } from "next";
import Link from "next/link";

import { PublicLayout } from "~/components/layout/public-layout";
import { PublicLeadCard } from "~/components/lead/public-lead-card";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import {
  findServiceCategory,
  SERVICE_CATEGORIES,
} from "~/data/service-categories";
import { db } from "~/server/db";
import { ListLeadsUseCase } from "~/server/use-cases/lead/list-leads.use-case";

type SearchParams = Promise<{ categoria?: string }>;

export function generateMetadata(): Metadata {
  return {
    title: "Pedidos recentes",
    description:
      "Veja os últimos pedidos de serviço publicados por clientes na Savoir Link.",
    alternates: { canonical: "/recentes" },
  };
}

export default async function RecentOrdersPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { categoria } = await searchParams;
  const active = findServiceCategory(categoria);

  const { leads } = await new ListLeadsUseCase({ db }).execute({
    pageSize: 30,
    categorySlugs: active ? [active.slug] : undefined,
  });

  return (
    <PublicLayout>
      <div className="mx-auto w-full max-w-container px-4 py-12 md:px-8">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h1 className="text-headline-lg font-extrabold text-on-surface">
              {active ? `Pedidos de ${active.label}` : "Pedidos recentes"}
            </h1>
            <p className="mt-2 text-body-lg text-on-surface-variant">
              {active
                ? `Últimos pedidos de ${active.label} publicados por clientes.`
                : "Os últimos pedidos publicados por clientes."}
            </p>
          </div>
          <Link href="/publicar">
            <Button>Publicar meu pedido</Button>
          </Link>
        </div>

        {/* Category filter bar */}
        <div className="mt-8 flex flex-wrap gap-2">
          <FilterChip href="/recentes" active={!active}>
            Todos
          </FilterChip>
          {SERVICE_CATEGORIES.map(({ icon: Icon, label, slug }) => (
            <FilterChip
              key={slug}
              href={`/recentes?categoria=${slug}`}
              active={active?.slug === slug}
            >
              <Icon className="h-4 w-4" />
              {label}
            </FilterChip>
          ))}
        </div>

        {leads.length === 0 ? (
          <p className="mt-10 text-body-md text-on-surface-variant">
            {active
              ? `Nenhum pedido de ${active.label} aberto no momento. Que tal publicar o seu?`
              : "Nenhum pedido aberto no momento. Que tal publicar o seu?"}
          </p>
        ) : (
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {leads.map((lead) => (
              <PublicLeadCard key={lead.publicId} lead={lead} />
            ))}
          </div>
        )}
      </div>
    </PublicLayout>
  );
}

function FilterChip({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-2 rounded-full border px-4 py-2 text-label-md font-semibold transition-all",
        active
          ? "border-primary bg-primary text-on-primary"
          : "border-outline-variant/30 bg-surface-container-lowest text-on-surface-variant hover:border-primary hover:text-primary",
      )}
    >
      {children}
    </Link>
  );
}
