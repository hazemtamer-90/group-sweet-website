"use client";

import ChartCard from "../cards/ChartCard";
import Badge from "../design-system/Badge";

const orders = [
  {
    id: "#1001",
    customer: "أحمد علي",
    product: "علبة مولد فاخرة",
    total: "420 ج.م",
    status: "completed",
  },
  {
    id: "#1002",
    customer: "سارة محمد",
    product: "بوكس مكسرات",
    total: "315 ج.م",
    status: "pending",
  },
  {
    id: "#1003",
    customer: "عمر حسن",
    product: "ملبن بريميوم",
    total: "255 ج.م",
    status: "completed",
  },
  {
    id: "#1004",
    customer: "منى عادل",
    product: "حلويات سمسم",
    total: "180 ج.م",
    status: "cancelled",
  },
];

export default function RecentOrdersWidget() {
  return (
    <ChartCard title="آخر الطلبات" subtitle="أحدث طلبات العملاء">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="border-b border-gray-200 text-right">
              <th className="pb-4 text-sm font-semibold text-gray-500">
                رقم الطلب
              </th>

              <th className="pb-4 text-sm font-semibold text-gray-500">
                العميل
              </th>

              <th className="pb-4 text-sm font-semibold text-gray-500">
                المنتج
              </th>

              <th className="pb-4 text-sm font-semibold text-gray-500">
                الإجمالي
              </th>

              <th className="pb-4 text-sm font-semibold text-gray-500">
                الحالة
              </th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr
                key={order.id}
                className="border-b border-gray-100 transition-colors duration-200 hover:bg-gray-50"
              >
                <td className="py-5 font-bold text-[#670047]">{order.id}</td>

                <td className="font-medium text-gray-800">{order.customer}</td>

                <td className="text-gray-600">{order.product}</td>

                <td className="font-semibold text-gray-900">{order.total}</td>

                <td>
                  <Badge
                    variant={
                      order.status === "completed"
                        ? "success"
                        : order.status === "pending"
                          ? "warning"
                          : "danger"
                    }
                  >
                    {order.status === "completed"
                      ? "مكتمل"
                      : order.status === "pending"
                        ? "قيد التنفيذ"
                        : "ملغي"}
                  </Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ChartCard>
  );
}
