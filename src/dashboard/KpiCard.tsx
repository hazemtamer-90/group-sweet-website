"use client";

import { TrendingDown, TrendingUp } from "lucide-react";
import P from "@/lib/dashboard/palette";
import { LucideIcon } from "lucide-react";

interface Props {
  title: string;
  value: string;
  change: string;
  positive: boolean;
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
  dark: boolean;
}

export default function KpiCard({
  title,
  value,
  change,
  positive,
  icon: Icon,
  iconBg,
  iconColor,
  dark,
}: Props) {
  const bg = dark ? P.darkSurface : P.surface;
  const text = dark ? P.darkText : P.text;
  const muted = dark ? P.darkMuted : P.muted;

  return (
    <div
      className="rounded-2xl p-5 transition-all duration-200"
      style={{
        background: bg,
        boxShadow: dark
          ? "0 1px 3px rgba(0,0,0,.3)"
          : "0 1px 3px rgba(0,0,0,.06)",
      }}      onMouseEnter={(e) =>
        (e.currentTarget.style.transform = "translateY(-2px)")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.transform = "translateY(0px)")
      }
    >
      <div className="flex items-start justify-between mb-4">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{
            background: iconBg,
          }}
        >
          <Icon
            size={20}
            style={{
              color: iconColor,
            }}
          />
        </div>

        <span
          className="flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-full"
          style={{
            color: positive ? P.success : P.danger,
            background: positive ? P.successLt : P.dangerLt,
          }}
        >
          {positive ? (
            <TrendingUp size={11} />
          ) : (
            <TrendingDown size={11} />
          )}

          {change}
        </span>
      </div>      <div
        className="text-2xl font-bold mb-1"
        style={{
          color: text,
        }}
      >
        {value}
      </div>

      <div
        className="text-sm"
        style={{
          color: muted,
        }}
      >
        {title}
      </div>
    </div>
  );
}