"use client";

import { useState } from "react";

import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import { CurrencyInput } from "~/components/ui/currency-input";
import { Input, Label, Textarea } from "~/components/ui/input";
import { MultiSelect } from "~/components/ui/multi-select";
import { formatCents } from "~/lib/currency";
import { cn } from "~/lib/utils";
import { api } from "~/trpc/react";

interface Option {
  id: string;
  name: string;
}
interface Tier {
  id: string;
  label: string;
  days: number;
  priceCents: number;
}

export function CreateOrderForm({
  categories,
  locations,
  tiers,
}: {
  categories: Option[];
  locations: Option[];
  tiers: Tier[];
}) {
  const [categoryIds, setCategoryIds] = useState<string[]>([]);
  const [locationId, setLocationId] = useState("");
  const [durationTierId, setDurationTierId] = useState(tiers[1]?.id ?? tiers[0]?.id ?? "");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [budget, setBudget] = useState(0);
  const [contactName, setContactName] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [contactWhatsapp, setContactWhatsapp] = useState("");
  const [contactEmail, setContactEmail] = useState("");

  const create = api.order.create.useMutation({
    onSuccess: (res) => {
      window.location.href = res.checkoutUrl;
    },
  });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    create.mutate({
      title,
      description,
      budget,
      categoryIds,
      locationId,
      contactName,
      contactPhone,
      contactWhatsapp: contactWhatsapp || undefined,
      contactEmail,
      durationTierId,
    });
  };

  return (
    <form onSubmit={submit} className="space-y-8">
      {/* Category */}
      <section>
        <h2 className="mb-1 text-headline-sm text-on-surface">
          Qual serviço você precisa?
        </h2>
        <p className="mb-3 text-body-sm text-on-surface-variant">
          Busque e selecione uma ou mais categorias (até 5).
        </p>
        <MultiSelect
          options={categories.map((c) => ({ value: c.id, label: c.name }))}
          selected={categoryIds}
          onChange={setCategoryIds}
          max={5}
          placeholder="Buscar categoria…"
          emptyLabel="Nenhuma categoria encontrada."
        />
      </section>

      {/* Details */}
      <section className="space-y-4">
        <h2 className="text-headline-sm text-on-surface">Sobre o serviço</h2>
        <div>
          <Label htmlFor="title">Título</Label>
          <Input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Ex.: Instalação de chuveiro elétrico"
            required
          />
        </div>
        <div>
          <Label htmlFor="description">Descrição</Label>
          <Textarea
            id="description"
            rows={5}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Descreva o que precisa com o máximo de detalhes possível."
            required
          />
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <Label htmlFor="location">Localização</Label>
            <select
              id="location"
              value={locationId}
              onChange={(e) => setLocationId(e.target.value)}
              required
              className="w-full rounded-lg border border-outline-variant bg-surface-container-lowest px-4 py-3 text-body-md outline-none focus:border-transparent focus:ring-2 focus:ring-primary"
            >
              <option value="">Selecione a cidade</option>
              {locations.map((l) => (
                <option key={l.id} value={l.id}>
                  {l.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <Label htmlFor="budget">Orçamento estimado</Label>
            <CurrencyInput
              id="budget"
              value={budget}
              onValueChange={setBudget}
              required
            />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="space-y-4">
        <h2 className="text-headline-sm text-on-surface">Seu contato</h2>
        <p className="text-body-sm text-on-surface-variant">
          Seus dados ficam ocultos até um profissional desbloquear o contato.
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <Label htmlFor="name">Nome</Label>
            <Input
              id="name"
              value={contactName}
              onChange={(e) => setContactName(e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="email">E-mail</Label>
            <Input
              id="email"
              type="email"
              value={contactEmail}
              onChange={(e) => setContactEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="phone">Telefone</Label>
            <Input
              id="phone"
              value={contactPhone}
              onChange={(e) => setContactPhone(e.target.value)}
              placeholder="+55 11 99999-9999"
              required
            />
          </div>
          <div>
            <Label htmlFor="whatsapp">WhatsApp (opcional)</Label>
            <Input
              id="whatsapp"
              value={contactWhatsapp}
              onChange={(e) => setContactWhatsapp(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Duration / pricing */}
      <section>
        <h2 className="mb-1 text-headline-sm text-on-surface">
          Por quanto tempo seu pedido fica ativo?
        </h2>
        <p className="mb-3 text-body-sm text-on-surface-variant">
          Quanto mais tempo ativo, mais profissionais verão seu pedido.
        </p>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {tiers.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setDurationTierId(t.id)}
              className={cn(
                "rounded-2xl border p-4 text-left transition-all",
                durationTierId === t.id
                  ? "border-primary bg-primary-container/5 ring-2 ring-primary"
                  : "border-outline-variant bg-surface-container-lowest hover:bg-surface-container-low",
              )}
            >
              <div className="text-headline-sm text-on-surface">{t.label}</div>
              <div className="mt-1 text-headline-md font-extrabold text-primary">
                {formatCents(t.priceCents)}
              </div>
            </button>
          ))}
        </div>
      </section>

      {create.error && (
        <Card className="border-error bg-error-container/30">
          <p className="text-body-sm text-on-error-container">
            {create.error.message}
          </p>
        </Card>
      )}

      <Button
        type="submit"
        size="lg"
        className="w-full"
        disabled={create.isPending || categoryIds.length === 0 || budget <= 0}
      >
        {create.isPending ? "Processando..." : "Publicar e pagar"}
      </Button>
    </form>
  );
}
