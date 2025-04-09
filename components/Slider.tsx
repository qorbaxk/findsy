"use client";

import { ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./css/slider.css";

interface ISlider {
  items: ReactNode[];
  spaceBetween?: number;
  slidesPerView?: number;
  isLoop?: boolean;
}

/**
 * 슬라이더 컴포넌트
 * @param {ReactNode[]} items - 스와이퍼를 사용할 아이템노드
 * @param {number} spaceBetween - 각 슬라이드 간의 간격
 * @param {number} slidesPerView - 한 슬라이드당 몇개씩 볼 건 지
 * @param {boolean} isLoop - 무한루프 사용할건지
 */
const Slider = ({
  items,
  spaceBetween = 30,
  slidesPerView = 1,
  isLoop = true,
}: ISlider) => {
  return (
    <Swiper
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      loop={isLoop}
      navigation
      modules={[Navigation]}
      className="w-full h-full"
    >
      {items.map((item, idx) => (
        <SwiperSlide key={`swiper_slide_${idx}`}>{item}</SwiperSlide>
      ))}
    </Swiper>
  );
};
export default Slider;
