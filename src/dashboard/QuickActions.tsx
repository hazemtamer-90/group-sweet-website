"use client";

import {
  Plus,
  ShoppingBag,
  Users,
  Building2,
  FileText,
} from "lucide-react";

import P from "@/lib/dashboard/palette";

interface Props {
  dark: boolean;
}

const actions = [
  {
    title: "إضافة منتج",
    icon: Plus,
    color: "#7C3AED",
  },
  {
    title: "طلب جديد",
    icon: ShoppingBag,
    color: "#2563EB",
  },
  {
    title: "إضافة عميل",
    icon: Users,
    color: "#10B981",
  },
  {
    title: "طلب شركة",
    icon: Building2,
    color: "#F59E0B",
  },
  {
    title: "إنشاء تقرير",
    icon: FileText,
    color: "#EF4444",
  },
];

export default function QuickActions({
  dark,
}: Props) {
  return (
    <div
      className="rounded-2xl p-5"
      style={{
        background: dark
          ? P.darkSurface
          : P.surface,
      }}
    >
      <h3
        className="text-lg font-bold mb-5"
        style={{
          color: dark
            ? P.darkText
            : P.text,
        }}
      >
        إجراءات سريعة
      </h3>

      <div className="grid grid-cols-2 gap-4">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <button
              key={action.title}
              className="rounded-xl border p-4 transition-all duration-200 hover:scale-105"
              style={{
                borderColor: dark
                  ? P.darkBorder
                  : P.border,
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-3"
                style={{
                  background: `${action.color}20`,
                }}
              >
                <Icon
                  size={22}
                  color={action.color}
                />
              </div>

              <p
                className="font-semibold text-sm"
                style={{
                  color: dark
                    ? P.darkText
                    : P.text,
                }}
              >
                {action.title}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}