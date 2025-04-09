import Img from "@/components/Img";
import Typing from "@/components/Typing";

export default function Home() {
  return (
    <>
      {/* 제목 */}
      <h1 className="fixed top-4 left-4 w-full px-4 text-[#070707] text-[110px] tracking-wider">
        <span className="sr-only">안녕하세요. 백승연입니다.</span>
        <Typing sequence={["Hello.\nI am Seungyeon"]} />
      </h1>

      {/* 하단 화살표 */}
      <Img
        src={"/images/down_arrow.svg"}
        alt="아래로 스크롤을 해주세요."
        width={40}
        height={40}
        className="fixed bottom-4 left-1/2 -translate-x-1/2 animate-bounce"
      />
    </>
  );
}
