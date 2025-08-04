"use client";

import { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import Tooltip from "@/components/Tooltip";

/**
 * 뮤직플레이어
 */
const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const rotationRef = useRef<number>(0);
  const overlayRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  /**
   * LP 각도를 위한 설정
   */
  useEffect(() => {
    let animationFrameId: number;
    const rotate = () => {
      rotationRef.current = (rotationRef.current + 1) % 360;
      if (overlayRef.current) {
        overlayRef.current.style.transform = `rotate(${rotationRef.current}deg)`;
      }
      animationFrameId = requestAnimationFrame(rotate);
    };

    if (isPlaying) {
      animationFrameId = requestAnimationFrame(rotate);
    }
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isPlaying]);

  /**
   * 화면 크기 감지
   */
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  /**
   * 음악의 재생, 일시정지를 담당하는 부분
   */
  useEffect(() => {
    audioRef.current = new Audio(
      `${
        process.env.NODE_ENV === "production" ? "/findsy" : ""
      }/audios/backgroundmusic.mp3`
    );
    audioRef.current.loop = true;

    return () => {
      audioRef.current?.pause();
      audioRef.current = null;
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="fixed bottom-2 right-0 z-50">
      {/* 돌아가는 LP 이미지 */}
      <Tooltip text={
        !isExpanded ? "뮤직플레이어 열기" :
        isPlaying ? "음악 정지하기" : "음악 재생하기"
      }>
        <button
          type="button"
          aria-label={
            !isExpanded ? "뮤직플레이어 열기" :
            isPlaying ? "음악 정지하기" : "음악 재생하기"
          }
          className={classNames(
            "hover:cursor-pointer w-[100px] h-[100px] relative transition-transform duration-300 ease-in-out",
            isMobile 
              ? (isExpanded ? "transform translate-x-0" : "transform translate-x-[67px]")
              : "transform translate-x-0"
          )}
          onClick={() => {
            if (isMobile && !isExpanded) {
              // 모바일에서만 확장 로직
              setIsExpanded(true);
              if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
              }
              timeoutRef.current = setTimeout(() => {
                setIsExpanded(false);
              }, 3000);
            } else {
              // PC에서는 바로 음악 재생/정지, 모바일에서는 확장된 상태에서 음악 재생/정지
              const audio = audioRef.current;
              if (!audio) return;

              if (isPlaying) {
                audio.pause();
                setIsPlaying(false);
              } else {
                audio.play();
                setIsPlaying(true);
              }
            }
          }}
        >
          <div
            ref={overlayRef}
            className="absolute inset-0 rounded-full"
            style={{
              backgroundImage: `url('${
                process.env.NODE_ENV === "production" ? "/findsy" : ""
              }/images/lp.webp')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </button>
      </Tooltip>
    </div>
  );
};

export default MusicPlayer;
