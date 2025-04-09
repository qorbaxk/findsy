"use client";

import { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import Tooltip from "@/components/Tooltip";

/**
 * 뮤직플레이어
 */
const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const rotationRef = useRef<number>(0);
  const overlayRef = useRef<HTMLDivElement>(null);

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
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* 돌아가는 LP 이미지 */}
      <Tooltip text={isPlaying ? "음악 정지하기" : "음악 재생하기"}>
        <button
          type="button"
          className={classNames(
            // 호버시 포인터 처리
            "hover:cursor-pointer w-[100px] h-[100px] relative"
          )}
          onClick={() => {
            const audio = audioRef.current;
            if (!audio) return;

            if (isPlaying) {
              audio.pause();
              setIsPlaying(false);
            } else {
              audio.play();
              setIsPlaying(true);
            }
          }}
        >
          <div
            ref={overlayRef}
            className="absolute inset-0 rounded-full"
            style={{
              backgroundImage: `url('${
                process.env.NODE_ENV === "production" ? "/findsy" : ""
              }/images/lp.png')`,
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
