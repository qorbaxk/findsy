"use client";

import React, { ReactNode, useRef, useLayoutEffect } from "react";
import Img from "@/components/Img";
import Tag from "@/components/Tag";

/**
 * @param {string} src - 이미지 경로 위치
 * @param {string} alt - 이미지 설명
 */
interface IImg {
  src: string;
  alt: string;
}

interface IProjectNode {
  key: string;
  img: IImg[];
  title: string;
  detailTitle: string;
  startAt: string;
  endAt: string;
  tags: string[];
  description: ReactNode;
}

/**
 * 프로젝트 구성 컴포넌트
 * @param {string} key - 식별을 위한 고유 키
 * @param {IImg[]} img - 이미지 정보 배열
 * @param {string} title - 프로젝트 제목
 * @param {string} detailTitle - 프로젝트 상세 1줄 요약
 * @param {string} description - 프로젝트 설명
 * @param {string} startAt - 프로젝트 시작 기간
 * @param {string} endAt - 프로젝트 마감 기간
 * @param {string[]} tags - 태그리스트
 */
const ProjectNode = ({
  key,
  title,
  img,
  detailTitle,
  description,
  startAt,
  endAt,
  tags,
}: IProjectNode) => {
  const topRef = useRef<HTMLDivElement>(null);

  /**
   * 보고 있는 화면 사이즈에 맞춰서 높이 지정
   */
  useLayoutEffect(() => {
    if (topRef.current) {
      // const topHeight = topRef.current.offsetHeight;
      // 창크기 - 여백 및 패딩 - 작성된 상단 내용
      // const available = window.innerHeight - 257 - topHeight;
      // 필요시 사용할 수 있도록 주석 처리
      // setMaxHeight(available);
    }
  }, [topRef]);

  return (
    <article
      key={key}
      className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* 이미지 영역 */}
        <div className="relative bg-gray-50 p-8 flex flex-col gap-4">
          {img.map((imageItem, index) => (
            <div key={index} className="relative w-full h-48 lg:h-56 flex-1">
              <Img
                src={imageItem.src}
                alt={imageItem.alt}
                fill
                className="object-contain cursor-pointer hover:opacity-80 transition-opacity duration-200"
                sizes="(max-width:768px) 100vw, 50vw"
                onClick={() => window.open(imageItem.src, '_blank')}
              />
            </div>
          ))}
        </div>
        
        {/* 콘텐츠 영역 */}
        <div className="p-8 flex flex-col">
          <div className="mb-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <span className="text-sm text-gray-500 mb-2 block">{detailTitle}</span>
                <h3 className="text-2xl lg:text-3xl font-Mediasansextended tracking-wide mb-2">
                  {title}
                </h3>
                <span className="text-sm text-gray-500">
                  {startAt} ~ {endAt}
                </span>
              </div>
            </div>
            
            {/* 프로젝트 태그 */}
            <div className="mb-6">
              <Tag items={tags} />
            </div>
          </div>
          
          {/* 프로젝트 내용 */}
          <div className="flex-1 overflow-y-auto">
            <div className="text-gray-700 leading-relaxed text-sm">
              {description}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectNode;
