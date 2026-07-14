"use client";

import { Eye, Lock, Mail, Phone } from "lucide-react";
import { useState } from "react";

import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import { formatCents } from "~/lib/currency";
import { cn } from "~/lib/utils";
import { api } from "~/trpc/react";

interface Tier {
  id: string;
  label: string;
  priceCents: number;
}

const STATUS: Record<string, { label: string; variant: "success" | "neutral" | "error" }> = {
  ACTIVE: { label: "Ativo", variant: "success" },
  PENDING_PAYMENT: { label: "Aguardando pagamento", variant: "neutral" },
  EXPIRED: { label: "Expirado", variant: "error" },
  CLOSED: { label: "Encerrado", variant: "neutral" },
};

export function ManageOrderClient({ token, tiers }: { token: string; tiers: Tier[] }) {
  const utils = api.useUtils();
  const { data: order, isLoading } = api.order.manageGet.useQuery({ token });
  const [renewTier, setRenewTier] = useState(tiers[0]?.id ?? "");

  const close = api.order.manageClose.useMutation({
    onSuccess: () => utils.order.manageGet.invalidate({ token }),
  });
  const renew = api.order.manageRenew.useMutation({
    onSuccess: (res) => {
      window.location.href = res.checkoutUrl;
    },
  });

  if (isLoading) {
    return <p className="text-body-md text-on-surface-variant">Carregando…</p>;
  }
  if (!order) {
    return (
      <Card>
        <p className="text-body-md text-on-surface">
          Pedido não encontrado. Verifique o link enviado por e-mail.
        </p>
      </Card>
    );
  }

  const status = STATUS[order.status] ?? STATUS.PENDING_PAYMENT!;
  const canRenew = order.status === "EXPIRED" || order.status === "CLOSED";

  return (
    <div className="space-y-6">
      <Card>
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-headline-sm text-on-surface">{order.title}</h1>
            <p className="mt-1 text-body-sm text-on-surface-variant">
              {order.category.name} · {order.location.city}/{order.location.state} ·{" "}
              {formatCents(order.budget * 100)}
            </p>
          </div>
          <Badge variant={status.variant}>{status.label}</Badge>
        </div>
        <p className="mt-4 text-body-md text-on-surface-variant">{order.description}</p>

        <div className="mt-6 flex items-center gap-2 rounded-lg bg-secondary-container/40 p-4">
          <Eye className="h-5 w-5 text-secondary" />
          <span className="text-body-md text-on-surface">
            <strong>{order.unlockCount}</strong> profissional(is) desbloquearam
            seu contato.
          </span>
        </div>

        {order.expiresAt && (
          <p className="mt-3 text-body-sm text-on-surface-variant">
            Ativo até {new Date(order.expiresAt).toLocaleDateString("pt-BR")}.
          </p>
        )}
      </Card>

      <Card>
        <h2 className="text-headline-sm text-on-surface">Seu contato</h2>
        <div className="mt-4 space-y-2 text-body-md text-on-surface">
          <p className="flex items-center gap-2">
            <Lock className="h-4 w-4 text-outline" /> {order.contactName}
          </p>
          <p className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-outline" /> {order.contactPhone}
          </p>
          <p className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-outline" /> {order.contactEmail}
          </p>
        </div>
      </Card>

      {canRenew ? (
        <Card>
          <h2 className="text-headline-sm text-on-surface">Renovar pedido</h2>
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {tiers.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setRenewTier(t.id)}
                className={cn(
                  "rounded-2xl border p-4 text-left transition-all",
                  renewTier === t.id
                    ? "border-primary ring-2 ring-primary"
                    : "border-outline-variant hover:bg-surface-container-low",
                )}
              >
                <div className="text-body-md text-on-surface">{t.label}</div>
                <div className="text-headline-sm font-extrabold text-primary">
                  {formatCents(t.priceCents)}
                </div>
              </button>
            ))}
          </div>
          <Button
            className="mt-4"
            disabled={renew.isPending}
            onClick={() => renew.mutate({ token, durationTierId: renewTier })}
          >
            {renew.isPending ? "Processando…" : "Renovar e pagar"}
          </Button>
        </Card>
      ) : (
        order.status !== "CLOSED" && (
          <Button
            variant="danger"
            disabled={close.isPending}
            onClick={() => close.mutate({ token })}
          >
            {close.isPending ? "Encerrando…" : "Encerrar pedido"}
          </Button>
        )
      )}
    </div>
  );
}
