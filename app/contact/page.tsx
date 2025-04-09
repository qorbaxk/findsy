import Img from "@/components/Img";

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
    <div className="p-16 h-screen">
      <div className="opacity-0 animate-fade-in transition-opacity duration-700 bg-white/60 border-[1px] border-solid border-white/80 rounded-[11px] p-4 h-full flex flex-col relative overflow-hidden">
        {/* 하위 제목 */}
        <h2 className="text-4xl border-b-[1px] border-b-solid text-center pb-2 font-Mediasansextended">
          Contact
        </h2>
        {/* 하단 소개 내용 */}
        <div className="px-[300px] py-16 z-10">
          <div className="flex flex-col text-sm">
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
          <div className="pt-8 flex flex-col gap-8">
            {/* 메일 제안 */}
            <a
              href="mailto:qorbaxk97@gmail.com"
              className="bg-orange-500 hover:scale-[1.1] transition-all not-hover:animate-pulse  w-full block rounded-lg p-2 text-center cursor-pointer"
            >
              제안 보내기
            </a>
         
          </div>
        </div>
        <div className="absolute bottom-0 right-0">
          <Img
            src={"/images/me.png"}
            alt="제 사진 입니다."
            width={400}
            height={400}
          />
        </div>
      </div>
    </div>
  );
}
