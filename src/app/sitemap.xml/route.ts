// Sitemap INDEX file that points to individual sitemaps.
// Follows Google's Sitemap Index specification for large websites.
// https://developers.google.com/search/docs/crawling-indexing/sitemaps/large-sitemaps

const SITE_URL = process.env.APP_URL ?? "http://localhost:3000";

// Revalidate sitemap index every 1 hour
export const revalidate = 3600;

export async function GET() {
  const now = new Date().toISOString();

  // List of all sub-sitemaps
  const sitemaps = [
    { loc: `${SITE_URL}/sitemap/static`, lastmod: now },
    { loc: `${SITE_URL}/sitemap/orders`, lastmod: now },
    { loc: `${SITE_URL}/sitemap/blog`, lastmod: now },
  ];

  const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemaps
  .map(
    (sitemap) => `  <sitemap>
    <loc>${sitemap.loc}</loc>
    <lastmod>${sitemap.lastmod}</lastmod>
  </sitemap>`,
  )
  .join("\n")}
</sitemapindex>`;

  return new Response(sitemapIndex, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
