import Link from "next/link";

import { PublicLayout } from "~/components/layout/public-layout";
import { Card } from "~/components/ui/card";
import { db } from "~/server/db";

export const metadata = {
  title: "Categorias de serviços",
  description:
    "Explore as categorias de serviços disponíveis e encontre profissionais ou publique seu pedido.",
  alternates: { canonical: "/categorias" },
};

export const revalidate = 86400;

export default async function CategoriesPage() {
  const categories = await db.category.findMany({
    orderBy: { name: "asc" },
    select: {
      id: true,
      slug: true,
      name: true,
      _count: {
        select: {
          orders: { where: { status: "ACTIVE", expiresAt: { gt: new Date() } } },
        },
      },
    },
  });

  return (
    <PublicLayout>
      <div className="mx-auto w-full max-w-container px-4 py-12 md:px-8">
        <h1 className="text-headline-lg font-extrabold text-on-surface">
          Categorias de serviços
        </h1>
        <p className="mt-2 text-body-lg text-on-surface-variant">
          Escolha uma categoria para ver os pedidos abertos.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <Link key={c.id} href={`/categoria/${c.slug}`}>
              <Card className="h-full transition-shadow hover:shadow-[0_4px_12px_rgba(11,28,48,0.06)]">
                <h2 className="text-headline-sm text-on-surface">{c.name}</h2>
                <p className="mt-1 text-body-sm text-on-surface-variant">
                  {c._count.orders} pedido(s) aberto(s)
                </p>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </PublicLayout>
  );
}
