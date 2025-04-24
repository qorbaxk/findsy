import Typing from "@/components/Typing";

export default function Home() {
  return (
    <>
      {/* 제목 */}
      <h1 className="fixed top-4 left-4 w-full px-4 text-[#070707] text-[110px] tracking-wider">
        <span className="sr-only">안녕하세요. 프론트엔드 개발자 백승연 입니다.</span>
        <Typing sequence={["Hello.\nI am Seungyeon"]} />
      </h1>
    </>
  );
}
