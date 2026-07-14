import { SITE_URL, escapeXml } from "~/lib/sitemap";

// Static pages sitemap - rarely changes
export const revalidate = 86400; // 24 hours in seconds

export async function GET() {
  const now = new Date().toISOString();

  const staticPages = [
    { url: SITE_URL, priority: 1.0, changefreq: "daily", images: [] },
    { url: `${SITE_URL}/publicar`, priority: 0.9, changefreq: "weekly", images: [] },
    { url: `${SITE_URL}/como-funciona`, priority: 0.8, changefreq: "monthly", images: [] },
    { url: `${SITE_URL}/precos`, priority: 0.8, changefreq: "monthly", images: [] },
    { url: `${SITE_URL}/categorias`, priority: 0.8, changefreq: "weekly", images: [] },
    { url: `${SITE_URL}/termos`, priority: 0.2, changefreq: "monthly", images: [] },
    { url: `${SITE_URL}/privacidade`, priority: 0.2, changefreq: "monthly", images: [] },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${staticPages
  .map((page) => {
    const imageTags = page.images
      .map(
        (img) => `    <image:image>
      <image:loc>${escapeXml(img)}</image:loc>
    </image:image>`,
      )
      .join("\n");

    return `  <url>
    <loc>${escapeXml(page.url)}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>${imageTags ? `\n${imageTags}` : ""}
  </url>`;
  })
  .join("\n")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
