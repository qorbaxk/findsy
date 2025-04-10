/**
 * 프로젝트 스켈레톤
 */
const ProjectSkeleton = () => {
  return (
    <div className="w-full h-full px-[50px] py-4 grid grid-cols-3 gap-4 animate-pulse">
      {/* 왼쪽 이미지 영역 */}
      <div className="col-span-1 flex items-center justify-center relative shrink-0">
        <div className="w-full h-full bg-gray-200 rounded-md" />
      </div>

      {/* 오른쪽 콘텐츠 영역 */}
      <div className="col-span-2 flex flex-col gap-4 grow">
        <div>
          <div className="flex flex-row justify-between items-end pb-2">
            <div className="flex flex-col gap-2">
              <div className="w-32 h-4 bg-gray-200 rounded" />
              <div className="w-60 h-7 bg-gray-300 rounded" />
            </div>
            <div className="w-32 h-4 bg-gray-200 rounded" />
          </div>
          <div className="flex flex-wrap gap-2">
            <div className="w-20 h-5 bg-gray-200 rounded-full" />
            <div className="w-16 h-5 bg-gray-200 rounded-full" />
            <div className="w-24 h-5 bg-gray-200 rounded-full" />
            <div className="w-24 h-5 bg-gray-200 rounded-full" />
            <div className="w-20 h-5 bg-gray-200 rounded-full" />
          </div>
          <div className="flex flex-wrap gap-2 pt-2">
            <div className="w-20 h-5 bg-gray-200 rounded-full" />
            <div className="w-28 h-5 bg-gray-200 rounded-full" />
            <div className="w-24 h-5 bg-gray-200 rounded-full" />
            <div className="w-16 h-5 bg-gray-200 rounded-full" />
            <div className="w-24 h-5 bg-gray-200 rounded-full" />
          </div>
        </div>

        <div className="grow overflow-y-auto pr-2">
          <div className="w-full h-full bg-gray-100 rounded" />
        </div>
      </div>
    </div>
  );
};

export default ProjectSkeleton;
