"use client";

import clsx from "clsx";
import { LucideIcon, TrendingUp } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  trend?: string;
  progress?: number;
  footer?: string;
  icon: LucideIcon;
  iconColor?: string;
  iconBackground?: string;
  className?: string;
}

export default function StatCard({
  title,
  value,
  subtitle,
  trend,
  progress,
  footer,
  icon: Icon,
  iconColor = "#670047",
  iconBackground = "bg-[#670047]/10",
  className,
}: StatCardProps) {
  return (
    <div
      className={clsx(
        `
        group
        relative
        flex
        min-h-[255px]
        flex-col
        overflow-hidden
        rounded-3xl
        border
        border-gray-200/70
        bg-white
        p-5
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
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#670047] via-[#8E0E63] to-[#C2185B]" />

      <div className="absolute right-[-30px] top-[-30px] h-28 w-28 rounded-full bg-[#670047]/5 blur-3xl" />

      <div className="flex items-start justify-between">
        <div
          className={clsx(
            "flex h-12 w-12 items-center justify-center rounded-2xl transition duration-300 group-hover:scale-110",
            iconBackground,
          )}
        >
          <Icon size={22} style={{ color: iconColor }} />
        </div>

        <div className="flex-1 pr-3 text-right">
          <p className="text-sm font-semibold text-gray-500">{title}</p>

          <h2 className="mt-2 break-words text-2xl font-bold leading-tight text-gray-900">
            {value}
          </h2>
        </div>
      </div>

      {(subtitle || trend) && (
        <div className="mt-5 flex flex-wrap items-center justify-between gap-2">
          {subtitle && (
            <div className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2.5 py-1 text-[11px] font-semibold text-green-700">
              <TrendingUp size={13} />
              <span>{subtitle}</span>
            </div>
          )}

          {trend && <span className="text-[11px] text-gray-500">{trend}</span>}
        </div>
      )}

      {typeof progress === "number" && (
        <div className="mt-5">
          <div className="mb-2 flex items-center justify-between text-[11px] text-gray-500">
            <span>التقدم</span>
            <span>{progress}%</span>
          </div>

          <div className="h-2 overflow-hidden rounded-full bg-gray-100">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#670047] to-[#C2185B] transition-all duration-700"
              style={{
                width: `${progress}%`,
              }}
            />
          </div>
        </div>
      )}

      {footer && (
        <div className="mt-auto pt-5">
          <div className="border-t border-gray-100 pt-3">
            <p className="text-[11px] leading-5 text-gray-500">{footer}</p>
          </div>
        </div>
      )}
    </div>
  );
}
