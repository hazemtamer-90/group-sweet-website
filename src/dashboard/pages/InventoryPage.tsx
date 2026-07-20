"use client";

import { Search, Pencil, Trash2 } from "lucide-react";
import { useState } from "react";
import P from "@/lib/dashboard/palette";
import { inventory } from "@/lib/dashboard/data";
import type { InventoryItem } from "@/types/inventory";

export default function InventoryPage() {
  const [items, setItems] = useState<InventoryItem[]>(inventory);

  const deleteItem = (sku: string) => {
    setItems((prev) => prev.filter((item) => item.sku !== sku));
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold" style={{ color: P.text }}>
          إدارة المخزون
        </h1>

        <p className="mt-1 text-sm" style={{ color: P.muted }}>
          متابعة حالة المخزون لجميع المنتجات
        </p>
      </div>

      <div className="rounded-2xl p-5" style={{ background: P.surface }}>
        <div className="relative mb-6">
          <Search
            size={18}
            color={P.muted}
            className="absolute right-4 top-1/2 -translate-y-1/2"
          />

          <input
            type="text"
            placeholder="ابحث..."
            className="w-full rounded-xl border py-3 pr-11 pl-4 outline-none"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px]">
            <thead>
              <tr className="border-b">
                <th className="py-4 text-right">المنتج</th>
                <th className="text-right">SKU</th>
                <th className="text-right">الكمية</th>
                <th className="text-right">الحد الأدنى</th>
                <th className="text-right">الحالة</th>
                <th className="text-right">الإجراءات</th>
              </tr>
            </thead>

            <tbody>
              {items.map((item) => {
                const status =
                  item.stock === 0
                    ? "نفد"
                    : item.stock <= item.min
                      ? "منخفض"
                      : "متوفر";

                const color =
                  item.stock === 0
                    ? "#DC2626"
                    : item.stock <= item.min
                      ? "#F59E0B"
                      : "#16A34A";

                const background =
                  item.stock === 0
                    ? "#FEE2E2"
                    : item.stock <= item.min
                      ? "#FEF3C7"
                      : "#DCFCE7";

                return (
                  <tr key={item.sku} className="border-b last:border-0">
                    <td className="py-5 font-semibold">{item.name}</td>

                    <td>{item.sku}</td>

                    <td className="font-bold">{item.stock}</td>

                    <td>{item.min}</td>

                    <td>
                      <span
                        className="rounded-full px-3 py-1 text-xs font-semibold"
                        style={{
                          color,
                          background,
                        }}
                      >
                        {status}
                      </span>
                    </td>

                    <td>
                      <div className="flex items-center gap-2">
                        <button
                          className="flex h-10 w-10 items-center justify-center rounded-lg"
                          style={{
                            background: P.primaryLt,
                            color: P.primary,
                          }}
                        >
                          <Pencil size={18} />
                        </button>

                        <button
                          onClick={() => deleteItem(item.sku)}
                          className="flex h-10 w-10 items-center justify-center rounded-lg"
                          style={{
                            background: "#FEE2E2",
                            color: "#DC2626",
                          }}
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
