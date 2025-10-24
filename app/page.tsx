import type { Metadata } from "next";
import Typing from "@/components/Typing";
import Skills from "@/components/Skills";
import FeaturedProjects from "@/components/FeaturedProjects";

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
        <main role="main" aria-label="홈페이지" className="pt-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-16">
            {/* 메인 타이틀 섹션 */}
            <section className="text-center mb-16 sm:mb-24">
              <div className="h-48 sm:h-64 md:h-80 lg:h-96 flex items-center justify-center mb-6 sm:mb-8">
                <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-Mediasansextended tracking-wider">
                  <Typing sequence={["Hello.\nI am Seungyeon"]} />
                </h1>
              </div>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
                안녕하세요. 프론트엔드 개발자 백승연의 포트폴리오입니다.<br />
              </p>
            </section>

        {/* 소개 섹션 */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-16 mb-16 sm:mb-24">
          <div className="space-y-6 bg-white/20 backdrop-blur-sm rounded-2xl p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-Mediasansextended tracking-wide">About</h2>
            <div className="space-y-4 text-gray-800 leading-relaxed">
              <p>
                소프트웨어학과를 전공하고 다양한 웹서비스를 개발하며 실무 역량을 쌓아온 2년 차 개발자입니다. 
                프론트엔드를 중심으로 시작했지만, 서비스의 전체 구조를 이해하고 더 나은 사용 경험을 만들기 위해 
                백엔드까지 영역을 확장해왔습니다.
              </p>
              <p>
                React, Next.js, TypeScript를 기반으로 한 현대적인 웹 애플리케이션 개발에 특화되어 있으며, 
                성능 최적화와 접근성 개선에 관심이 많습니다. 새로운 기술을 빠르게 학습하고 
                실무에 적용하는 것을 즐기며, AI 기술과 클라우드 서비스에도 지속적으로 관심을 가지고 있습니다.
              </p>
              <p>
                단순한 기능 구현보다 &ldquo;어떻게 하면 사용자 경험을 개선할 수 있을까&rdquo;를 중심으로 개발 방향을 잡으며, 
                디자인 시스템 정립, API 호출 최적화, 상태관리 구조 개선 등 생산성과 효율을 높이는 작업을 중시합니다.
              </p>
              <p>
                짧은 기간 동안 다양한 프로젝트를 경험하며 결과 중심의 실행력과 협업 중심의 문제 해결력을 함께 키워왔습니다. 
                서비스의 품질은 결국 사용자의 만족도로 이어진다고 생각하기 때문에, 코드 한 줄을 작성할 때도 
                항상 사용자의 흐름과 경험을 먼저 고려합니다. 빠르게 구현하되, 이후 꾸준한 리팩토링을 통해 
                더 효율적이고 견고한 코드를 만들어가는 방식을 지향합니다.
              </p>
            </div>
          </div>
          
          <Skills 
            categories={[
              {
                title: "핵심 기술",
                skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Nest.js', 'Node.js', 'AWS Bedrock', 'Kotlin'],
                isHighlight: true
              },
              {
                title: "프론트엔드",
                skills: ['Tailwind CSS', 'React Query', 'Recoil', 'Zustand', 'Redux', 'React-hook-form', 'Styled-components']
              },
              {
                title: "백엔드 & 데이터베이스",
                skills: ['TypeORM', 'MariaDB', 'Spring Boot', 'Redis', 'Docker']
              },
              {
                title: "클라우드 & DevOps",
                skills: ['AWS S3', 'AWS RDS', 'Vercel', 'CloudFront', 'CloudWatch', 'EC2']
              },
              {
                title: "개발 도구",
                skills: ['Git', 'Jira', 'Figma', 'Storybook', 'Postman', 'Notion', 'Discord', 'Slack', 'MSW', 'Froala']
              }
            ]}
          />
        </section>

        {/* 프로젝트 미리보기 섹션 */}
        <FeaturedProjects 
          projects={[
            {
              id: "0",
              title: "셀핏 AI",
              description: "AI 상세설명 생성 에디터",
              icon: "AI",
              iconBg: true,
              technologies: ["React", "AWS Bedrock", "Nest.js"]
            },
            {
              id: "1",
              title: "강북삼성병원",
              description: "웹 기반 건강검진 예약 시스템",
              icon: "🏥",
              iconBg: false,
              technologies: ["Next.js", "TypeScript", "React Query"]
            },
            {
              id: "4",
              title: "(구)리즌마켓 / (현)두타온",
              description: "친환경 쇼핑 플랫폼",
              icon: "🌱",
              iconBg: false,
              technologies: ["React", "Redux", "Styled-components"]
            }
          ]}
        />
      </div>
    </main>
  );
}
