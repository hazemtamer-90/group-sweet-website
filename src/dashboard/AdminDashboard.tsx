"use client";

import { useEffect, useRef, useState } from "react";

import Sidebar from "@/dashboard/Sidebar";
import TopNav from "@/dashboard/TopNav";
import Card from "@/dashboard/Cards";
import KpiCard from "@/dashboard/KpiCard";
import SectionHeader from "@/dashboard/SectionHeader";
import Tables from "@/dashboard/Tables";

import SVGAreaChart from "@/dashboard/Charts/AreaChart";
import SVGDonutChart from "@/dashboard/Charts/DonutChart";

import { StatusBadge, MiniSparkline } from "@/lib/dashboard/helpers";

import P from "@/lib/dashboard/palette";

import {
  revenueWeek,
  revenueMonth,
  revenueYear,
  orderStatus,
  bestProducts,
  latestOrders,
  inventory,
  topCustomers,
  corporateClients,
  notifications,
} from "@/lib/dashboard/data";

import {
  DollarSign,
  ShoppingBag,
  Users,
  Package2,
  ArrowUpRight,
  Clock,
  TrendingUp,
  Download,
  Plus,
  ChevronLeft,
  Filter,
  Eye,
  Edit2,
  MoreHorizontal,
  UserPlus,
  Sparkles,
  Package,
  Ticket,
  Printer,
} from "lucide-react";
export default function AdminDashboard() {
  const [profileOpen, setProfileOpen] = useState(false);

  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        profileRef.current &&
        !profileRef.current.contains(e.target as Node)
      ) {
        setProfileOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const [collapsed, setCollapsed] = useState(false);
  const [dark, setDark] = useState(false);

  const [activeSection, setActiveSection] = useState("dashboard");

  const [timeframe, setTimeframe] = useState<"week" | "month" | "year">("week");

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const bg = dark ? P.darkBg : P.bg;
  const text = dark ? P.darkText : P.text;
  const muted = dark ? P.darkMuted : P.muted;
  const border = dark ? P.darkBorder : P.border;

  const chartData =
    timeframe === "week"
      ? revenueWeek
      : timeframe === "month"
        ? revenueMonth
        : revenueYear;

  return (
    <div
      className="flex h-screen overflow-hidden"
      style={{
        background: bg,
        direction: "rtl",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <div
        className={`hidden md:flex transition-all duration-300 ${
          collapsed ? "w-[70px]" : "w-[250px]"
        }`}
      >
        <Sidebar
          collapsed={collapsed}
          active={activeSection}
          onSelect={setActiveSection}
          dark={dark}
        />
      </div>
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden flex">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div className="relative z-50 w-64">
            <Sidebar
              collapsed={false}
              active={activeSection}
              onSelect={(id: string) => {
                setActiveSection(id);
                setMobileMenuOpen(false);
              }}
              dark={dark}
            />
          </div>
        </div>
      )}
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopNav
          dark={dark}
          onToggleDark={() => setDark(!dark)}
          onToggleSidebar={() => {
            if (window.innerWidth < 768) {
              setMobileMenuOpen(!mobileMenuOpen);
            } else {
              setCollapsed(!collapsed);
            }
          }}
        />

        <main className="flex-1 overflow-y-auto p-6 space-y-6">
          <h1 className="text-2xl font-bold" style={{ color: text }}>
            لوحة التحكم
          </h1>

          <div className="grid grid-cols-2 xl:grid-cols-6 gap-4">
            <KpiCard
              title="إجمالي الإيرادات"
              value="890,400 ج"
              change="+12.5%"
              positive
              icon={DollarSign}
              iconBg={P.primaryLt}
              iconColor={P.primary}
              dark={dark}
            />

            <KpiCard
              title="طلبات اليوم"
              value="47"
              change="+8.3%"
              positive
              icon={ShoppingBag}
              iconBg={P.infoLt}
              iconColor={P.info}
              dark={dark}
            />

            <KpiCard
              title="العملاء"
              value="2,834"
              change="+3.1%"
              positive
              icon={Users}
              iconBg={P.successLt}
              iconColor={P.success}
              dark={dark}
            />

            <KpiCard
              title="المنتجات"
              value="1,247"
              change="+15%"
              positive
              icon={Package2}
              iconBg={P.goldLt}
              iconColor={P.warning}
              dark={dark}
            />

            <KpiCard
              title="متوسط الطلب"
              value="285 ج"
              change="-2%"
              positive={false}
              icon={ArrowUpRight}
              iconBg="#FCE7F3"
              iconColor="#DB2777"
              dark={dark}
            />

            <KpiCard
              title="طلبات معلقة"
              value="23"
              change="+4%"
              positive={false}
              icon={Clock}
              iconBg={P.warningLt}
              iconColor={P.warning}
              dark={dark}
            />
          </div>

          <Card dark={dark}>
            <SectionHeader title="تحليل الإيرادات" dark={dark} />

            <SVGAreaChart data={chartData} dark={dark} />
          </Card>

          <Card dark={dark}>
            <SectionHeader title="حالة الطلبات" dark={dark} />

            <SVGDonutChart data={orderStatus} />
          </Card>
          <Tables dark={dark} />
        </main>
      </div>
    </div>
  );
}
