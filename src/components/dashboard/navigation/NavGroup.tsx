"use client";

import { ReactNode } from "react";
import clsx from "clsx";

interface NavGroupProps {
  children: ReactNode;
  className?: string;
}

export default function NavGroup({
  children,
  className,
}: NavGroupProps) {
  return (
    <div
      className={clsx(
        "flex flex-col gap-2",
        className
      )}
    >
      {children}
    </div>
  );
}