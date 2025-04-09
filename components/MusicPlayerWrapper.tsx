"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

declare global {
  interface Window {
    __musicPlayerInitialized?: boolean;
  }
}

// 클라이언트에서만 렌더되게 하여 hydration 오류 방지
const MusicPlayer = dynamic(() => import("./MusicPlayer"), { ssr: false });

const MusicPlayerWrapper = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && !window.__musicPlayerInitialized) {
      window.__musicPlayerInitialized = true;
      setMounted(true);
    }
  }, []);

  if (!mounted) return null;

  return <MusicPlayer />;
};

export default MusicPlayerWrapper;