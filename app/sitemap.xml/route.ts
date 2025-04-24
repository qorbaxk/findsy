export const dynamic = 'force-static';

export async function GET() {
  const body = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>https://qorbaxk.github.io/findsy/</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>yearly</changefreq>
        <priority>0.8</priority>
      </url>
      <url>
        <loc>https://qorbaxk.github.io/findsy/projects</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>1.0</priority>
      </url>
      <url>
        <loc>https://qorbaxk.github.io/findsy/contact</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>yearly</changefreq>
        <priority>0.5</priority>
      </url>
    </urlset>
  `.trim();

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}