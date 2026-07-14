import Link from "next/link";

import { PublicLayout } from "~/components/layout/public-layout";
import { PublicLeadCard } from "~/components/lead/public-lead-card";
import { Button } from "~/components/ui/button";
import { db } from "~/server/db";
import { ListLeadsUseCase } from "~/server/use-cases/lead/list-leads.use-case";

export const metadata = {
  title: "Pedidos recentes",
  description:
    "Veja os últimos pedidos de serviço publicados por clientes na Savoir Link.",
  alternates: { canonical: "/recentes" },
};

// Refresh often so newly published orders show up.
export const revalidate = 300;

export default async function RecentOrdersPage() {
  const { leads } = await new ListLeadsUseCase({ db }).execute({ pageSize: 30 });

  return (
    <PublicLayout>
      <div className="mx-auto w-full max-w-container px-4 py-12 md:px-8">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h1 className="text-headline-lg font-extrabold text-on-surface">
              Pedidos recentes
            </h1>
            <p className="mt-2 text-body-lg text-on-surface-variant">
              Os últimos pedidos publicados por clientes.
            </p>
          </div>
          <Link href="/publicar">
            <Button>Publicar meu pedido</Button>
          </Link>
        </div>

        {leads.length === 0 ? (
          <p className="mt-10 text-body-md text-on-surface-variant">
            Nenhum pedido aberto no momento. Que tal publicar o seu?
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
