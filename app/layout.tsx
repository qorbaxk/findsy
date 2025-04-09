import type { Metadata } from "next";
import "./globals.css";
import MusicPlayer from "@/components/MusicPlayer";

export const metadata: Metadata = {
  title:
    '프론트엔드 개발자 백승연의 포트폴리오 | Frontend Developer Seungyeon Baek',
  description:
    '프론트엔드 개발자 백승연의 포트폴리오 사이트입니다. Portfolio site of frontend developer Seungyeon Baek.',
  keywords: [
    '프론트엔드',
    '개발자',
    '백승연',
    '포트폴리오',
    '웹 개발',
    'Frontend',
    'Frontend Developer',
    'Seungyeon Baek',
    'Portfolio',
    'Web Development',
  ],
  authors: [{ name: '백승연' }],
  openGraph: {
    title:
      '프론트엔드 개발자 백승연의 포트폴리오 | Frontend Developer Seungyeon Baek',
    description:
      '프론트엔드 개발자 백승연의 포트폴리오 사이트입니다. Portfolio site of frontend developer Seungyeon Baek.',
    type: 'website',
    locale: 'ko_KR',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        {children}
        {/* 전역에서 사용 가능한 뮤직 플레이어 */}
        <MusicPlayer />
      </body>
    </html>
  );
}
