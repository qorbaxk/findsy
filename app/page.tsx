import type { Metadata } from "next";
import Typing from "@/components/Typing";

export const metadata: Metadata = {
  title: "프론트엔드 개발자 백승연의 포트폴리오 | Frontend Developer Seungyeon Baek",
  description: "프론트엔드 개발자 백승연의 포트폴리오 사이트입니다. React, Next.js, TypeScript를 활용한 웹 개발 경험을 소개합니다.",
  keywords: [
    "프론트엔드 개발자",
    "백승연",
    "포트폴리오",
    "React 개발자",
    "Next.js 개발자",
    "TypeScript 개발자",
    "웹 개발자",
    "프론트엔드 포트폴리오"
  ],
  openGraph: {
    title: "프론트엔드 개발자 백승연의 포트폴리오",
    description: "React, Next.js, TypeScript를 활용한 프론트엔드 개발자 백승연의 포트폴리오입니다.",
    type: "website",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: "프론트엔드 개발자 백승연의 포트폴리오",
    description: "React, Next.js, TypeScript를 활용한 프론트엔드 개발자 백승연의 포트폴리오입니다.",
  },
};

export default function Home() {
  return (
    <main role="main" aria-label="홈페이지">
      {/* 제목 */}
      <h1 className="fixed top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:top-4 md:left-4 md:transform-none md:translate-x-0 md:translate-y-0 w-full px-4 text-[#070707] text-[28px] md:text-[70px] lg:text-[110px] tracking-wider break-words overflow-hidden">
        <span className="sr-only">
          안녕하세요. 프론트엔드 개발자 백승연 입니다.
        </span>
        <Typing sequence={["Hello.\nI am Seungyeon"]} />
      </h1>
    </main>
  );
}
