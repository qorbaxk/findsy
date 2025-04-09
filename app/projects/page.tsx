import Slider from "@/components/Slider";
import ProjectNode from "./_components/ProjectNode";

export default function Projects() {
  return (
    <div className="p-16 h-screen">
      <div className="opacity-0 animate-fade-in transition-opacity duration-700 bg-white/60 border-[1px] border-solid border-white/80 rounded-[11px] p-4 h-full flex flex-col">
        {/* 하위 제목 */}
        <h2 className="text-4xl border-b-[1px] border-b-solid text-center pb-2 font-Mediasansextended">
          Projects
        </h2>
        {/* 나열할 프로젝트 */}
        <Slider items={PROJECTLIST} />
      </div>
    </div>
  );
}

// 넘겨줄 프로젝트 리스트
const PROJECTLIST = [
  // 1. 강북삼성병원
  <ProjectNode
    key={`강북삼성병원 프로젝트`}
    title={"강북삼성병원 웹예약 시스템"}
    detailTitle="차세대 건강검진 예약 시스템"
    startAt="2024.06"
    endAt="2025.03"
    img={{
      src: "/images/projects/kbsmc.png",
      alt: "강북삼성병원 프로젝트 이미지",
    }}
    tags={[
      "강북삼성병원",
      "삼성SDS",
      "건강검진",
      "수진자 타입 별 다른 경로 제공",
      "SSR",
      "암호화 및 복호화 처리",
      "내부망 개발",
      "Next.js 14",
      "React",
      "Typescript",
      "React-Query",
      "React-Hook-Form",
      "TailwindCSS",
      "MSW(MockServiceWorker)",
      "공단 Open API",
      "삼성병원 OCS",
      "SSO",
      "카카오톡 알림톡",
      "모바일 웹 및 관리자단 개발",
      "B2B",
      "B2C",
    ]}
    description={
      <div className="flex flex-col gap-4">
        {/* 프로젝트 소개 */}
        <div className="bg-yellow-50 rounded-lg py-2 px-4 flex flex-col gap-1">
          <p className="font-medium text-xl">📎 프로젝트 소개</p>
          <p className="text-md flex flex-col">
            <span>
              기존에 유선 전화로만 가능했던 건강검진 예약 시스템을{" "}
              <b>웹 기반으로 전환</b>하여, 수진자가 직접 검진 일정을 예약할 수
              있는 <b>셀프 예약 서비스</b>를 개발했습니다. 해당 프로젝트는{" "}
              <b>삼성 계열사 및 협력사 임직원 대상의 B2B 시스템</b>과{" "}
              <b>국가 건강검진 대상자의 B2C 시스템</b>을 모두 포함하며, 이를
              관리하기 위한 <b>백오피스&#40;관리도구&#41;</b> 개발도
              병행하였습니다.
            </span>
            <br />
            <span className="font-medium">✤ 투입 인력 및 협업</span>
            <span>
              프론트엔드 2명, 백엔드 1명으로 구성된 팀에 더해, 삼성SDS 소속
              개발자들과의 <b>외부 협업</b>을 통해 병원 OCS 시스템
              연동&#40;예약/문진/결과 등&#41;을 위한 API 개발이 병행되었습니다.
              사내 인력이 아닌 <b>외부 협력 개발자들과의 소통과 업무 분담</b>을
              통해
              <b>협업 능력과 커뮤니케이션 스킬</b>을 크게 향상시킬 수
              있었습니다.
            </span>
            <br />
            <span className="font-medium">✤ 기술스택</span>
            <span>• Frontend: Next.js 14, React, Typescript</span>
            <span>• 상태 관리 및 비동기 처리: React-Query, Recoil</span>
            <span>
              • 개발 생산성 향상: MSW(Mock Service Worker)를 활용하여 API
              Mocking → 백엔드 API 지연 상황에서도 핵심 로직을 사전에 구현
            </span>
          </p>
        </div>

        {/* 문제 해결 경험 */}
        <div className="bg-yellow-50 rounded-lg py-2 px-4 flex flex-col gap-1">
          <p className="font-medium text-xl">🔥 문제 해결 경험</p>
          <p className="text-md flex flex-col">
            <span>
              해당 프로젝트는 <b>내부망 환경에서의 개발</b>이 처음이었기에, 외부
              라이브러리 설치조차 <b>방화벽 등록을 필요</b>로 하는 등 높은 보안
              제약 속에서 개발을 진행해야 했습니다.
            </span>
            <br />
            <span>
              (1) 사용자 인증 이후, ‘등록번호/미등록번호’를 기반으로 예약 및
              개인 정보 등 다양한 데이터를 불러오게 되며, 이 데이터는{" "}
              <b>전 페이지에서 활용되는 핵심 정보</b>입니다.
            </span>
            <span>
              (2) 초기에는 세션스토리지를 통해 데이터를 유지했으나,{" "}
              <b>보안 심사 대응과 데이터 신뢰성 확보</b>를 위해 로직 방향을
              수정해야 했습니다.
            </span>
            <span>
              (3) React-Query의 <b>Prefetching 을 통한 캐싱 기능을 활용</b>,
              수진자 데이터를 캐시하여 전역에서 효율적으로 접근할 수 있도록
              변경하였습니다.
            </span>
            <span>
              (4) 직접 개발한 useTarget() 커스텀 Hook을 통해{" "}
              <b>수진자 정보 전역 공유</b> 로직을 구현하였고, B2B, B2C 모두 같은
              로직을 사용하도록 변경하여 리팩토링을 진행하였습니다.
            </span>
            <span>
              (5) (3)과 같이, <b>SSR을 도입하여 초기 로딩 속도 개선</b>을 통해
              방대한 정보도 빠르게 렌더링되도록 UX 향상 시켰습니다.
            </span>
            <br />
            <span>
              이 경험을 통해, 보안성과 사용자 경험(UX)을 모두 고려한 아키텍처
              전환의 중요성을 체감했고, 기술 선택에 있어 단기 편의보다는 장기
              안정성을 우선 고려하는 판단력을 키울 수 있었습니다.
            </span>
          </p>
        </div>

        {/* 성과 및 결과 */}
        <div className="bg-yellow-50 rounded-lg py-2 px-4 flex flex-col gap-1">
          <p className="font-medium text-xl">✨ 성과 및 결과</p>
          <p className="text-md flex flex-col">
            <span>
              총 1년 가까이 프로젝트에 투입되었으며, 비록 퇴사로 인해 완전한
              마무리는 짓지 못했지만, 대규모 기업 환경에서의 개발 프로세스와
              협업 문화를 깊이 체험할 수 있었습니다.
            </span>
            <br />
            <span>
              • 매주 <b>주간 스크럼을 통한 애자일 개발 방식</b> 적용
            </span>
            <span>• 병원 도메인의 복잡한 비즈니스 로직을 파악하고 구현</span>
            <span>
              • 협력사의 API 제공 지연 시,{" "}
              <b>직접 Mock API를 제작하고 오류를 검출</b>하여 백엔드 팀에 피드백
            </span>
            <span>
              • 프로젝트 내 3개의 챕터 중 <b>‘예방건진 B2C’</b> 파트의 개발
              전반을 단독으로 완수
            </span>
            <span>
              • 수진자의 선택에 따라{" "}
              <b>
                검진 장소/날짜/시간 정보를 저장 및 전송하는 핵심 예약 로직 구현
              </b>
            </span>
            <span>
              • 실제 예약 플로우를 설계하며 다양한 예외 처리와 데이터 유효성
              검증 로직 구현
            </span>
            <br />
            <b>
              복잡한 의료 예약 시스템의 흐름을 처음부터 끝까지 구현하며, 단순 UI
              구현을 넘어 “서비스의 흐름과 구조를 설계하는 개발자”로 성장할 수
              있는 계기가 되었습니다.
            </b>
          </p>
        </div>
      </div>
    }
  />,
  // 2. 블랙뱃지
  <ProjectNode
    key={`블랙뱃지 프로젝트`}
    title={"블랙뱃지 CRM"}
    detailTitle="결혼정보회사 회원 정보 관리 시스템"
    startAt="2024.03"
    endAt="2024.06"
    img={{
      src: "/images/projects/blackbadge.png",
      alt: "블랙뱃지 프로젝트 이미지",
    }}
    tags={[]}
    description=""
  />,
];
