"use client";

import { useEffect, useState } from "react";

export function useSplash() {
  const [showSplash, setShowSplash] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("group-sweet-splash");

    if (!hasVisited) {
      setShowSplash(true);

      const timer = setTimeout(() => {
        setShowSplash(false);
        sessionStorage.setItem("group-sweet-splash", "true");
      }, 2800);

      return () => clearTimeout(timer);
    }
  }, []);

  return showSplash;
}
