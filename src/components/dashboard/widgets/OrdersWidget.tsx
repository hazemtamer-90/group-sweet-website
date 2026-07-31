"use client";

import { ShoppingBag } from "lucide-react";
import StatCard from "../cards/StatCard";

export default function OrdersWidget() {
  return (
    <StatCard
      title="الطلبات"
      value="١٬٢٨٤"
      subtitle="زيادة ٩٫٤٪"
      trend="آخر ٣٠ يوم"
      progress={64}
      footer="تم تنفيذ ٨٢٤ طلبًا بنجاح."
      icon={ShoppingBag}
      iconColor="#2563EB"
      iconBackground="bg-blue-100"
    />
  );
}