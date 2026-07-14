import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cache } from "react";

import { PublicLayout } from "~/components/layout/public-layout";
import { PublicLeadCard } from "~/components/lead/public-lead-card";
import {
  JsonLd,
  breadcrumbSchema,
} from "~/components/seo/json-ld";
import { Button } from "~/components/ui/button";
import { db } from "~/server/db";
import { ListLeadsUseCase } from "~/server/use-cases/lead/list-leads.use-case";

export const revalidate = 3600;

const getCategory = cache(async (slug: string) =>
  db.category.findUnique({ where: { slug } }),
);

export async function generateStaticParams() {
  const categories = await db.category.findMany({ select: { slug: true } });
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = await getCategory(slug);
  if (!category) return { title: "Categoria não encontrada" };
  return {
    title: `Pedidos de ${category.name}`,
    description: `Veja pedidos abertos de ${category.name}. Profissionais: desbloqueie o contato e feche negócio.`,
    alternates: { canonical: `/categoria/${slug}` },
    openGraph: {
      title: `Pedidos de ${category.name} | Savoir Link`,
      type: "website",
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = await getCategory(slug);
  if (!category) notFound();

  const { leads, total } = await new ListLeadsUseCase({ db }).execute({
    categorySlug: slug,
    pageSize: 24,
  });

  return (
    <PublicLayout>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Categorias", path: "/categorias" },
          { name: category.name, path: `/categoria/${slug}` },
        ])}
      />
      <div className="mx-auto w-full max-w-container px-4 py-12 md:px-8">
        <nav className="mb-4 text-label-md text-on-surface-variant">
          <Link href="/categorias" className="hover:text-primary">
            Categorias
          </Link>{" "}
          / {category.name}
        </nav>

        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h1 className="text-headline-lg font-extrabold text-on-surface">
              Pedidos de {category.name}
            </h1>
            <p className="mt-2 text-body-lg text-on-surface-variant">
              {total} pedido(s) aberto(s) agora.
            </p>
          </div>
          <Link href="/publicar">
            <Button>Publicar meu pedido</Button>
          </Link>
        </div>

        {leads.length === 0 ? (
          <p className="mt-10 text-body-md text-on-surface-variant">
            Nenhum pedido aberto nesta categoria no momento.
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
