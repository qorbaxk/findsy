import type { Metadata } from "next";
import Img from "@/components/Img";
import ContactStructuredData from "@/components/ContactStructuredData";

export const metadata: Metadata = {
  title: "연락처 | 프론트엔드 개발자 백승연 포트폴리오",
  description: "프론트엔드 개발자 백승연과 연락하세요. React, Next.js, TypeScript 전문 개발자로 다양한 프로젝트 경험을 보유하고 있습니다.",
  keywords: [
    "프론트엔드 개발자 연락처",
    "백승연 연락처",
    "웹 개발자 채용",
    "React 개발자 채용",
    "Next.js 개발자 채용",
    "프론트엔드 개발자 구인",
    "개발자 포트폴리오 연락처"
  ],
  openGraph: {
    title: "연락처 | 프론트엔드 개발자 백승연 포트폴리오",
    description: "프론트엔드 개발자 백승연과 연락하세요. React, Next.js, TypeScript 전문 개발자로 다양한 프로젝트 경험을 보유하고 있습니다.",
    type: "website",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: "연락처 | 프론트엔드 개발자 백승연 포트폴리오",
    description: "프론트엔드 개발자 백승연과 연락하세요. React, Next.js, TypeScript 전문 개발자로 다양한 프로젝트 경험을 보유하고 있습니다.",
  },
};

/**
 * 경험 햇수 구하는 함수
 */
const getYearsExperience = () => {
  // 일 시작 날짜
  const startDate = new Date("2023-06-28");
  const today = new Date();
  const diffInMonths =
    (today.getFullYear() - startDate.getFullYear()) * 12 +
    (today.getMonth() - startDate.getMonth());
  const years = Math.floor(diffInMonths / 12);
  return years;
};
const yearsExperience = getYearsExperience();

export default function Contact() {
  return (
    <>
      {/* 구조화된 데이터 */}
      <ContactStructuredData />
      <main role="main" aria-label="연락처 정보" className="pt-16 sm:pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-16">
          {/* 페이지 헤더 */}
          <header className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-Mediasansextended tracking-wider mb-4 sm:mb-6">
              Contact
            </h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
              당신의 팀에 필요한 개발자가 여기 있습니다.
            </p>
          </header>

          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 items-center">
              {/* 소개 내용 */}
              <div className="lg:col-span-2 space-y-4 sm:space-y-6">
                <div className="mb-4 sm:mb-6">
                  <h2 className="text-xl sm:text-2xl font-Mediasansextended tracking-wide mb-2 sm:mb-3 text-gray-900">
                    개발자 백승연
                  </h2>
                  <p className="text-lg sm:text-xl font-medium text-gray-800">
                    {yearsExperience}년차 개발자, 하지만 성장 속도는 5년차급입니다.
                  </p>
                </div>
                
                <div className="space-y-3 sm:space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base">
                  <p>
                    <strong>React, Next.js, TypeScript</strong>로 현대적인 웹을 만들고, 
                    <strong> AI 기반 서비스</strong>까지 개발해왔습니다.
                  </p>
                  <p>
                    문제를 정확히 파악하고 <strong>빠르게 해결</strong>하는 것이 저의 강점입니다. 
                    팀원들은 제 실행력을 신뢰합니다.
                  </p>
                  <p>
                    단순한 기능 구현이 아닌, <strong>사용자 경험을 개선</strong>하는 개발을 합니다. 
                    성능 최적화, 접근성, 코드 품질까지 고려합니다.
                  </p>
                </div>
                
                <div className="pt-4 sm:pt-6 border-t border-gray-200">
                  <p className="font-medium text-base sm:text-lg text-gray-900 mb-4 sm:mb-6">
                    당신의 프로젝트가 성공하도록, 함께 만들어보시겠어요?
                  </p>
                  
                  {/* 연락 버튼 */}
                  <a
                    href="mailto:qorbaxk97@gmail.com"
                    className="group relative inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-gray-800 to-gray-900 text-white font-medium tracking-wide rounded-lg overflow-hidden transition-all duration-500 ease-out hover:from-gray-900 hover:to-gray-800 hover:scale-[1.02] hover:shadow-xl text-sm sm:text-base"
                    aria-label="이메일로 연락하기"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      함께 일하고 싶어요
                      <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </a>
                </div>
              </div>

              {/* 프로필 이미지 */}
              <div className="lg:col-span-1 flex justify-center lg:justify-end">
                <div className="relative w-48 h-60 sm:w-56 sm:h-72 lg:w-64 lg:h-80 group">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-400/30 to-red-500/30 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
                  <div className="relative w-full h-full">
                    <Img
                      src={"/images/me2.webp"}
                      alt="프론트엔드 개발자 백승연의 프로필 사진"
                      fill
                      className="object-cover object-top rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-500"
                      sizes="(max-width: 640px) 192px, (max-width: 1024px) 224px, 256px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
