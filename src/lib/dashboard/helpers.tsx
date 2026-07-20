import React from "react";
import P from "./palette";

export const fmt = (n: number) => {
  if (n >= 1000000) return `${(n / 1000000).toFixed(1)}م`;
  if (n >= 1000) return `${(n / 1000).toFixed(0)}ك`;
  return String(n);
};

export function StatusBadge({
  status,
}: {
  status: string;
}) {
  let bg = P.infoLt;
  let color = P.info;

  if (
    status.includes("مكتمل") ||
    status.includes("مدفوع")
  ) {
    bg = P.successLt;
    color = P.success;
  } else if (
    status.includes("معلق") ||
    status.includes("قيد")
  ) {
    bg = P.warningLt;
    color = P.warning;
  } else if (
    status.includes("ملغي") ||
    status.includes("فشل")
  ) {
    bg = P.dangerLt;
    color = P.danger;
  }

  return (
    <span
      className="px-2 py-1 rounded-full text-xs font-semibold"
      style={{
        background: bg,
        color,
      }}
    >
      {status}
    </span>
  );
}

export function MiniSparkline({
  data,
}: {
  data: number[];
}) {
  const max = Math.max(...data);
  const min = Math.min(...data);

  const points = data
    .map((v, i) => {
      const x = (i / (data.length - 1)) * 70;
      const y = 20 - ((v - min) / (max - min || 1)) * 18;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <svg width="70" height="20">
      <polyline
        fill="none"
        stroke={P.primary}
        strokeWidth="2"
        points={points}
      />
    </svg>
  );
}