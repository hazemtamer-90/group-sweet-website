"use client";

import P from "@/lib/dashboard/palette";

interface MonthlySale {
  month: string;
  sales: number;
}

interface Props {
  data: MonthlySale[];
}

export default function AnalyticsAreaChart({ data }: Props) {
  const W = 760;
  const H = 260;

  const padL = 50;
  const padR = 20;
  const padT = 20;
  const padB = 40;

  const values = data.map((d) => d.sales);

  const min = Math.min(...values) * 0.9;
  const max = Math.max(...values) * 1.05;

  const range = max - min || 1;

  const x = (i: number) => padL + (i / (data.length - 1)) * (W - padL - padR);

  const y = (v: number) => padT + (1 - (v - min) / range) * (H - padT - padB);

  const line = data
    .map((d, i) => `${i === 0 ? "M" : "L"} ${x(i)} ${y(d.sales)}`)
    .join(" ");

  const area =
    `${line} L ${x(data.length - 1)} ${H - padB}` + ` L ${x(0)} ${H - padB} Z`;

  return (
    <div
      className="rounded-2xl p-6 shadow-sm"
      style={{ background: P.surface }}
    >
      <h3 className="text-lg font-bold mb-5" style={{ color: P.text }}>
        المبيعات الشهرية
      </h3>

      <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-[260px]">
        <defs>
          <linearGradient id="analyticsArea" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={P.primary} stopOpacity="0.35" />
            <stop offset="100%" stopColor={P.primary} stopOpacity="0" />
          </linearGradient>
        </defs>

        <path d={area} fill="url(#analyticsArea)" />

        <path
          d={line}
          fill="none"
          stroke={P.primary}
          strokeWidth={3}
          strokeLinecap="round"
        />

        {data.map((d, i) => (
          <g key={d.month}>
            <circle cx={x(i)} cy={y(d.sales)} r={5} fill={P.primary} />

            <text
              x={x(i)}
              y={H - 10}
              textAnchor="middle"
              fontSize="11"
              fill={P.muted}
            >
              {d.month}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
