"use client";

import P from "@/lib/dashboard/palette";

interface RevenueData {
  day: string;
  rev: number;
}

interface Props {
  data: RevenueData[];
  dark: boolean;
}

export default function AreaChart({
  data,
  dark,
}: Props) {
  const W = 560;
  const H = 180;

  const padL = 44;
  const padR = 8;
  const padT = 8;
  const padB = 28;

  const values = data.map((d) => d.rev);

  const min = Math.min(...values) * 0.92;
  const max = Math.max(...values) * 1.05;

  const range = max - min || 1;

  const x = (i: number) =>
    padL + (i / (data.length - 1)) * (W - padL - padR);

  const y = (v: number) =>
    padT + (1 - (v - min) / range) * (H - padT - padB);

  const line = data
    .map((d, i) => `${i === 0 ? "M" : "L"}${x(i)},${y(d.rev)}`)
    .join(" ");

  const area =
    `${line} L${x(data.length - 1)},${H - padB}` +
    ` L${x(0)},${H - padB} Z`;

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      style={{ width: "100%", height: 220 }}
    >
      <defs>
        <linearGradient id="areaGradient">
          <stop
            offset="0%"
            stopColor={P.primary}
            stopOpacity="0.25"
          />
          <stop
            offset="100%"
            stopColor={P.primary}
            stopOpacity="0"
          />
        </linearGradient>
      </defs>

      <path d={area} fill="url(#areaGradient)" />

      <path
        d={line}
        fill="none"
        stroke={P.primary}
        strokeWidth={2.5}
      />

      {data.map((d, i) => (
        <circle
          key={i}
          cx={x(i)}
          cy={y(d.rev)}
          r={4}
          fill={P.primary}
        />
      ))}
    </svg>
  );
}