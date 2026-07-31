"use client";

import clsx from "clsx";

interface ProgressProps {
  value: number;
  className?: string;
}

export default function Progress({
  value,
  className,
}: ProgressProps) {
  return (
    <div
      className={clsx(
        "h-2 w-full overflow-hidden rounded-full bg-gray-200",
        className
      )}
    >
      <div
        className="h-full rounded-full bg-[#670047] transition-all duration-500"
        style={{
          width: `${Math.min(Math.max(value, 0), 100)}%`,
        }}
      />
    </div>
  );
}