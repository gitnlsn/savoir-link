"use client";

import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";

import { Card } from "~/components/ui/card";
import { Chip } from "~/components/ui/badge";
import { formatCurrency } from "~/lib/currency";
import { api } from "~/trpc/react";

export function MyUnlocksClient() {
  const { data, isLoading } = api.lead.myUnlocks.useQuery();

  if (isLoading) {
    return <p className="text-body-md text-on-surface-variant">Carregando…</p>;
  }
  if (!data?.length) {
    return (
      <Card>
        <p className="text-body-md text-on-surface">
          Você ainda não desbloqueou nenhum contato.
        </p>
        <Link href="/app/leads" className="mt-3 inline-block text-primary underline">
          Explorar leads →
        </Link>
      </Card>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {data.map((u) => (
        <Card key={u.orderPublicId}>
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-headline-sm text-on-surface">{u.title}</h3>
            <span className="text-body-md font-bold text-primary">
              {formatCurrency(u.budget)}
            </span>
          </div>
          <p className="mt-1 flex items-center gap-1 text-body-sm text-on-surface-variant">
            <MapPin className="h-4 w-4" />
            {u.location.city}/{u.location.state}
          </p>
          <div className="mt-2">
            <Chip>{u.category.name}</Chip>
          </div>
          <div className="mt-4 space-y-2 border-t border-outline-variant/30 pt-4 text-body-md">
            <p className="font-semibold text-on-surface">{u.contact.name}</p>
            <a href={`tel:${u.contact.phone}`} className="flex items-center gap-2 text-primary hover:underline">
              <Phone className="h-4 w-4" /> {u.contact.phone}
            </a>
            {u.contact.whatsapp && (
              <a
                href={`https://wa.me/${u.contact.whatsapp.replace(/\D/g, "")}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-secondary hover:underline"
              >
                <MessageCircle className="h-4 w-4" /> {u.contact.whatsapp}
              </a>
            )}
            <a href={`mailto:${u.contact.email}`} className="flex items-center gap-2 text-primary hover:underline">
              <Mail className="h-4 w-4" /> {u.contact.email}
            </a>
          </div>
          <p className="mt-3 text-label-md text-on-surface-variant">
            Desbloqueado em {new Date(u.unlockedAt).toLocaleDateString("pt-BR")}
          </p>
        </Card>
      ))}
    </div>
  );
}
