"use client";

import React, { ReactNode } from "react";
import Img from "@/components/Img";

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

  return (
    <article
      key={key}
      className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      {/* 모바일: 세로 배치 */}
      <div className="flex flex-col lg:hidden">
        {/* 이미지 영역 - 모바일만 */}
        <div className="relative bg-gray-50 p-4 sm:p-6 flex flex-col gap-3 sm:gap-4">
          {img.map((imageItem, index) => (
            <div key={index} className="relative w-full h-48 sm:h-56">
              <Img
                src={imageItem.src}
                alt={imageItem.alt}
                fill
                className="object-contain cursor-pointer hover:opacity-80 transition-opacity duration-200"
                sizes="(max-width:640px) 100vw, 100vw"
                onClick={() => window.open(imageItem.src, '_blank')}
              />
            </div>
          ))}
        </div>
        
        {/* 콘텐츠 영역 - 모바일만 */}
        <div className="p-4 sm:p-6 flex flex-col">
          <div className="mb-4 sm:mb-6">
            <div className="flex items-start justify-between mb-3 sm:mb-4">
              <div>
                <span className="text-xs sm:text-sm text-gray-500 mb-1 sm:mb-2 block">{detailTitle}</span>
                <h3 className="text-xl sm:text-2xl font-Mediasansextended tracking-wide mb-1 sm:mb-2">
                  {title}
                </h3>
                <span className="text-xs sm:text-sm text-gray-500">
                  {startAt} ~ {endAt}
                </span>
              </div>
            </div>
            
            {/* 프로젝트 태그 - flex wrap으로 모든 태그 표시 */}
            <div className="mb-4 sm:mb-6">
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs whitespace-nowrap flex-shrink-0 hover:bg-gray-200 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {/* 프로젝트 내용 - 스크롤 없이 모든 내용 표시 */}
          <div className="text-gray-700 leading-relaxed text-xs sm:text-sm">
            {description}
          </div>
        </div>
      </div>

      {/* 데스크톱: 가로 배치 */}
      <div className="hidden lg:grid lg:grid-cols-2 gap-0">
        {/* 이미지 영역 - 데스크톱만 */}
        <div className="relative bg-gray-50 p-8 flex flex-col gap-4">
          {img.map((imageItem, index) => (
            <div key={index} className="relative w-full h-[500px]">
              <Img
                src={imageItem.src}
                alt={imageItem.alt}
                fill
                className="object-contain cursor-pointer hover:opacity-80 transition-opacity duration-200"
                sizes="(max-width:1024px) 50vw, 50vw"
                onClick={() => window.open(imageItem.src, '_blank')}
              />
            </div>
          ))}
        </div>
        
        {/* 콘텐츠 영역 - 데스크톱만 */}
        <div className="p-8 flex flex-col">
          <div className="mb-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <span className="text-sm text-gray-500 mb-2 block">{detailTitle}</span>
                <h3 className="text-3xl font-Mediasansextended tracking-wide mb-2">
                  {title}
                </h3>
                <span className="text-sm text-gray-500">
                  {startAt} ~ {endAt}
                </span>
              </div>
            </div>
            
            {/* 프로젝트 태그 - flex wrap으로 모든 태그 표시 */}
            <div className="mb-6">
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs whitespace-nowrap flex-shrink-0 hover:bg-gray-200 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {/* 프로젝트 내용 - 스크롤 없이 모든 내용 표시 */}
          <div className="text-gray-700 leading-relaxed text-sm">
            {description}
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectNode;
