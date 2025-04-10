import Slider from "@/components/Slider";
import ProjectNode from "./_components/ProjectNode";

/**
 * 프로젝트 페이지
 */
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

/**
 * 업로드하는 프로젝트 목록
 */
const PROJECTLIST = [
  // 1. 강북삼성병원
  <ProjectNode
    key={`강북삼성병원 프로젝트`}
    title={"강북삼성병원 웹예약 시스템"}
    detailTitle="차세대 건강검진 예약 시스템"
    startAt="2024.06"
    endAt="2025.03"
    img={{
      src: "/images/projects/kbsmc.webp",
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
    detailTitle="결혼정보회사 회원 관리 시스템"
    startAt="2024.03"
    endAt="2024.06"
    img={{
      src: "/images/projects/blackbadge.webp",
      alt: "블랙뱃지 프로젝트 이미지",
    }}
    tags={[
      "블랙뱃지",
      "결혼정보회사",
      "CRM",
      "고객 관리",
      "멤버십 관리",
      "매출 및 일정 관리",
      "공통 컴포넌트 사용",
      "관리도구",
      "백오피스",
      "Next.js 14",
      "API Routes",
      "Typescript",
      "React-Hook-Form",
      "TailwindCSS",
      "TypeORM",
      "Maria DB",
      "SQL",
      "풀스택 개발",
      "카카오톡 알림톡",
      "모바일 카드 개발",
      "엑셀다운로드",
    ]}
    description={
      <div className="flex flex-col gap-4">
        {/* 프로젝트 소개 */}
        <div className="bg-yellow-50 rounded-lg py-2 px-4 flex flex-col gap-1">
          <p className="font-medium text-xl">📎 프로젝트 소개</p>
          <p className="text-md flex flex-col">
            <span>
              기존에 노션으로 관리하던 고객사 측에서 자기들 만의 시스템을 원하여
              매출, 일정, 고객, 매니저, 멤버십 등을 통합 관리하기 위한 CRM
              시스템을 개발했습니다.
            </span>
            <br />
            <span className="font-medium">✤ 투입 인력</span>
            <span>
              고객사 측에서 JS로 전체를 개발하기를 원하여, 요청에 따라 2명의
              프론트엔드 개발자가 풀스택 개발 전반을 직접 수행하였습니다.
            </span>
            <span>• DB 설계 및 TypeORM을 통한 엔티티 매핑</span>
            <span>• Next.js API Routes를 이용한 API 서버 구현</span>
            <br />
            <span className="font-medium">✤ 기술스택</span>
            <span>• Frontend: Next.js 14, React, Typescript</span>
            <span>• 상태 관리 및 비동기 처리: React-Query, Recoil</span>
            <span>• Backend: Next.js API Routes, TypeORM, Maria DB</span>
          </p>
        </div>

        {/* 문제 해결 경험 */}
        <div className="bg-yellow-50 rounded-lg py-2 px-4 flex flex-col gap-1">
          <p className="font-medium text-xl">🔥 문제 해결 경험</p>
          <p className="text-md flex flex-col">
            <span>
              <b>풀스택 개발은 이번 프로젝트가 처음이었습니다.</b>
              <br />
              게다가 고객사의{" "}
              <b>요구사항이 불명확하고 기획 문서가 부실한 상태</b>였기 때문에,
              기능 개발 이전에 먼저 흐름을 명확히 정리해야 했습니다. 저와 다른
              개발자 2명은 <b>직접 플로우차트를 작성하며 요구사항을 정리</b>
              하고, 이를 기반으로 <b>ERD를 설계</b>하며 전체 시스템 구조를
              구성했습니다.
              <br />
              <br />
              백엔드 구현에는 <b>TypeORM을 처음 도입</b>했는데, 사용자가 많지
              않은 라이브러리이다 보니{" "}
              <b>초기 환경 설정 과정에서 많은 시행착오를 겪었습니다.</b>{" "}
              초기에는 ORM을 제대로 활용하지 못해{" "}
              <b>직접 SQL로 쿼리를 짜고 테이블을 생성</b>하며 작업했으나,{" "}
              <b>
                다른 팀 과장님의 도움으로 TypeORM을 익힌 뒤에는 엔티티 기반
                설계를 수월하게 수행
              </b>
              할 수 있게 되었습니다.
              <br />
              <br />
              이후에는 <b>복잡한 테이블 간 조인 및 데이터 가공을 통해</b> 매출
              데이터를 계산하고 응답하는 등,{" "}
              <b>비즈니스 로직 중심의 API 구현까지 직접 수행</b>할 수
              있었습니다.
            </span>
          </p>
        </div>

        {/* 성과 및 결과 */}
        <div className="bg-yellow-50 rounded-lg py-2 px-4 flex flex-col gap-1">
          <p className="font-medium text-xl">✨ 성과 및 결과</p>
          <p className="text-md flex flex-col">
            <span>
              <b>기획, 설계, API 개발, 화면 구성까지</b> 모든 단계를 직접
              이해하고 주도적으로 처리함으로써,{" "}
              <b>프로젝트의 완성도를 높일 수 있었습니다.</b>
              <br />
              <br />
              특히, <b>인력이 제한된 상황</b>에서도 이전 프로젝트에서 제작한{" "}
              <b>&#39;공통 컴포넌트&#39;</b> 를 적극 활용하여{" "}
              <b>프론트엔드 UI를 빠르게 구축</b>할 수 있었고, 그 결과{" "}
              <b>일정 지연 없이 모든 요구사항을 성공적으로 마무리</b>할 수
              있었습니다.
              <br />
              <br />
              또한 <b>단위 테스트 및 통합 테스트에서도</b> 결함률이{" "}
              <b>사내 전체 프로젝트 중 가장 낮은 수준</b>을 기록하여{" "}
              <b>품질 면에서도 우수한 결과</b>를 도출하였습니다. 이는{" "}
              <b>고객사의 높은 만족도로 이어져 후속 프로젝트 계약까지 연결</b>
              되는 성과로 이어졌습니다.
              <br />
              <br />
              해당 프로젝트는{" "}
              <b>사내에서도 코드 품질과 구성 방식에서 좋은 본보기</b>가
              되었으며, <b>다른 개발자들이 참고하는 사례로 공유</b>되기도
              했습니다.
            </span>
          </p>
        </div>
      </div>
    }
  />,
  // 3. 공통 컴포넌트 작업
  <ProjectNode
    key={`공통 컴포넌트 프로젝트`}
    title={"공통 컴포넌트 자산화 프로젝트"}
    detailTitle="모든 프로젝트의 빠른 개발을 위한"
    startAt="2023.10"
    endAt="2024.02"
    img={{
      src: "/images/projects/commoncomponent.webp",
      alt: "공통 컴포넌트 프로젝트 이미지",
    }}
    tags={[
      "공통 컴포넌트",
      "자산화 프로젝트",
      "넥스트이노베이션",
      "관리도구",
      "백오피스",
      "UI 품질 개선",
      "Next.js 13",
      "Typescript",
      "React-Hook-Form",
      "TailwindCSS",
      "Storybook",
      "Library",
      "공통화",
      "개발 기간 단축",
      "지속적인 리팩토링",
    ]}
    description={
      <div className="flex flex-col gap-4">
        {/* 프로젝트 소개 */}
        <div className="bg-yellow-50 rounded-lg py-2 px-4 flex flex-col gap-1">
          <p className="font-medium text-xl">📎 프로젝트 소개</p>
          <p className="text-md flex flex-col">
            <span>
              앞으로 진행될 다양한 프로젝트의 <b>백오피스 개발 기간을 단축</b>
              하고, <b>UI 품질의 일관성을 높이기 위해</b> 공통 컴포넌트 시스템을
              구축한 프로젝트입니다.
              <br />
              <br />
              이전 프로젝트들의 백오피스 코드를 면밀히 분석하여{" "}
              <b>반복적으로 사용되는 UI 패턴과 컴포넌트들을 선별</b>하고, 이들을
              공통화하여{" "}
              <b>데이터만 전달하면 바로 활용 가능한 수준의 컴포넌트</b>로
              개발하였습니다.
              <br />
              <br />
              특히, 공통 컴포넌트의 목적은 단순한 재사용을 넘어{" "}
              <b>
                비개발자도 쉽게 이해하고 사용할 수 있는 UI 요소를 제공하는 것
              </b>
              이었고, 이를 위해 <b>설계 단계에서부터 직관성과 유연성</b>을
              고려해 구조화하였습니다.
            </span>
            <br />
            <span className="font-medium">✤ 투입 인력</span>
            <span>
              <b>프론트엔드 개발자 4명이 투입</b>되어 기술 스택, 개발 방식,
              컴포넌트 기준 등을 정의하기 위해 수차례 회의를 진행하였고, 각자
              역할을 분담해 체계적으로 프로젝트를 운영했습니다.
            </span>
            <br />
            <span className="font-medium">✤ 기술스택</span>
            <span>
              • Next.js 13, React, Typescript, TailwindCSS, React-Hook-Form,
              useHook, <b>Storybook을 통한 컴포넌트 문서화 및 테스트</b>
            </span>
          </p>
        </div>

        {/* 문제 해결 경험 */}
        <div className="bg-yellow-50 rounded-lg py-2 px-4 flex flex-col gap-1">
          <p className="font-medium text-xl">🔥 문제 해결 경험</p>
          <p className="text-md flex flex-col">
            <span>
              <b>
                단순히 일회성으로 사용되는 컴포넌트가 아닌, 여러 프로젝트에
                재사용될 핵심 자산
              </b>
              을 만드는 일이었기에 초기 설계에 많은 고민이 필요했습니다.
              <br />
              <br />
              먼저, <b>스타일 도구의 기준을 정하기 위해</b> 프로젝트 참여자뿐만
              아니라 회사 내 전체 프론트엔드 개발자들과 회의를 진행했습니다.
              여러 의견을 조율한 끝에 <b>TailwindCSS를 스타일 도구로 채택</b>
              하였으며, 이 결정은 <b>유지보수성과 직관성을 중시한 결과</b>
              였습니다.
              <br />
              <br />
              입력값이 많은 관리도구의 특성상{" "}
              <b>유효성 검증을 체계적으로 처리할 수 있는 라이브러리</b>가
              필요했고, 이에 따라 <b>React-Hook-Form을 도입</b>했습니다. 해당
              라이브러리를 처음 접한 팀원들이 많았기 때문에,{" "}
              <b>
                내부 문서화와 주석 작성에 공을 들여 누구나 쉽게 이해하고 사용할
                수 있도록 정리
              </b>
              하였습니다.
              <br />
              <br />
              개발 초기에는 컴포넌트 자체 구현보다도,{" "}
              <b>
                이후 개발자들이 쉽게 활용할 수 있도록 문서화하고 유지보수 체계를
                만드는 것이 가장 큰 과제
              </b>
              였습니다. 이를 위해 <b>Storybook을 도입</b>해 모든 컴포넌트를
              시각적으로 정리하고 배포했으며, 이후{" "}
              <b>
                실제 사용 시 불편했던 부분들을 스스로 찾아 개선하고 리팩토링
              </b>
              을 반복했습니다.
              <br />
              <br />
              프로젝트 종료 이후에도 팀원 이탈로 인한 유지보수 공백이 생기자,
              회사의 지시 없이도{" "}
              <b>
                공통 컴포넌트를 사용하는 다른 프로젝트들에서 발견한 문제들을
                자발적으로 개선
              </b>
              하며 품질을 지속적으로 향상시켰습니다.
            </span>
          </p>
        </div>

        {/* 성과 및 결과 */}
        <div className="bg-yellow-50 rounded-lg py-2 px-4 flex flex-col gap-1">
          <p className="font-medium text-xl">✨ 성과 및 결과</p>
          <p className="text-md flex flex-col">
            <span>
              해당 프로젝트를 통해{" "}
              <b>여러 실무 프로젝트에서 즉시 활용 가능한 컴포넌트 자산</b>을
              마련함으로써, <b>개발 초기 단계의 시간과 리소스를 크게 절감</b>할
              수 있었습니다.
              <br />
              <br />
              실제로 공통 컴포넌트를 활용한 프로젝트들은{" "}
              <b>전체 개발 기간을 약 30% 이상 단축</b>할 수 있었고,{" "}
              <b>UI 일관성 및 유지보수 효율성 측면에서도 큰 효과</b>를 거둘 수
              있었습니다.
              <br />
              <br />
              프로젝트 종료 이후에도 다양한 개발자들이{" "}
              <b>직접 복사하여 사용할 만큼 활용도가 높았고</b>,{" "}
              <b>“잘 만들어졌다”, “정리가 잘 되어 있어 이해하기 쉽다”</b>는
              긍정적인 피드백을 꾸준히 받을 수 있었습니다.
              <br />
              <br />
              다만 아쉬운 점은{" "}
              <b>라이브러리로 완전히 패키징하여 배포하지 못한 것</b>이었지만,
              그럼에도 사내 여러 프로젝트에서{" "}
              <b>사실상의 표준 UI로 자리 잡게 되었고</b>, 회사 차원에서도{" "}
              <b>개발 생산성 향상 기여도를 인정받아 연봉 인상</b>이라는 긍정적인
              결과로 이어졌습니다.
            </span>
          </p>
        </div>
      </div>
    }
  />,
  // 4. 두산 리즌마켓
  <ProjectNode
    key={`두산 리즌마켓 프로젝트`}
    title={"리즌마켓"}
    detailTitle="친환경 쇼핑 플랫폼"
    startAt="2023.06"
    endAt="2023.10"
    img={{
      src: "/images/projects/rezn.webp",
      alt: "두산 리즌마켓 프로젝트 이미지",
    }}
    tags={[
      "두산",
      "리즌마켓",
      "리즌105",
      "쇼핑 플랫폼",
      "샵바이 API",
      "NHN Commerce",
      "rezn market",
      "Next.js 12",
      "React",
      "Redux",
      "styled-components",
      "백오피스",
      "첫 프로젝트",
    ]}
    description={
      <div className="flex flex-col gap-4">
        {/* 프로젝트 소개 */}
        <div className="bg-yellow-50 rounded-lg py-2 px-4 flex flex-col gap-1">
          <p className="font-medium text-xl">📎 프로젝트 소개</p>
          <p className="text-md flex flex-col">
            <span>
              <b>친환경 리마켓 플랫폼</b>인 리즌마켓은, 사용자가 중고 물품을
              전달하면 <b>검수 후 판매되는 재사용 쇼핑몰 서비스</b>입니다.
              <br />
              <br />
              해당 프로젝트는 <b>입사 후 처음 투입된 실무 프로젝트</b>로, 1차
              개발이 완료된 상태에서 <b>2차 고도화 개발부터 참여</b>하였습니다.{" "}
              <b>쇼핑몰 운영을 위한 백오피스 시스템 개발</b>을 전담하여
              맡았습니다.
              <br />
              <br />
              제가 구현한 주요 기능은{" "}
              <b>브랜드 관리, 물품 검수 관리, 커뮤니티 관리</b> 등으로, 운영자가
              리즌마켓의 상품 품질과 사용자 커뮤니티를 효율적으로 관리할 수
              있도록 기능을 개발하였습니다.
            </span>
            <br />
            <span className="font-medium">✤ 투입 인력</span>
            <span>
              총 <b>프론트엔드 4명, 백엔드 3명</b>이 투입된 프로젝트로, 백오피스
              영역은 <b>프론트엔드 2명이 기능을 나누어 개발</b>하였습니다.
              백오피스에는 회원 관리, 관리자 관리, 브랜드 및 검수 관리, 커뮤니티
              관리, 앱 푸시/스플래시 관리 기능이 포함되었습니다.
            </span>
            <br />
            <span className="font-medium">✤ 기술스택</span>
            <span>
              • Frontend: Next.js 12, React, Typescript →{" "}
              <b>Next.js를 처음 도입한 프로젝트로 pages 라우팅 구조 사용</b>
            </span>
            <span>• 상태관리: Redux</span>
            <span>• 스타일: styled-components</span>
          </p>
        </div>

        {/* 문제 해결 경험 */}
        <div className="bg-yellow-50 rounded-lg py-2 px-4 flex flex-col gap-1">
          <p className="font-medium text-xl">🔥 문제 해결 경험</p>
          <p className="text-md flex flex-col">
            <span>
              리즌마켓 프로젝트에서는{" "}
              <b>페이지 전환 없이 모든 기능을 모달에서 처리해야 하는 구조</b>
              였기 때문에,{" "}
              <b>모달 간의 상태 전달과 동기화가 가장 큰 기술적 도전 과제</b>
              였습니다.
              <br />
              <br />
              특히, <b>모달에서 선택한 값을 외부 컴포넌트로 전달하거나</b>,
              반대로{" "}
              <b>
                외부에서 선택한 데이터를 모달 내부로 다시 전달해야 하는 흐름
              </b>
              이 많았는데,{" "}
              <b>
                상태가 변한 이후에도 이전 값을 참조하거나 제대로 반영되지 않는
                문제
              </b>
              가 반복적으로 발생했습니다.
              <br />
              <br />
              당시에는 <b>
                경험 부족으로 인해 문제의 본질을 파악하지 못하고
              </b>{" "}
              오랜 시간 동안 시행착오를 반복했습니다. 이때 사수에게 조언을
              구했고, <b>전역 상태 관리로 해결이 가능하다</b>는 점을 배웠습니다.
              이후 <b>Redux를 활용해 상태를 전역으로 공유</b>하면서 문제를
              해결할 수 있었습니다.
              <br />
              <br />이 경험을 통해{" "}
              <b>모달에서의 상태 관리 흐름과 데이터 동기화의 중요성</b>을 명확히
              인식하게 되었고, 이를 기반으로{" "}
              <b>
                이후 공통 컴포넌트 프로젝트에서 useModal() 커스텀 훅을 직접 개발
              </b>
              하여 모달의 열림 상태 및 전달 데이터를 구조적으로 관리할 수 있도록
              개선하였습니다.
            </span>
          </p>
        </div>

        {/* 성과 및 결과 */}
        <div className="bg-yellow-50 rounded-lg py-2 px-4 flex flex-col gap-1">
          <p className="font-medium text-xl">✨ 성과 및 결과</p>
          <p className="text-md flex flex-col">
            <span>
              해당 프로젝트는 제가 참여한 모든 프로젝트 중{" "}
              <b>
                기획부터 개발, 오픈, 유지보수까지 전 과정을 경험한 유일한 사례
              </b>
              였습니다.
              <br />
              <br />
              <b>서비스 오픈 당일, 새벽 출근을 통해 에러 모니터링 및 대응</b>을
              진행했으며, <b>큰 이슈 없이 안정적으로 서비스가 런칭</b>
              되었습니다. 이후에도{" "}
              <b>사용자 피드백을 반영한 지속적인 유지보수와 개선</b>을 통해
              현재까지도 고객들이 실사용하는{" "}
              <b>친환경 쇼핑몰 플랫폼으로 안정적으로 운영</b>되고 있습니다.
              <br />
              <br />
              특히 제가 맡은{" "}
              <b>물품 검수 관리 기능은 플랫폼 핵심 기능 중 하나로</b>, 이 부분을
              주도적으로 개발하며{" "}
              <b>비즈니스 중심 로직을 직접 다뤘다는 점에서 의미 있는 성과</b>
              였습니다.
              <br />
              <br />
              입사 초기부터 이러한 규모의 프로젝트에 투입되어{" "}
              <b>실제 서비스 운영의 전 과정을 경험</b>할 수 있었던 점은, 이후
              프로젝트에서도 <b>현실적인 개발 감각과 안정적인 품질 관리 능력</b>
              을 기르는 데 큰 밑거름이 되었습니다.
            </span>
          </p>
        </div>
      </div>
    }
  />,
];
