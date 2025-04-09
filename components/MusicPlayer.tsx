"use client";

import { useEffect, useRef, useState } from "react";
import classNames from "classnames";

/**
 * 뮤직플레이어
 */
const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const playerRef = useRef<YT.Player | null>(null);

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
    const loadPlayer = () => {
      playerRef.current = new YT.Player("youtube-player", {
        height: "0",
        width: "0",
        videoId: "0zfwYWHRWhQ",
        playerVars: {
          autoplay: 0,
          controls: 1,
          loop: 1,
          playlist: "0zfwYWHRWhQ",
        },
        events: {
          onReady: (event: YT.OnReadyEvent) => {
            if (isPlaying) {
              event.target.playVideo();
            }
          },
        },
      });
    };

    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode!.insertBefore(tag, firstScriptTag);
      window.onYouTubeIframeAPIReady = loadPlayer;
    } else {
      loadPlayer();
    }

    return () => {
      if (playerRef.current && playerRef.current.destroy) {
        playerRef.current.destroy();
      }
    };
  }, [isPlaying]);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* 재생할 영상 */}
      <div id="youtube-player" />

      {/* Spinning LP image */}
      <div
        className={classNames(
          // 호버시 포인터 처리
          "hover:cursor-pointer w-[100px] h-[100px] relative"
        )}
        onClick={() => setIsPlaying((pre) => !pre)}
      >
        <div
          ref={overlayRef}
          className="absolute inset-0 rounded-full"
          style={{
            backgroundImage: `url('${process.env.NODE_ENV === 'production' ? '/findsy': ''}/images/lp.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>
    </div>
  );
};

export default MusicPlayer;
