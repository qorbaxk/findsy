import type { Metadata } from "next";
import "./globals.css";
import MusicPlayerWrapper from "@/components/MusicPlayerWrapper";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  metadataBase:new URL("https://qorbaxk.github.io/findsy/"),
  title:
    "프론트엔드 개발자 백승연의 포트폴리오 | Frontend Developer Seungyeon Baek",
  description:
    "프론트엔드 개발자 백승연의 포트폴리오 사이트입니다. Portfolio site of frontend developer Seungyeon Baek.",
  keywords: [
    "프론트엔드",
    "프론트엔드 개발자",
    "웹 개발자",
    "웹 포트폴리오",
    "프론트엔드 포트폴리오",
    "백승연",
    "Seungyeon Baek",
    "React 개발자",
    "Next.js 개발자",
    "타입스크립트",
    "자바스크립트",
    "프로그래머",
    "UI 개발",
    "UX 디자인",
    "웹 접근성",
    "웹 성능 최적화",
    "프론트엔드 인터뷰",
    "프론트엔드 기술",
    "웹 컴포넌트",
    "반응형 웹",
    "웹 퍼블리싱",
    "Tailwind CSS",
    "React Query",
    "프론트엔드 커리어",
    "개발자 이력서",
    "개발자 포트폴리오 예시",
    "개발자 경력",
    "기술 블로그",
    "개발 블로그",
    "프론트엔드 공부",
    "웹 개발 공부",
    "코딩 테스트",
    "웹 프로젝트",
    "프론트엔드 프로젝트",
    "컴포넌트 개발",
    "웹 UI 구현",
    "웹앱 개발",
    "프론트엔드 경험",
    "포트폴리오 사이트",
    "개발자 소개",
    "frontend",
    "frontend developer",
    "web developer",
    "web portfolio",
    "react developer",
    "next.js developer",
    "typescript developer",
    "javascript portfolio",
    "developer resume",
    "developer profile",
    "coding portfolio",
    "ui developer",
    "ux engineer",
    "web accessibility",
    "responsive design",
    "frontend projects",
    "component based development",
    "web UI implementation",
    "frontend experience",
    "software engineer portfolio"
  ],
  robots:"index, follow",
  authors: [{ name: "백승연" }],
  openGraph: {
    title:
      "프론트엔드 개발자 백승연의 포트폴리오 | Frontend Developer Seungyeon Baek",
    description:
      "프론트엔드 개발자 백승연의 포트폴리오 사이트입니다. Portfolio site of frontend developer Seungyeon Baek.",
    url:"https://qorbaxk.github.io/findsy/",
    images: process.env.NODE_ENV === "production" ? "/findsy/images/thumbnail.webp" : "/images/thumbnail.webp",
    siteName:"find seungyeon",
    type: "website",
    locale: "ko_KR",
  },
  alternates:{
    canonical:"https://qorbaxk.github.io/findsy/",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="relative w-full min-h-screen overflow-hidden">
        {/* 자식 페이지들 */}
        <section className="relative z-0">
          {/* 네비게이션 */}
          <Navbar />
          {children}
        </section>

        {/* 전역 뮤직플레이어 */}
        <MusicPlayerWrapper />

         {/* 고정된 배경 비디오 */}
         <video
          loop
          autoPlay
          muted
          playsInline
          className="fixed top-0 left-0 w-full h-full object-cover -z-10"
          aria-hidden
        >
          <source
            src={
              process.env.NODE_ENV === "production"
                ? "/findsy/videos/background.mp4"
                : "/videos/background.mp4"
            }
            type="video/mp4"
          />
        </video>
      </body>
    </html>
  );
}
