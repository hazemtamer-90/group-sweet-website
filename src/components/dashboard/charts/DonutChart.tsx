"use client";

import {
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
} from "recharts";

import ChartsCard from "./ChartsCard";
import {
  revenueCategories,
} from "./chartsData";
import {
  chartColors,
} from "./chartColors";

const COLORS = chartColors.donut;

export default function DonutChart() {
  const total = revenueCategories.reduce(
    (sum, item) => sum + item.value,
    0
  );

  return (
    <ChartsCard
      title="توزيع المبيعات"
      subtitle="حسب الفئات"
    >
      <div className="flex flex-col items-center">

        <div className="h-64 w-full">

          <ResponsiveContainer>

            <PieChart>

              <Pie
                data={revenueCategories}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={88}
                paddingAngle={4}
                dataKey="value"
              >
                {revenueCategories.map(
                  (_, index) => (
                    <Cell
                      key={index}
                      fill={
                        COLORS[
                          index % COLORS.length
                        ]
                      }
                    />
                  )
                )}
              </Pie>

            </PieChart>

          </ResponsiveContainer>

        </div>

        <div className="mt-2 text-center">

          <p className="text-sm text-gray-500">
            إجمالي التوزيع
          </p>

          <h2 className="mt-1 text-3xl font-bold text-[#670047]">
            {total}%
          </h2>

        </div><div className="mt-8 w-full space-y-4">

          {revenueCategories.map(
            (item, index) => (
              <div
                key={item.name}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-3">

                  <span
                    className="h-3 w-3 rounded-full"
                    style={{
                      background:
                        COLORS[
                          index % COLORS.length
                        ],
                    }}
                  />

                  <span className="font-medium text-gray-700">
                    {item.name}
                  </span>

                </div>

                <span className="font-semibold text-[#670047]">
                  {item.value}%
                </span>

              </div>
            )
          )}

        </div>

      </div>
    </ChartsCard>
  );
}