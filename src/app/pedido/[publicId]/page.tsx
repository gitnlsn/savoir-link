import { Lock, MapPin } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cache } from "react";

import { PublicLayout } from "~/components/layout/public-layout";
import { JsonLd, breadcrumbSchema, orderSchema } from "~/components/seo/json-ld";
import { Badge, Chip } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import { formatCurrency } from "~/lib/currency";
import { db } from "~/server/db";
import { GetPublicOrderUseCase } from "~/server/use-cases/order/get-public-order.use-case";

export const revalidate = 3600;

const getOrder = cache((publicId: string) =>
  new GetPublicOrderUseCase({ db }).byPublicId(publicId),
);

export async function generateStaticParams() {
  const orders = await db.order.findMany({
    where: { status: "ACTIVE", expiresAt: { gt: new Date() } },
    orderBy: { unlockCount: "desc" },
    take: 100,
    select: { publicId: true },
  });
  return orders.map((o) => ({ publicId: o.publicId }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ publicId: string }>;
}): Promise<Metadata> {
  const { publicId } = await params;
  const order = await getOrder(publicId);
  if (!order) return { title: "Pedido não encontrado" };
  return {
    title: order.title,
    description: `${order.title} em ${order.location.city}/${order.location.state}. ${order.description.slice(0, 140)}`,
    alternates: { canonical: `/pedido/${publicId}` },
    openGraph: { title: `${order.title} | Savoir Link`, type: "article" },
  };
}

export default async function PublicOrderPage({
  params,
}: {
  params: Promise<{ publicId: string }>;
}) {
  const { publicId } = await params;
  const order = await getOrder(publicId);
  if (!order) notFound();

  const isActive = order.status === "ACTIVE";

  return (
    <PublicLayout>
      <JsonLd
        data={orderSchema({
          title: order.title,
          description: order.description,
          budget: order.budget,
          publicId: order.publicId,
          category: order.categories.map((c) => c.name).join(", "),
          city: order.location.city,
          state: order.location.state,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Pedidos", path: "/recentes" },
          { name: order.title, path: `/pedido/${order.publicId}` },
        ])}
      />
      <div className="mx-auto w-full max-w-2xl px-4 py-12 md:px-8">
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
            {!isActive && <Badge variant="error">Encerrado</Badge>}
          </div>
          <h2 className="mt-6 text-headline-sm text-on-surface">Descrição</h2>
          <p className="mt-2 whitespace-pre-line text-body-md text-on-surface-variant">
            {order.description}
          </p>
        </Card>

        <Card className="mt-6 text-center">
          <Lock className="mx-auto h-10 w-10 text-outline" />
          <h2 className="mt-3 text-headline-sm text-on-surface">
            É profissional? Entre em contato com este cliente
          </h2>
          <p className="mt-1 text-body-md text-on-surface-variant">
            Desbloqueie o contato com 1 crédito e feche negócio.
          </p>
          <div className="mt-4 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link href={`/app/leads/${order.publicId}`}>
              <Button size="lg">Desbloquear contato</Button>
            </Link>
            <Link href="/publicar">
              <Button variant="secondary" size="lg">
                Preciso deste serviço
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    </PublicLayout>
  );
}
