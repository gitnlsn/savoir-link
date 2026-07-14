import { db } from "~/server/db";
import { SITE_URL, escapeXml } from "~/lib/sitemap";

// Category pages sitemap
export const revalidate = 86400; // 24 hours in seconds

export async function GET() {
  const now = new Date().toISOString();

  try {
    const categories = await db.category.findMany({ select: { slug: true } });

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${categories
  .map(
    (c) => `  <url>
    <loc>${escapeXml(`${SITE_URL}/categoria/${c.slug}`)}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>`,
  )
  .join("\n")}
</urlset>`;

    return new Response(sitemap, {
      headers: {
        "Content-Type": "application/xml",
        "Cache-Control": "public, max-age=86400, s-maxage=86400",
      },
    });
  } catch (error) {
    console.error("❌ Error generating categories sitemap:", error);

    const errorSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${SITE_URL}/categorias</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>`;

    return new Response(errorSitemap, {
      headers: { "Content-Type": "application/xml" },
    });
  }
}
