import { PublicLayout } from "~/components/layout/public-layout";
import { CreateOrderForm } from "~/components/order/create-order-form";
import { DURATION_TIERS } from "~/server/config/pricing";
import { db } from "~/server/db";

export const metadata = {
  title: "Publicar um pedido",
  description:
    "Descreva o serviço que você precisa e receba contato de profissionais qualificados da sua região.",
};

// Catalog changes rarely; revalidate periodically.
export const revalidate = 3600;

export default async function PublishPage() {
  const [categories, locations] = await Promise.all([
    db.category.findMany({
      orderBy: { name: "asc" },
      select: { id: true, name: true },
    }),
    db.location.findMany({
      orderBy: [{ state: "asc" }, { city: "asc" }],
      select: { id: true, city: true, state: true },
    }),
  ]);

  const tiers = DURATION_TIERS.map((t) => ({
    id: t.id,
    label: t.label,
    days: t.days,
    priceCents: t.priceCents,
  }));

  return (
    <PublicLayout>
      <div className="mx-auto w-full max-w-3xl px-4 py-12 md:px-8">
        <h1 className="text-headline-lg font-extrabold text-on-surface">
          Publicar um pedido
        </h1>
        <p className="mt-2 text-body-lg text-on-surface-variant">
          Leva menos de 2 minutos. Você só paga a publicação; os profissionais
          entram em contato com você.
        </p>
        <div className="mt-8">
          <CreateOrderForm
            categories={categories}
            locations={locations.map((l) => ({
              id: l.id,
              name: `${l.city} — ${l.state}`,
            }))}
            tiers={tiers}
          />
        </div>
      </div>
    </PublicLayout>
  );
}
