import { db } from "~/server/db";
import { SITE_URL, escapeXml } from "~/lib/sitemap";

// Active orders (pedidos) sitemap - refreshed hourly as orders come and go
export const revalidate = 3600; // 1 hour in seconds

export async function GET() {
  const now = new Date().toISOString();

  try {
    const orders = await db.order.findMany({
      where: { status: "ACTIVE", expiresAt: { gt: new Date() } },
      select: { publicId: true, updatedAt: true },
      orderBy: { publishedAt: "desc" },
      take: 5000,
    });

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${orders
  .map(
    (o) => `  <url>
    <loc>${escapeXml(`${SITE_URL}/pedido/${o.publicId}`)}</loc>
    <lastmod>${o.updatedAt.toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.6</priority>
  </url>`,
  )
  .join("\n")}
</urlset>`;

    return new Response(sitemap, {
      headers: {
        "Content-Type": "application/xml",
        "Cache-Control": "public, max-age=3600, s-maxage=3600",
      },
    });
  } catch (error) {
    console.error("❌ Error generating orders sitemap:", error);

    const errorSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
</urlset>`;

    return new Response(errorSitemap, {
      headers: { "Content-Type": "application/xml" },
    });
  }
}
