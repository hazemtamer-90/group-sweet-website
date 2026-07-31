"use client";

import { ReactNode } from "react";
import clsx from "clsx";

interface ChartsCardProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export default function ChartsCard({
  title,
  subtitle,
  children,
  className,
}: ChartsCardProps) {
  return (
    <div
      className={clsx(
        `
        rounded-3xl
        border
        border-gray-200/70
        bg-white
        p-6
        shadow-sm
        transition-all
        duration-300
        hover:shadow-xl
        `,
        className,
      )}
    >
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-gray-900">{title}</h3>

          {subtitle && <p className="mt-1 text-sm text-gray-500">{subtitle}</p>}
        </div>
      </div>

      {children}
    </div>
  );
}
