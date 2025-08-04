export const dynamic = 'force-static';

export async function GET() {
  const body = `User-agent: *
Allow: /

# 이미지 크롤링 허용
Allow: /images/
Allow: /public/images/

# 정적 자산 크롤링 허용
Allow: /fonts/
Allow: /videos/
Allow: /audios/

# 사이트맵 위치
Sitemap: https://qorbaxk.github.io/findsy/sitemap.xml

# 크롤링 지연 (선택사항)
Crawl-delay: 1

# 특정 파일 형식 크롤링 허용
Allow: /*.css$
Allow: /*.js$
Allow: /*.png$
Allow: /*.jpg$
Allow: /*.jpeg$
Allow: /*.gif$
Allow: /*.svg$
Allow: /*.webp$
Allow: /*.mp4$
Allow: /*.mp3$`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}