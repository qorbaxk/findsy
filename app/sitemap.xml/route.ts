export const dynamic = 'force-static';

export async function GET() {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>https://qorbaxk.github.io/findsy/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
    <image:image>
      <image:loc>https://qorbaxk.github.io/findsy/images/thumbnail.webp</image:loc>
      <image:title>프론트엔드 개발자 백승연의 포트폴리오</image:title>
      <image:caption>React, Next.js, TypeScript를 활용한 프론트엔드 개발자 백승연의 포트폴리오</image:caption>
    </image:image>
  </url>
  <url>
    <loc>https://qorbaxk.github.io/findsy/projects</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
    <image:image>
      <image:loc>https://qorbaxk.github.io/findsy/images/projects/kbsmc.webp</image:loc>
      <image:title>강북삼성병원 웹예약 시스템 프로젝트</image:title>
      <image:caption>강북삼성병원 차세대 건강검진 예약 시스템 개발 프로젝트</image:caption>
    </image:image>
    <image:image>
      <image:loc>https://qorbaxk.github.io/findsy/images/projects/blackbadge.webp</image:loc>
      <image:title>블랙뱃지 CRM 프로젝트</image:title>
      <image:caption>결혼정보회사 회원 관리 시스템 개발 프로젝트</image:caption>
    </image:image>
    <image:image>
      <image:loc>https://qorbaxk.github.io/findsy/images/projects/commoncomponent.webp</image:loc>
      <image:title>공통 컴포넌트 자산화 프로젝트</image:title>
      <image:caption>모든 프로젝트의 빠른 개발을 위한 공통 컴포넌트 시스템 구축</image:caption>
    </image:image>
    <image:image>
      <image:loc>https://qorbaxk.github.io/findsy/images/projects/rezn.webp</image:loc>
      <image:title>리즌마켓 프로젝트</image:title>
      <image:caption>친환경 쇼핑 플랫폼 리즌마켓 개발 프로젝트</image:caption>
    </image:image>
  </url>
  <url>
    <loc>https://qorbaxk.github.io/findsy/contact</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
    <image:image>
      <image:loc>https://qorbaxk.github.io/findsy/images/me.webp</image:loc>
      <image:title>프론트엔드 개발자 백승연</image:title>
      <image:caption>프론트엔드 개발자 백승연의 프로필 사진</image:caption>
    </image:image>
  </url>
</urlset>`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}