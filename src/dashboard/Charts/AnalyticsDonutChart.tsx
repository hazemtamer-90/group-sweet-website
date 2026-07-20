"use client";

import P from "@/lib/dashboard/palette";

interface CategorySale {
  name: string;
  value: number;
  color: string;
}

interface Props {
  data: CategorySale[];
}

export default function AnalyticsDonutChart({ data }: Props) {
  const size = 220;
  const stroke = 24;
  const radius = (size - stroke) / 2;
  const circumference = Number((2 * Math.PI * radius).toFixed(3));

  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="rounded-2xl p-6" style={{ background: P.surface }}>
      <h3 className="text-lg font-bold mb-6" style={{ color: P.text }}>
        توزيع المبيعات
      </h3>

      <div className="flex flex-col items-center gap-6">
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          <g transform={`rotate(-90 ${size / 2} ${size / 2})`}>
            {data.map((item, index) => {
              const length = Number(
                ((item.value / total) * circumference).toFixed(3),
              );

              const offset = Number(
                data
                  .slice(0, index)
                  .reduce(
                    (sum, current) =>
                      sum + (current.value / total) * circumference,
                    0,
                  )
                  .toFixed(3),
              );

              return (
                <circle
                  key={item.name}
                  cx={size / 2}
                  cy={size / 2}
                  r={radius}
                  fill="none"
                  stroke={item.color}
                  strokeWidth={stroke}
                  strokeDasharray={`${length} ${circumference}`}
                  strokeDashoffset={-offset}
                  strokeLinecap="round"
                />
              );
            })}
          </g>

          <text
            x="50%"
            y="48%"
            textAnchor="middle"
            fontSize="28"
            fontWeight="700"
            fill={P.text}
          >
            {total}
          </text>

          <text
            x="50%"
            y="61%"
            textAnchor="middle"
            fontSize="12"
            fill={P.muted}
          >
            إجمالي
          </text>
        </svg>

        <div className="w-full space-y-3">
          {data.map((item) => (
            <div key={item.name} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ background: item.color }}
                />

                <span style={{ color: P.text }}>{item.name}</span>
              </div>

              <span className="font-semibold" style={{ color: P.text }}>
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
