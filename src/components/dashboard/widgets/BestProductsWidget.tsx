"use client";

import { Trophy, TrendingUp } from "lucide-react";

import ChartCard from "../cards/ChartCard";

const products = [
  {
    name: "علبة مولد فاخرة",
    sales: 1248,
    progress: 100,
  },
  {
    name: "بوكس مكسرات",
    sales: 987,
    progress: 82,
  },
  {
    name: "ملبن بريميوم",
    sales: 812,
    progress: 68,
  },
  {
    name: "حلويات سمسم",
    sales: 690,
    progress: 55,
  },
];

export default function BestProductsWidget() {
  return (
    <ChartCard title="أفضل المنتجات" subtitle="الأكثر مبيعًا">
      <div className="space-y-5">
        {products.map((product, index) => (
          <div key={product.name}>
            <div className="mb-2 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#670047]/10">
                  <Trophy size={18} className="text-[#670047]" />
                </div>

                <div>
                  <p className="font-semibold text-gray-800">{product.name}</p>

                  <p className="text-xs text-gray-500">المركز #{index + 1}</p>
                </div>
              </div>

              <div className="text-right">
                <p className="font-bold text-[#670047]">{product.sales}</p>

                <div className="flex items-center justify-end gap-1 text-xs text-green-600">
                  <TrendingUp size={13} />
                  الأكثر مبيعًا
                </div>
              </div>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-gray-100">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#670047] to-[#C2185B]"
                style={{
                  width: `${product.progress}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </ChartCard>
  );
}
