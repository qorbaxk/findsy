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
  const years = Math.ceil(diffInMonths / 12);
  return years;
};
const yearsExperience = getYearsExperience();

export default function Contact() {
  return (
    <>
      {/* 구조화된 데이터 */}
      <ContactStructuredData />
      <main role="main" aria-label="연락처 정보">
        <div className="p-4 md:p-16 h-screen pt-16 md:pt-16">
          <article className="opacity-0 animate-fade-in transition-opacity duration-700 bg-white/60 border-[1px] border-solid border-white/80 rounded-[11px] p-2 md:p-4 h-full flex flex-col relative overflow-hidden">
            {/* 하위 제목 */}
            <header>
              <h2 className="text-2xl md:text-4xl border-b-[1px] border-b-solid text-center pb-2 font-Mediasansextended">
                Contact
              </h2>
            </header>
            {/* 하단 소개 내용 */}
            <section className="px-4 md:px-[300px] py-8 md:py-16 z-10">
              <div className="flex flex-col text-xs md:text-sm">
                <p>안녕하세요. {yearsExperience}년차 프론트엔드 개발자 백승연 입니다.</p>
                <p>
                  소프트웨어를 전공하고 SI회사에서 다양한 프로젝트를 경험하며 실무
                  역량을 탄탄하게 다져왔습니다.
                </p>
                <br />
                <p>
                  새로운 기술을 빠르게 습득하고, 문제의 본질을 정확히 파악해
                  해결하는 능력이 저의 강점입니다.
                </p>
                <p>
                  함께 일했던 동료들은 저의 문제 해결력과 실행력을 신뢰하며, 저는
                  이를 바탕으로 더 나은 서비스를 만들어가는 데 집중합니다.
                </p>
                <br />
                <p>저는 팀의 성장과 성공을 위해 필요한 개발자입니다.</p>
                <p className="underline underline-offset-2">
                  저와 함께, 더 나은 서비스를 만들어가보실래요?
                </p>
              </div>
              {/* 연락 버튼 */}
              <div className="pt-4 md:pt-8 flex flex-col gap-4 md:gap-8">
                {/* 메일 제안 */}
                <a
                  href="mailto:qorbaxk97@gmail.com"
                  className="bg-orange-500 hover:scale-[1.1] transition-all not-hover:animate-pulse  w-full block rounded-lg p-2 text-center cursor-pointer"
                  aria-label="이메일로 제안 보내기"
                >
                  제안 보내기
                </a>
             
              </div>
            </section>
            <aside className="absolute bottom-0 right-0">
              <Img
                src={"/images/me.webp"}
                alt="프론트엔드 개발자 백승연의 프로필 사진"
                width={400}
                height={400}
                sizes="(max-width: 768px) 200px, 400px"
                className="w-[200px] h-[200px] md:w-[400px] md:h-[400px]"
              />
            </aside>
          </article>
        </div>
      </main>
    </>
  );
}
