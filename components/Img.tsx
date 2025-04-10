"use client"

import { useState } from "react";
import Image, { ImageProps } from "next/image";

const BASE_PATH = process.env.NODE_ENV === "production" ? "/findsy" : "";

/**
 * github pages 를 이용한 배포로 인해 base Path 를 환경에 따라 다르게 설정하기 위해
 * 해당 이미지 컴포넌트를 공통으로 사용함
 */
const Img = (props: ImageProps) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      {/* 스켈레톤 처리 */}
      {isLoading && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "#e0e0e0",
            borderRadius: "4px",
            animation: "pulse 1.5s ease-in-out infinite",
          }}
        />
      )}
      {/* 이미지 */}
      <Image
        {...props}
        src={`${BASE_PATH}${props.src}`}
        alt={props.alt}
        priority
        onLoadingComplete={() => setIsLoading(false)}
        style={{
          ...props.style,
          transition: "opacity 0.3s ease",
          opacity: isLoading ? 0 : 1,
        }}
      />
    </div>
  );
};

export default Img;
