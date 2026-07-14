"use client";

import { Check, MapPin, Search } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Badge, Chip } from "~/components/ui/badge";
import { Input } from "~/components/ui/input";
import { MultiSelect } from "~/components/ui/multi-select";
import { formatCurrency } from "~/lib/currency";
import { api } from "~/trpc/react";

export function LeadsBrowseClient() {
  const [search, setSearch] = useState("");
  const [categorySlugs, setCategorySlugs] = useState<string[]>([]);

  const { data: categories } = api.catalog.categories.useQuery();
  const { data, isLoading } = api.lead.list.useQuery({
    search: search || undefined,
    categorySlugs: categorySlugs.length ? categorySlugs : undefined,
  });

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-headline-lg font-extrabold text-on-surface">
          Leads disponíveis
        </h1>
        <p className="mt-1 text-body-md text-on-surface-variant">
          Encontre seu próximo cliente. Desbloqueie o contato com créditos.
        </p>
      </div>

      {/* Filters */}
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <div className="relative min-w-[260px] flex-1">
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-outline" />
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar por título ou palavra-chave…"
            className="pl-10"
          />
        </div>
      </div>
      <div className="mb-6">
        <MultiSelect
          options={(categories ?? []).map((c) => ({
            value: c.slug,
            label: c.name,
          }))}
          selected={categorySlugs}
          onChange={setCategorySlugs}
          placeholder="Filtrar por categorias…"
          emptyLabel="Nenhuma categoria encontrada."
        />
      </div>

      {/* Grid */}
      {isLoading ? (
        <p className="text-body-md text-on-surface-variant">Carregando…</p>
      ) : !data?.leads.length ? (
        <p className="text-body-md text-on-surface-variant">
          Nenhum lead encontrado com esses filtros.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {data.leads.map((lead) => (
            <Link
              key={lead.publicId}
              href={`/app/leads/${lead.publicId}`}
              className="group flex flex-col justify-between rounded-2xl border border-outline-variant bg-surface-container-lowest p-6 transition-all hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(11,28,48,0.06)]"
            >
              <div>
                <div className="mb-3 flex items-start justify-between gap-2">
                  {lead.alreadyUnlocked ? (
                    <Badge variant="success">
                      <Check className="mr-1 h-3 w-3" /> Desbloqueado
                    </Badge>
                  ) : (
                    <Badge variant="neutral">Novo</Badge>
                  )}
                  <span className="text-headline-sm font-bold text-primary">
                    {formatCurrency(lead.budget)}
                  </span>
                </div>
                <h3 className="text-headline-sm text-on-surface">{lead.title}</h3>
                <p className="mt-1 flex items-center gap-1 text-body-sm text-on-surface-variant">
                  <MapPin className="h-4 w-4" />
                  {lead.location.city}/{lead.location.state}
                </p>
                <p className="mt-3 line-clamp-2 text-body-sm text-on-surface-variant">
                  {lead.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-1">
                  {lead.categories.map((c) => (
                    <Chip key={c.slug}>{c.name}</Chip>
                  ))}
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between border-t border-outline-variant/30 pt-4">
                <span className="text-label-md text-on-surface-variant">
                  {lead.unlockCount} desbloqueio(s)
                </span>
                <span className="text-label-lg font-bold text-primary group-hover:underline">
                  Ver detalhes →
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
