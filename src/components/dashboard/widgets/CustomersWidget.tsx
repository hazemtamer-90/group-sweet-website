"use client";

import { Users } from "lucide-react";
import StatCard from "../cards/StatCard";

export default function CustomersWidget() {
  return (
    <StatCard
      title="العملاء"
      value="٣٬٥٤٨"
      subtitle="زيادة ١٢٪"
      trend="هذا الأسبوع"
      progress={83}
      footer="تم تسجيل ١٤٧ عميلًا جديدًا."
      icon={Users}
      iconColor="#059669"
      iconBackground="bg-emerald-100"
    />
  );
}