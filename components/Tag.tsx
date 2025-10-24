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
          className="bg-gray-100 text-gray-700 rounded-full px-3 py-1 text-xs whitespace-nowrap flex-shrink-0 hover:bg-gray-200 transition-colors"
          key={index}
        >
          {item}
        </span>
      ))}
    </div>
  );
};
export default Tag;
