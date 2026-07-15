"use client";

import { ArrowDownCircle, ArrowUpCircle, Wallet } from "lucide-react";

import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import { trackBuyCredits } from "~/lib/analytics";
import { formatCents } from "~/lib/currency";
import { api } from "~/trpc/react";

interface Package {
  id: string;
  label: string;
  credits: number;
  priceCents: number;
}

export function WalletClient({ packages }: { packages: Package[] }) {
  const { data, isLoading } = api.wallet.get.useQuery();
  const topup = api.wallet.topup.useMutation({
    onSuccess: (res) => {
      window.location.href = res.checkoutUrl;
    },
  });

  return (
    <div className="space-y-8">
      <Card className="bg-primary text-on-primary">
        <div className="flex items-center gap-3">
          <Wallet className="h-8 w-8" />
          <div>
            <p className="text-label-lg opacity-80">Saldo de créditos</p>
            <p className="text-display font-extrabold leading-none">
              {isLoading ? "…" : (data?.balance ?? 0)}
            </p>
          </div>
        </div>
        <p className="mt-3 text-body-sm opacity-80">
          Cada desbloqueio de contato consome 1 crédito.
        </p>
      </Card>

      <section>
        <h2 className="mb-3 text-headline-sm text-on-surface">Comprar créditos</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {packages.map((p) => (
            <Card key={p.id} className="flex flex-col justify-between">
              <div>
                <p className="text-headline-md font-extrabold text-on-surface">
                  {p.credits}
                </p>
                <p className="text-body-sm text-on-surface-variant">créditos</p>
                <p className="mt-2 text-headline-sm font-bold text-primary">
                  {formatCents(p.priceCents)}
                </p>
              </div>
              <Button
                className="mt-4 w-full"
                disabled={topup.isPending}
                onClick={() => {
                  trackBuyCredits({
                    packageId: p.id,
                    credits: p.credits,
                    priceCents: p.priceCents,
                  });
                  topup.mutate({ packageId: p.id });
                }}
              >
                Comprar
              </Button>
            </Card>
          ))}
        </div>
        {topup.error && (
          <p className="mt-3 text-body-sm text-error">{topup.error.message}</p>
        )}
      </section>

      <section>
        <h2 className="mb-3 text-headline-sm text-on-surface">Histórico</h2>
        <Card className="p-0">
          {!data?.transactions.length ? (
            <p className="p-6 text-body-sm text-on-surface-variant">
              Nenhuma movimentação ainda.
            </p>
          ) : (
            <ul>
              {data.transactions.map((t, i) => (
                <li
                  key={t.id}
                  className={`flex items-center justify-between px-6 py-4 ${
                    i > 0 ? "border-t border-outline-variant/30" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {t.delta > 0 ? (
                      <ArrowUpCircle className="h-5 w-5 text-secondary" />
                    ) : (
                      <ArrowDownCircle className="h-5 w-5 text-outline" />
                    )}
                    <div>
                      <p className="text-body-md text-on-surface">
                        {t.type === "TOPUP" ? "Compra de créditos" : "Desbloqueio de contato"}
                      </p>
                      <p className="text-label-md text-on-surface-variant">
                        {new Date(t.createdAt).toLocaleString("pt-BR")}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`text-body-md font-bold ${
                      t.delta > 0 ? "text-secondary" : "text-on-surface-variant"
                    }`}
                  >
                    {t.delta > 0 ? "+" : ""}
                    {t.delta}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </Card>
      </section>
    </div>
  );
}
