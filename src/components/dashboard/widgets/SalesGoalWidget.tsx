"use client";

import {
  ArrowUpRight,
  Target,
} from "lucide-react";

import ChartCard from "../cards/ChartCard";

export default function SalesGoalWidget() {
  const progress = 78;

  return (
    <ChartCard
      title="هدف المبيعات"
      subtitle="الشهر الحالي"
    >
      <div className="flex flex-col items-center">

        <div className="relative">

          <svg
            width="180"
            height="180"
            className="-rotate-90"
          >
            <circle
              cx="90"
              cy="90"
              r="74"
              stroke="#ECECEC"
              strokeWidth="14"
              fill="none"
            />

            <circle
              cx="90"
              cy="90"
              r="74"
              stroke="#670047"
              strokeWidth="14"
              strokeLinecap="round"
              strokeDasharray={465}
              strokeDashoffset={
                465 - (465 * progress) / 100
              }
              fill="none"
            />
          </svg>

          <div className="absolute inset-0 flex flex-col items-center justify-center">

            <Target
              size={28}
              className="mb-2 text-[#670047]"
            />

            <h2 className="text-4xl font-bold">
              {progress}%
            </h2>

            <p className="text-sm text-gray-500">
              من الهدف
            </p>

          </div>

        </div>

        <div className="mt-8 w-full rounded-2xl bg-gray-50 p-4">

          <div className="flex items-center justify-between">

            <span className="text-sm text-gray-500">
              المحقق
            </span>

            <span className="font-bold">
              248,600 ج.م
            </span>

          </div>

          <div className="mt-4 flex items-center justify-between">

            <span className="text-sm text-gray-500">
              الهدف
            </span>

            <span className="font-bold">
              320,000 ج.م
            </span>

          </div>

        </div>

        <div className="mt-6 flex items-center gap-2 rounded-full bg-green-50 px-4 py-2 text-sm font-semibold text-green-700">

          <ArrowUpRight size={18} />

          أعلى من الشهر الماضي بـ 18%

        </div>

      </div>
    </ChartCard>
  );
}