"use client";

import { useEffect, useState } from "react";

export function useSplash() {
  const [showSplash, setShowSplash] = useState(() => {
    if (typeof window === "undefined") {
      return true;
    }

    return !sessionStorage.getItem("group-sweet-splash");
  });

  useEffect(() => {
    if (!showSplash) return;

    const timer = setTimeout(() => {
      sessionStorage.setItem("group-sweet-splash", "true");
      setShowSplash(false);
    }, 2800);

    return () => clearTimeout(timer);
  }, [showSplash]);

  return showSplash;
}
