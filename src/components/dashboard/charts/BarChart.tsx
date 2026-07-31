"use client";

import {
  Bar,
  BarChart as ReBarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import ChartsCard from "./ChartsCard";
import { monthlySales } from "./chartsData";

export default function BarChart() {
  return (
    <ChartsCard
      title="المبيعات الشهرية"
      subtitle="آخر ٦ أشهر"
    >
      <div className="h-72">

        <ResponsiveContainer width="100%" height="100%">

          <ReBarChart
            data={monthlySales}
            margin={{
              top: 5,
              right: 5,
              left: -20,
              bottom: 0,
            }}
          >

            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#F1F5F9"
            />

            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#6B7280",
                fontSize: 12,
              }}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#6B7280",
                fontSize: 12,
              }}
            />

            <Tooltip
              cursor={{
                fill: "#F8F8F8",
              }}
            />

            <Bar
              dataKey="sales"
              radius={[10, 10, 0, 0]}
              fill="#670047"
            />

          </ReBarChart>

        </ResponsiveContainer>

      </div>
    </ChartsCard>
  );
}