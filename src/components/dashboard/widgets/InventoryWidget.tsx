"use client";

import { Package } from "lucide-react";
import StatCard from "../cards/StatCard";

export default function InventoryWidget() {
  return (
    <StatCard
      title="المخزون"
      value="٩٦ منتج"
      subtitle="جاهزية ممتازة"
      trend="المستودع الرئيسي"
      progress={91}
      footer="١٢ منتجًا يحتاج إعادة تزويد قريبًا."
      icon={Package}
      iconColor="#D97706"
      iconBackground="bg-amber-100"
    />
  );
}