import Typing from "@/components/Typing";

export default function Home() {
  return (
    <>
      {/* 제목 */}
      <h1 className="fixed top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:top-4 md:left-4 md:transform-none md:translate-x-0 md:translate-y-0 w-full px-4 text-[#070707] text-[28px] md:text-[70px] lg:text-[110px] tracking-wider break-words overflow-hidden">
        <span className="sr-only">
          안녕하세요. 프론트엔드 개발자 백승연 입니다.
        </span>
        <Typing sequence={["Hello.\nI am Seungyeon"]} />
      </h1>
    </>
  );
}
