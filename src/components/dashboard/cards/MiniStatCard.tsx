"use client";

import clsx from "clsx";
import { LucideIcon, TrendingDown, TrendingUp } from "lucide-react";

interface MiniStatCardProps {
  title: string;
  value: string | number;
  change: number;
  icon: LucideIcon;
  className?: string;
}

export default function MiniStatCard({
  title,
  value,
  change,
  icon: Icon,
  className,
}: MiniStatCardProps) {
  const positive = change >= 0;

  return (
    <div
      className={clsx(
        `
        group
        rounded-3xl
        border
        border-gray-200/70
        bg-white
        p-6
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#670047]/20
        hover:shadow-xl
        `,
        className,
      )}
    >
      <div className="flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#670047]/10 transition-all duration-300 group-hover:scale-110">
          <Icon size={22} className="text-[#670047]" />
        </div>

        <div className="text-right">
          <p className="text-sm font-medium text-gray-500">{title}</p>

          <h3 className="mt-2 text-2xl font-bold text-gray-900">{value}</h3>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-end gap-2">
        {positive ? (
          <TrendingUp size={16} className="text-green-600" />
        ) : (
          <TrendingDown size={16} className="text-red-600" />
        )}

        <span
          className={clsx(
            "text-sm font-semibold",
            positive ? "text-green-600" : "text-red-600",
          )}
        >
          {positive ? "+" : ""}
          {change}%
        </span>

        <span className="text-sm text-gray-400">مقارنة بالشهر الماضي</span>
      </div>
    </div>
  );
}
