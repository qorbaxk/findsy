import type { Metadata } from "next";
import "./globals.css";
import MusicPlayerWrapper from "@/components/MusicPlayerWrapper";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title:
    "프론트엔드 개발자 백승연의 포트폴리오 | Frontend Developer Seungyeon Baek",
  description:
    "프론트엔드 개발자 백승연의 포트폴리오 사이트입니다. Portfolio site of frontend developer Seungyeon Baek.",
  keywords: [
    "프론트엔드",
    "개발자",
    "백승연",
    "포트폴리오",
    "웹 개발",
    "Frontend",
    "Frontend Developer",
    "Seungyeon Baek",
    "Portfolio",
    "Web Development",
  ],
  authors: [{ name: "백승연" }],
  openGraph: {
    title:
      "프론트엔드 개발자 백승연의 포트폴리오 | Frontend Developer Seungyeon Baek",
    description:
      "프론트엔드 개발자 백승연의 포트폴리오 사이트입니다. Portfolio site of frontend developer Seungyeon Baek.",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="relative w-full min-h-screen overflow-hidden">
        {/* 고정된 배경 비디오 */}
        <video
          loop
          autoPlay
          muted
          playsInline
          className="fixed top-0 left-0 w-full h-full object-cover -z-10"
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

        {/* 자식 페이지들 */}
        <section className="relative z-0">
          {/* 네비게이션 */}
          <Navbar />
          {children}
        </section>

        {/* 전역 뮤직플레이어 */}
        <MusicPlayerWrapper />
      </body>
    </html>
  );
}
