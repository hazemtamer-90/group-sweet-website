"use client";

import clsx from "clsx";

interface DividerProps {
  className?: string;
}

export default function Divider({
  className,
}: DividerProps) {
  return (
    <div
      className={clsx(
        "h-px w-full bg-gray-200",
        className
      )}
    />
  );
}