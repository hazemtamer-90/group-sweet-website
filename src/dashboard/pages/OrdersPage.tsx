"use client";

import { Search, Eye, Pencil, Printer } from "lucide-react";
import P from "@/lib/dashboard/palette";
import { latestOrders } from "@/lib/dashboard/data";
import StatusBadge from "../StatusBadge";

export default function OrdersPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1
            className="text-3xl font-bold"
            style={{ color: P.text }}
          >
            إدارة الطلبات
          </h1>

          <p
            className="text-sm mt-1"
            style={{ color: P.muted }}
          >
            متابعة جميع طلبات العملاء
          </p>
        </div>
      </div>

      <div
        className="rounded-2xl p-5"
        style={{ background: P.surface }}
      >
        <div className="relative mb-6">
          <Search
            className="absolute right-4 top-1/2 -translate-y-1/2"
            size={18}
            color={P.muted}
          />

          <input
            placeholder="ابحث برقم الطلب أو اسم العميل..."
            className="w-full rounded-xl border py-3 pr-11 pl-4 outline-none"
          />
        </div>

        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-right py-4">رقم الطلب</th>
              <th className="text-right">العميل</th>
              <th className="text-right">التاريخ</th>
              <th className="text-right">الدفع</th>
              <th className="text-right">الحالة</th>
              <th className="text-right">الإجمالي</th>
              <th className="text-right">الإجراءات</th>
            </tr>
          </thead>

          <tbody>
            {latestOrders.map((order) => (
              <tr
                key={order.id}
                className="border-b last:border-0"
              >
                <td className="py-5 font-semibold">
                  {order.id}
                </td>

                <td>{order.customer}</td>

                <td>{order.date}</td>

                <td>
                  <StatusBadge status={order.payment} />
                </td>

                <td>
                  <StatusBadge status={order.status} />
                </td>

                <td>{order.total} ج</td>

                <td>
                  <div className="flex items-center gap-2">

                    <button
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{
                        background: P.primaryLt,
                        color: P.primary,
                      }}
                    >
                      <Eye size={18} />
                    </button>

                    <button
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{
                        background: "#FEF3C7",
                        color: "#B45309",
                      }}
                    >
                      <Pencil size={18} />
                    </button>

                    <button
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{
                        background: "#DBEAFE",
                        color: "#2563EB",
                      }}
                    >
                      <Printer size={18} />
                    </button>

                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}