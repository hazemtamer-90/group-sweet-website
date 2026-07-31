"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import ChartCard from "../cards/ChartCard";

const data = [
  { month: "يناير", sales: 4200 },
  { month: "فبراير", sales: 5100 },
  { month: "مارس", sales: 4800 },
  { month: "أبريل", sales: 6500 },
  { month: "مايو", sales: 7200 },
  { month: "يونيو", sales: 8100 },
];

export default function SalesWidget() {
  return (
    <ChartCard
      title="نظرة عامة على المبيعات"
      subtitle="آخر ٦ أشهر"
      className="xl:col-span-2"
    >
      <div className="h-60">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 10,
              right: 10,
              left: -20,
              bottom: 0,
            }}
          >
            <CartesianGrid
              stroke="#ECECEC"
              strokeDasharray="3 3"
              vertical={false}
            />

            <XAxis
              dataKey="month"
              tick={{
                fill: "#6B7280",
                fontSize: 12,
              }}
              tickLine={false}
              axisLine={false}
            />

            <YAxis
              tick={{
                fill: "#6B7280",
                fontSize: 12,
              }}
              tickLine={false}
              axisLine={false}
            />

            <Tooltip
              contentStyle={{
                borderRadius: 16,
                border: "none",
                boxShadow: "0 10px 30px rgba(0,0,0,.12)",
              }}
              labelStyle={{
                color: "#670047",
                fontWeight: 700,
              }}
            />

            <Line
              type="monotone"
              dataKey="sales"
              stroke="#670047"
              strokeWidth={4}
              dot={{
                r: 5,
                fill: "#670047",
                strokeWidth: 2,
                stroke: "#ffffff",
              }}
              activeDot={{
                r: 8,
                fill: "#2563EB",
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </ChartCard>
  );
}
