export {};

declare global {
  interface Window {
    YT: typeof YT;
    onYouTubeIframeAPIReady: () => void;
  }

  namespace YT {
    class Player {
      constructor(
        elementId: string | HTMLElement,
        options: {
          height?: string;
          width?: string;
          videoId?: string;
          playerVars?: YT.PlayerVars;
          events?: {
            onReady?: (event: YT.OnReadyEvent) => void;
          };
        }
      );
      playVideo(): void;
      pauseVideo(): void;
      destroy(): void;
      getCurrentTime(): number;
      seekTo(seconds: number, allowSeekAhead: boolean): void;
    }

    interface OnReadyEvent {
      target: Player;
    }

    interface OnStateChangeEvent {
      target: Player;
      data: number;
    }

    interface PlayerVars {
      autoplay?: 0 | 1;
      controls?: 0 | 1 | 2;
      loop?: 0 | 1;
      playlist?: string;
      mute?: 0 | 1;
      rel?: 0 | 1;
      modestbranding?: 0 | 1;
      enablejsapi?: 0 | 1;
      [key: string]: string | number | undefined;
    }

  }
}
