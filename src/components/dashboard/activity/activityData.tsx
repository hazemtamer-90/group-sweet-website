import {
  ShoppingCart,
  Package,
  Users,
  Building2,
} from "lucide-react";

export const activities = [
  {
    id: 1,
    title: "طلب جديد",
    description: "قام أحمد محمد بطلب بوكس فاخر.",
    time: "منذ دقيقتين",
    icon: ShoppingCart,
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: 2,
    title: "تحديث المخزون",
    description: "تمت إضافة 150 قطعة ملبن بندق.",
    time: "منذ 12 دقيقة",
    icon: Package,
    color: "bg-amber-100 text-amber-600",
  },
  {
    id: 3,
    title: "عميل جديد",
    description: "تم تسجيل شركة النيل التجارية.",
    time: "منذ ساعة",
    icon: Users,
    color: "bg-green-100 text-green-600",
  },
  {
    id: 4,
    title: "طلب شركة",
    description: "طلب جديد يحتوي على 250 علبة هدايا.",
    time: "أمس",
    icon: Building2,
    color: "bg-purple-100 text-purple-600",
  },
];