import type { MetadataRoute } from "next";

import { db } from "~/server/db";

const SITE_URL = process.env.APP_URL ?? "http://localhost:3000";

// Refresh hourly so newly published orders enter the sitemap.
export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPaths = [
    "",
    "/publicar",
    "/categorias",
    "/como-funciona",
    "/precos",
    "/termos",
    "/privacidade",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const [categories, orders] = await Promise.all([
    db.category.findMany({ select: { slug: true } }),
    db.order.findMany({
      where: { status: "ACTIVE", expiresAt: { gt: new Date() } },
      select: { publicId: true, updatedAt: true },
      orderBy: { publishedAt: "desc" },
      take: 5000,
    }),
  ]);

  const categoryPaths = categories.map((c) => ({
    url: `${SITE_URL}/categoria/${c.slug}`,
    changeFrequency: "daily" as const,
    priority: 0.8,
  }));

  const orderPaths = orders.map((o) => ({
    url: `${SITE_URL}/pedido/${o.publicId}`,
    lastModified: o.updatedAt,
    changeFrequency: "daily" as const,
    priority: 0.6,
  }));

  return [...staticPaths, ...categoryPaths, ...orderPaths];
}
