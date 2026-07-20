"use client";

import { ReactNode } from "react";
import P from "@/lib/dashboard/palette";

interface Props {
  children: ReactNode;
  className?: string;
  dark: boolean;
}

export default function Card({
  children,
  className = "",
  dark,
}: Props) {
  return (
    <div
      className={`rounded-2xl p-5 ${className}`}
      style={{
        background: dark ? P.darkSurface : P.surface,
        boxShadow: dark
          ? "0 1px 3px rgba(0,0,0,.3)"
          : "0 1px 3px rgba(0,0,0,.06)",
      }}
    >
      {children}
    </div>
  );
}