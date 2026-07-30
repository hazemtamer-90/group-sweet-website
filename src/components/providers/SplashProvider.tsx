"use client";

import SplashScreen from "@/components/common/SplashScreen";
import { useSplash } from "@/hooks/useSplash";

export default function SplashProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const showSplash = useSplash();

  return (
    <>
      <SplashScreen show={showSplash} />
      {children}
    </>
  );
}
