"use client";

import { ReactNode } from "react";
import clsx from "clsx";

interface GradientCardProps {
  children: ReactNode;
  className?: string;
}

export default function GradientCard({
  children,
  className,
}: GradientCardProps) {
  return (
    <div
      className={clsx(
        "rounded-3xl",
        "bg-gradient-to-br from-[#670047] via-[#8A005D] to-[#B00073]",
        "p-6",
        "text-white",
        "shadow-xl",
        className
      )}
    >
      {children}
    </div>
  );
}