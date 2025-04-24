export const dynamic = 'force-static';

export async function GET() {
  const body = `
    User-agent: *
    Allow: /

    Sitemap: https://qorbaxk.github.io/findsy/sitemap.xml
  `.trim();

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}