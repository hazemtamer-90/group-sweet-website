"use client";

import P from "@/lib/dashboard/palette";
import {
  analyticsCards,
  monthlySales,
  categorySales,
} from "@/lib/dashboard/data";

import AnalyticsAreaChart from "../Charts/AnalyticsAreaChart";
import AnalyticsDonutChart from "../Charts/AnalyticsDonutChart";

export default function AnalyticsPage() {
  const donutData = categorySales.map((item, index) => ({
    name: item.name,
    value: item.value,
    color: ["#7C3AED", "#10B981", "#F59E0B", "#EF4444"][index % 4],
  }));

  return (
    <div className="space-y-6">
      <div>
        <h1
          className="text-3xl font-bold"
          style={{ color: P.text }}
        >
          التحليلات
        </h1>

        <p
          className="text-sm mt-1"
          style={{ color: P.muted }}
        >
          متابعة أداء المصنع والمبيعات
        </p>
      </div>

      <div className="grid grid-cols-4 gap-5">
        {analyticsCards.map((card) => (
          <div
            key={card.title}
            className="rounded-2xl p-5"
            style={{ background: P.surface }}
          >
            <p
              className="text-sm"
              style={{ color: P.muted }}
            >
              {card.title}
            </p>

            <h2
              className="text-3xl font-bold mt-2"
              style={{ color: P.text }}
            >
              {card.value}
            </h2>

            <span
              className="text-sm font-semibold"
              style={{ color: "#16A34A" }}
            >
              {card.growth}
            </span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2">
          <AnalyticsAreaChart
            data={monthlySales}
          />
        </div>

        <AnalyticsDonutChart
          data={donutData}
        />
      </div>
    </div>
  );
}