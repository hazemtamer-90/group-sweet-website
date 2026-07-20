"use client";

import { ShoppingBag, AlertTriangle, Star, Building2 } from "lucide-react";

import P from "@/lib/dashboard/palette";

interface Props {
  dark: boolean;
}

const notifications = [
  {
    id: 1,
    title: "طلب جديد",
    message: "تم استلام طلب جديد رقم #1054",
    time: "منذ دقيقتين",
    color: "#2563EB",
    icon: ShoppingBag,
  },
  {
    id: 2,
    title: "مخزون منخفض",
    message: "سمسمية ذهبية أوشكت على النفاد",
    time: "منذ 10 دقائق",
    color: "#F59E0B",
    icon: AlertTriangle,
  },
  {
    id: 3,
    title: "تقييم جديد",
    message: "تمت إضافة تقييم 5 نجوم",
    time: "منذ ساعة",
    color: "#10B981",
    icon: Star,
  },
  {
    id: 4,
    title: "طلب شركة",
    message: "شركة النيل أرسلت طلب جديد",
    time: "اليوم",
    color: "#7C3AED",
    icon: Building2,
  },
];

export default function Notifications({ dark }: Props) {
  return (
    <div
      className="rounded-2xl p-5"
      style={{
        background: dark ? P.darkSurface : P.surface,
      }}
    >
      <div className="flex items-center justify-between mb-5">
        <h3
          className="text-lg font-bold"
          style={{
            color: dark ? P.darkText : P.text,
          }}
        >
          الإشعارات
        </h3>

        <span
          className="text-xs"
          style={{
            color: dark ? P.darkMuted : P.muted,
          }}
        >
          {notifications.length} جديد
        </span>
      </div>

      <div className="space-y-4">
        {notifications.map((item) => {
          const Icon = item.icon;

          return (
            <div key={item.id} className="flex items-start gap-3">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center"
                style={{
                  background: `${item.color}20`,
                }}
              >
                <Icon size={20} color={item.color} />
              </div>

              <div className="flex-1">
                <p
                  className="font-semibold text-sm"
                  style={{
                    color: dark ? P.darkText : P.text,
                  }}
                >
                  {item.title}
                </p>

                <p
                  className="text-sm mt-1"
                  style={{
                    color: dark ? P.darkMuted : P.muted,
                  }}
                >
                  {item.message}
                </p>

                <span
                  className="text-xs mt-2 block"
                  style={{
                    color: dark ? P.darkMuted : P.muted,
                  }}
                >
                  {item.time}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
