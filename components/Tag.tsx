interface ITag {
  items: string[];
}

/**
 * 태그 (#) 을 나타낼 컴포넌트
 * @param {string[]} items - 태그 표시할 텍스트 리스트
 */
const Tag = ({ items }: ITag) => {
  const handleTouchStart = (e: React.TouchEvent) => {
    e.stopPropagation();
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    e.stopPropagation();
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    e.stopPropagation();
  };

  return (
    <div 
      className="tag-container flex flex-row gap-2 overflow-x-auto md:flex-wrap md:overflow-x-visible scrollbar-hide"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {items.map((item, index) => (
        <span
          className="bg-orange-100 rounded-lg px-2 py-1 text-sm whitespace-nowrap flex-shrink-0"
          key={index}
        >
          {/* 띄어쓰기는 _ 로 대체 */}
          #{item.replace(/\s/g, "_")}
        </span>
      ))}
    </div>
  );
};
export default Tag;
