"use client";

import { Line, LineChart, ResponsiveContainer } from "recharts";

import ChartsCard from "./ChartsCard";
import { sparklineData } from "./chartsData";

export default function Sparkline() {
  const last = sparklineData[sparklineData.length - 1].value;

  const first = sparklineData[0].value;

  const growth = Math.round(((last - first) / first) * 100);

  return (
    <ChartsCard title="اتجاه المبيعات" subtitle="آخر ١٠ أيام">
      <div className="mb-6">
        <h2 className="text-4xl font-bold text-[#670047]">+{growth}%</h2>

        <p className="mt-2 text-sm text-gray-500">مقارنة ببداية الفترة</p>
      </div>

      <div className="h-32">
        <ResponsiveContainer>
          <LineChart data={sparklineData}>
            <Line
              dataKey="value"
              stroke="#670047"
              strokeWidth={4}
              dot={false}
              type="monotone"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </ChartsCard>
  );
}
