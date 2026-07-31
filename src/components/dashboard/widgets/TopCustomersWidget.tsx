"use client";

import { Crown } from "lucide-react";
import MiniStatCard from "../cards/MiniStatCard";

export default function TopCustomersWidget() {
  return (
    <MiniStatCard
      title="أفضل عميل"
      value="Ahmed Ali"
      change={18}
      icon={Crown}
    />
  );
}
