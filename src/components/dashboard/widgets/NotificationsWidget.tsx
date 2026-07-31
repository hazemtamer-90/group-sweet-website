"use client";

import { Bell, Package, ShoppingCart, Users, ArrowUpRight } from "lucide-react";

import ChartCard from "../cards/ChartCard";

const notifications = [
  {
    icon: ShoppingCart,
    title: "تم استلام ١٢ طلبًا جديدًا",
    time: "منذ ٥ دقائق",
    color: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    icon: Users,
    title: "انضم ٥ عملاء جدد",
    time: "منذ ٢٠ دقيقة",
    color: "bg-violet-100",
    iconColor: "text-violet-600",
  },
  {
    icon: Package,
    title: "تم تحديث المخزون",
    time: "منذ ساعة",
    color: "bg-emerald-100",
    iconColor: "text-emerald-600",
  },
];

export default function NotificationsWidget() {
  return (
    <ChartCard title="الإشعارات" subtitle="آخر الأنشطة">
      <div className="space-y-4">
        {notifications.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="group flex items-center justify-between rounded-2xl border border-gray-100 p-4 transition-all duration-300 hover:border-[#670047]/20 hover:bg-gray-50"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl ${item.color}`}
                >
                  <Icon size={22} className={item.iconColor} />
                </div>

                <div>
                  <p className="font-semibold text-gray-800">{item.title}</p>

                  <p className="mt-1 text-sm text-gray-500">{item.time}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Bell size={18} className="text-gray-300" />

                <ArrowUpRight
                  size={18}
                  className="text-gray-300 transition-all duration-300 group-hover:text-[#670047]"
                />
              </div>
            </div>
          );
        })}
      </div>
    </ChartCard>
  );
}
