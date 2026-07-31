"use client";

import {
  Plus,
  AlertTriangle,
  Package,
  ShoppingCart,
  Activity,
} from "lucide-react";

import ChartCard from "../cards/ChartCard";

export default function QuickActionsWidget() {
  return (
    <ChartCard
      title="الإجراءات السريعة"
      subtitle="أهم العمليات وحالة النظام"
      className="h-full"
    >
      <div className="space-y-3">
        <button
          className="
            flex w-full items-center justify-between
            rounded-2xl
            bg-[#670047]
            px-4
            py-4
            text-white
            transition-all
            duration-300
            hover:scale-[1.02]
            hover:bg-[#7C3AED]
          "
        >
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-white/20 p-2">
              <Plus size={18} />
            </div>

            <div className="text-right">
              <h3 className="font-semibold">إضافة منتج</h3>

              <p className="text-xs text-white/80">إنشاء منتج جديد</p>
            </div>
          </div>
        </button>

        <div
          className="
            flex items-center justify-between
            rounded-2xl
            border
            border-gray-200
            p-4
            transition-all
            duration-300
            hover:border-[#7C3AED]
            hover:shadow-md
          "
        >
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-blue-50 p-2 text-blue-600">
              <ShoppingCart size={18} />
            </div>

            <div className="text-right">
              <h3 className="font-semibold">الطلبات المعلقة</h3>

              <p className="text-xs text-gray-500">تحتاج للمراجعة</p>
            </div>
          </div>

          <span className="text-xl font-bold text-[#670047]">١٤</span>
        </div>

        <div
          className="
            flex items-center justify-between
            rounded-2xl
            border
            border-gray-200
            p-4
            transition-all
            duration-300
            hover:border-[#7C3AED]
            hover:shadow-md
          "
        >
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-amber-50 p-2 text-amber-500">
              <AlertTriangle size={18} />
            </div>

            <div className="text-right">
              <h3 className="font-semibold">مخزون منخفض</h3>

              <p className="text-xs text-gray-500">منتجات تحتاج إعادة تعبئة</p>
            </div>
          </div>

          <span className="text-xl font-bold text-[#670047]">٦</span>
        </div>

        <div
          className="
            flex items-center justify-between
            rounded-2xl
            border
            border-gray-200
            p-4
            transition-all
            duration-300
            hover:border-[#7C3AED]
            hover:shadow-md
          "
        >
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-green-50 p-2 text-green-600">
              <Activity size={18} />
            </div>

            <div className="text-right">
              <h3 className="font-semibold">حالة النظام</h3>

              <p className="text-xs text-gray-500">جميع الخدمات تعمل</p>
            </div>
          </div>

          <span className="flex items-center gap-2 text-sm font-semibold text-green-600">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            يعمل
          </span>
        </div>
      </div>
    </ChartCard>
  );
}
