interface ITag {
  items: string[];
}

/**
 * 태그 (#) 을 나타낼 컴포넌트
 * @param {string[]} items - 태그 표시할 텍스트 리스트
 */
const Tag = ({ items }: ITag) => {
  return (
    <div className="flex flex-row flex-wrap gap-2">
      {items.map((item, index) => (
        <span
          className="bg-orange-100 rounded-lg px-2 py-1 text-sm"
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
