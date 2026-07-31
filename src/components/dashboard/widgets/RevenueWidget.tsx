"use client";

import { DollarSign } from "lucide-react";
import StatCard from "../cards/StatCard";

export default function RevenueWidget() {
  return (
    <StatCard
      title="الإيرادات"
      value="٢٤٨٬٦٠٠ ج.م"
      subtitle="زيادة ١٨٫٦٪"
      trend="هذا الشهر"
      progress={78}
      footer="تم تحقيق ٧٨٪ من هدف الإيرادات الشهري."
      icon={DollarSign}
      iconColor="#670047"
      iconBackground="bg-[#670047]/10"
    />
  );
}