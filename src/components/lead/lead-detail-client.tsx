"use client";

import { Lock, Mail, MapPin, MessageCircle, Phone, Unlock, User } from "lucide-react";
import Link from "next/link";

import { Badge, Chip } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import { trackContactClick, trackUnlockContact } from "~/lib/analytics";
import { formatCurrency } from "~/lib/currency";
import { api } from "~/trpc/react";

export function LeadDetailClient({ publicId }: { publicId: string }) {
  const utils = api.useUtils();
  const { data, isLoading } = api.lead.detail.useQuery({ publicId });
  const unlock = api.lead.unlock.useMutation({
    onSuccess: () => {
      trackUnlockContact({ category: data?.order.categories[0]?.slug });
      void utils.lead.detail.invalidate({ publicId });
      void utils.wallet.get.invalidate();
    },
  });

  if (isLoading) {
    return <p className="text-body-md text-on-surface-variant">Carregando…</p>;
  }
  if (!data) {
    return (
      <Card>
        <p className="text-body-md text-on-surface">Lead não encontrado.</p>
        <Link href="/app/leads" className="mt-3 inline-block text-primary">
          ← Voltar aos leads
        </Link>
      </Card>
    );
  }

  const { order, unlocked, contact } = data;
  const insufficient = unlock.error?.message.includes("insuficiente");

  return (
    <div className="space-y-6">
      <Link href="/app/leads" className="text-label-lg text-on-surface-variant hover:text-primary">
        ← Voltar aos leads
      </Link>

      <Card>
        <div className="flex items-start justify-between gap-3">
          <div>
            <h1 className="text-headline-md text-on-surface">{order.title}</h1>
            <p className="mt-1 flex items-center gap-1 text-body-sm text-on-surface-variant">
              <MapPin className="h-4 w-4" />
              {order.location.city}/{order.location.state}
            </p>
          </div>
          <span className="text-headline-md font-extrabold text-primary">
            {formatCurrency(order.budget)}
          </span>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {order.categories.map((c) => (
            <Chip key={c.slug}>{c.name}</Chip>
          ))}
          <Chip>{order.unlockCount} desbloqueio(s)</Chip>
        </div>

        <h2 className="mt-6 text-headline-sm text-on-surface">Descrição do projeto</h2>
        <p className="mt-2 whitespace-pre-line text-body-md text-on-surface-variant">
          {order.description}
        </p>
      </Card>

      {/* Contact reveal / unlock */}
      {unlocked && contact ? (
        <Card className="border-secondary">
          <div className="mb-3 flex items-center gap-2">
            <Unlock className="h-5 w-5 text-secondary" />
            <h2 className="text-headline-sm text-on-surface">Contato desbloqueado</h2>
          </div>
          <div className="space-y-2 text-body-md text-on-surface">
            <p className="flex items-center gap-2">
              <User className="h-4 w-4 text-outline" /> {contact.name}
            </p>
            <a
              href={`tel:${contact.phone}`}
              onClick={() => trackContactClick("phone")}
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <Phone className="h-4 w-4" /> {contact.phone}
            </a>
            {contact.whatsapp && (
              <a
                href={`https://wa.me/${contact.whatsapp.replace(/\D/g, "")}`}
                target="_blank"
                rel="noreferrer"
                onClick={() => trackContactClick("whatsapp")}
                className="flex items-center gap-2 text-secondary hover:underline"
              >
                <MessageCircle className="h-4 w-4" /> {contact.whatsapp}
              </a>
            )}
            <a
              href={`mailto:${contact.email}`}
              onClick={() => trackContactClick("email")}
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <Mail className="h-4 w-4" /> {contact.email}
            </a>
          </div>
        </Card>
      ) : (
        <Card className="text-center">
          <Lock className="mx-auto h-10 w-10 text-outline" />
          <h2 className="mt-3 text-headline-sm text-on-surface">
            Contato bloqueado
          </h2>
          <p className="mt-1 text-body-md text-on-surface-variant">
            Desbloqueie para ver telefone, WhatsApp e e-mail do cliente.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-surface-container px-4 py-2 text-label-lg text-on-surface">
            Custo: <strong>1 crédito</strong>
          </div>
          <div className="mt-4">
            <Button
              size="lg"
              disabled={unlock.isPending}
              onClick={() => unlock.mutate({ publicId })}
            >
              {unlock.isPending ? "Desbloqueando…" : "Desbloquear contato"}
            </Button>
          </div>
          {unlock.error && (
            <div className="mt-3">
              <Badge variant="error">{unlock.error.message}</Badge>
              {insufficient && (
                <div className="mt-2">
                  <Link href="/app/wallet" className="text-primary underline">
                    Comprar créditos →
                  </Link>
                </div>
              )}
            </div>
          )}
        </Card>
      )}
    </div>
  );
}
