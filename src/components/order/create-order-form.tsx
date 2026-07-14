"use client";

import { useState } from "react";

import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import { Input, Label, Textarea } from "~/components/ui/input";
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
  const [categoryId, setCategoryId] = useState("");
  const [locationId, setLocationId] = useState("");
  const [durationTierId, setDurationTierId] = useState(tiers[1]?.id ?? tiers[0]?.id ?? "");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [budget, setBudget] = useState("");
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
      budget: Number(budget),
      categoryId,
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
        <h2 className="mb-3 text-headline-sm text-on-surface">
          Qual serviço você precisa?
        </h2>
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setCategoryId(c.id)}
              className={cn(
                "rounded-full border px-4 py-2 text-label-lg transition-colors",
                categoryId === c.id
                  ? "border-primary bg-primary text-on-primary"
                  : "border-outline-variant bg-surface-container-lowest text-on-surface hover:bg-surface-container-low",
              )}
            >
              {c.name}
            </button>
          ))}
        </div>
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
            <Label htmlFor="budget">Orçamento estimado (R$)</Label>
            <Input
              id="budget"
              type="number"
              min="1"
              step="0.01"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              placeholder="500"
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
        disabled={create.isPending || !categoryId}
      >
        {create.isPending ? "Processando..." : "Publicar e pagar"}
      </Button>
    </form>
  );
}
