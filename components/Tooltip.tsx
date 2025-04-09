import { ReactNode } from "react";

interface ITooltip {
  text: string;
  children: ReactNode;
}

/**
 * 설명을 위한 툴팁 컴포넌트 
 * @param {string} text - 툴팁에 적을 문구
 * @param {ReactNode} children - 툴팁이 가르키는 대상노드
 */
const Tooltip = ({ text, children }: ITooltip) => {
  return (
    <div className="relative group inline-block">
      {/* 노드 */}
      {children}
      {/* 툴팁 */}
      <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black text-white text-xs rounded px-2 py-1 pointer-events-none z-50 whitespace-nowrap before:content-[''] before:absolute before:top-full before:left-1/2 before:-translate-x-1/2 before:border-[6px] before:border-transparent before:border-t-black">
        {/* 작성할 텍스트 */}
        {text}
      </div>
    </div>
  );
};
export default Tooltip;
