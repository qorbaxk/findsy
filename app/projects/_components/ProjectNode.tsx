"use client";

import React, { ReactNode, useRef, useState, useLayoutEffect } from "react";
import classNames from "classnames";
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
  img: IImg;
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
 * @param {IImg} img - 이미지 정보
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
  const [maxHeight, setMaxHeight] = useState<number>(0);

  /**
   * 보고 있는 화면 사이즈에 맞춰서 높이 지정
   */
  useLayoutEffect(() => {
    if (topRef.current) {
      const topHeight = topRef.current.offsetHeight;
      // 창크기 - 여백 및 패딩 - 작성된 상단 내용
      const available = window.innerHeight - 257 - topHeight ;
      setMaxHeight(available);
    }
  }, [topRef]);

  return (
    <div
      key={key}
      className="w-full h-full px-[50px] py-4 grid grid-cols-3 gap-4"
    >
      {/* 왼쪽 영역 */}
      <div
        className={classNames(
          "col-span-1 flex items-center justify-center relative shrink-0"
        )}
      >
        <Img src={img.src} alt={img.alt} fill className="object-contain" />
      </div>
      {/* 오른쪽 영역 */}
      <div className="col-span-2 flex flex-col gap-4 grow">
        <div ref={topRef}>
          <div className="flex flex-row justify-between items-end pb-2">
            <div>
              {/* 프로젝트 상세 타이틀 */}
              <span className="text-xs">{detailTitle}</span>
              {/* 프로젝트 타이틀 */}
              <p className="text-3xl font-bold">{title}</p>
            </div>
            {/* 프로젝트 기간 */}
            <span className="text-sm">
              {startAt} ~ {endAt}
            </span>
          </div>
          {/* 프로젝트 태그 */}
          <Tag items={tags} />
        </div>
        {/* 프로젝트 내용 */}
        <div className="grow overflow-y-auto scrollbar text-justify pr-2" style={{ maxHeight }}>
          {description}
        </div>
      </div>
    </div>
  );
};

export default ProjectNode;
