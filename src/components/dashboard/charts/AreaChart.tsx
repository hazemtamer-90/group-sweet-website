"use client";

import {
  Area,
  AreaChart as ReAreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import ChartsCard from "./ChartsCard";
import { monthlySales } from "./chartsData";

export default function AreaChart() {
  return (
    <ChartsCard title="تحليل المبيعات" subtitle="آخر ٦ أشهر">
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <ReAreaChart
            data={monthlySales}
            margin={{
              top: 10,
              right: 10,
              left: -20,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#670047" stopOpacity={0.35} />

                <stop offset="100%" stopColor="#670047" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid
              vertical={false}
              stroke="#F1F5F9"
              strokeDasharray="3 3"
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
              contentStyle={{
                borderRadius: 16,
                border: "none",
                boxShadow: "0 10px 30px rgba(0,0,0,.12)",
              }}
            />
            <Area
              type="monotone"
              dataKey="sales"
              stroke="#670047"
              strokeWidth={4}
              fill="url(#salesGradient)"
              activeDot={{
                r: 8,
                fill: "#670047",
                stroke: "#fff",
                strokeWidth: 3,
              }}
            />
          </ReAreaChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 grid grid-cols-3 gap-4">
        <div className="rounded-2xl bg-gray-50 p-4 text-center">
          <p className="text-sm text-gray-500">أعلى شهر</p>

          <h3 className="mt-2 text-xl font-bold text-[#670047]">يونيو</h3>
        </div>

        <div className="rounded-2xl bg-gray-50 p-4 text-center">
          <p className="text-sm text-gray-500">إجمالي المبيعات</p>

          <h3 className="mt-2 text-xl font-bold text-[#670047]">٣٦٬٤٠٠</h3>
        </div>

        <div className="rounded-2xl bg-gray-50 p-4 text-center">
          <p className="text-sm text-gray-500">النمو</p>

          <h3 className="mt-2 text-xl font-bold text-green-600">+18%</h3>
        </div>
      </div>
    </ChartsCard>
  );
}
