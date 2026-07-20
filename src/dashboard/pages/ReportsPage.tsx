"use client";

import {
  FileDown,
  Printer,
  CalendarDays,
} from "lucide-react";

import P from "@/lib/dashboard/palette";

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">

        <div>
          <h1
            className="text-3xl font-bold"
            style={{ color: P.text }}
          >
            التقارير
          </h1>

          <p
            className="text-sm mt-1"
            style={{ color: P.muted }}
          >
            تقارير المبيعات والمنتجات والعملاء
          </p>
        </div>

        <div className="flex gap-3">

          <button
            className="flex items-center gap-2 px-5 py-3 rounded-xl text-white"
            style={{
              background: P.primary,
            }}
          >
            <FileDown size={18} />
            تصدير PDF
          </button>

          <button
            className="flex items-center gap-2 px-5 py-3 rounded-xl border"
          >
            <Printer size={18} />
            طباعة
          </button>

        </div>
      </div>

      <div
        className="rounded-2xl p-5"
        style={{
          background: P.surface,
        }}
      >
        <div className="flex items-center gap-3 mb-6">

          <CalendarDays size={18} />

          <input
            type="date"
            className="border rounded-xl p-3"
          />

          <span>-</span>

          <input
            type="date"
            className="border rounded-xl p-3"
          />

        </div>

        <table className="w-full">

          <thead>

            <tr className="border-b">

              <th className="text-right py-4">
                التقرير
              </th>

              <th className="text-right">
                آخر تحديث
              </th>

              <th className="text-right">
                الحالة
              </th>

              <th></th>

            </tr>

          </thead>

          <tbody>

            {[
              "تقرير المبيعات",
              "تقرير المنتجات",
              "تقرير العملاء",
              "تقرير المخزون",
            ].map((name) => (

              <tr
                key={name}
                className="border-b last:border-0"
              >

                <td className="py-5 font-semibold">
                  {name}
                </td>

                <td>اليوم</td>

                <td>

                  <span
                    className="px-3 py-1 rounded-full"
                    style={{
                      background: "#DCFCE7",
                      color: "#15803D",
                    }}
                  >
                    جاهز
                  </span>

                </td>

                <td>

                  <button
                    className="px-4 py-2 rounded-lg text-white"
                    style={{
                      background: P.primary,
                    }}
                  >
                    عرض
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}