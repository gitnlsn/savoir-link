import { blogPosts } from "~/data/blog-posts";
import { SITE_URL, escapeXml } from "~/lib/sitemap";

// Static generation - blog posts don't change frequently
export const revalidate = 86400; // 24 hours in seconds

export async function GET() {
  try {
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${escapeXml(`${SITE_URL}/blog`)}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
    <image:image>
      <image:loc>${escapeXml(`${SITE_URL}/blog/opengraph-image`)}</image:loc>
    </image:image>
  </url>
${blogPosts
  .map((post) => {
    const priority = post.featured ? 0.8 : 0.7;
    const lastmod = new Date(post.modifiedDate ?? post.date).toISOString();
    const image = post.image
      ? `${SITE_URL}${post.image}`
      : `${SITE_URL}/blog/opengraph-image`;
    return `  <url>
    <loc>${escapeXml(`${SITE_URL}/blog/${post.slug}`)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${priority}</priority>
    <image:image>
      <image:loc>${escapeXml(image)}</image:loc>
    </image:image>
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
  } catch (error) {
    console.error("❌ Error generating blog sitemap:", error);

    const errorSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${SITE_URL}/blog</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>`;

    return new Response(errorSitemap, {
      headers: { "Content-Type": "application/xml" },
    });
  }
}
