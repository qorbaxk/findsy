"use client";

import { ReactNode, useState, useEffect } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper";
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
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  /**
   * 슬라이드 위치 기억하는 query string
   */
  const slideFromQuery = parseInt(searchParams.get("slide") || "0", 10);
  const initialSlide = isNaN(slideFromQuery) ? 0 : slideFromQuery;

  /**
   * client 마운트 여부
   */
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);

  /**
   * 슬라이드 넘길 때 해당 슬라이드 번호 기억하도록 설정
   */
  const handleSlideChange = (swiper: SwiperClass) => {
    const currentSlide = swiper.realIndex;
    const currentQuery = searchParams.get("slide");
    if (currentQuery !== currentSlide.toString()) {
      const params = new URLSearchParams(searchParams.toString());
      params.set("slide", currentSlide.toString());
      router.replace(`${pathname}?${params.toString()}`);
    }
  };

  /**
   * 슬라이드 위치 기억이 client 가 하고 있기 때문에 마운트 됐을 때만 보이도록 설정
   */
  if (!hasMounted) return null;

  return (
    <Swiper
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      loop={isLoop}
      navigation
      modules={[Navigation]}
      className="w-full h-full"
      initialSlide={initialSlide}
      onSlideChange={handleSlideChange}
    >
      {items.map((item, idx) => (
        <SwiperSlide key={`swiper_slide_${idx}`}>{item}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
