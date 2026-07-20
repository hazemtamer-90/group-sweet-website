"use client";

import {
  LayoutDashboard,
  ShoppingBag,
  Package,
  Grid3X3,
  Boxes,
  Users,
  Building2,
  UserRound,
  TicketPercent,
  Percent,
  Star,
  BarChart3,
  FileText,
  Settings,
  Sparkles,
  LogOut,
} from "lucide-react";

import Link from "next/link";
import { usePathname, useParams } from "next/navigation";
import P from "@/lib/dashboard/palette";

interface SidebarProps {
  collapsed: boolean;
  active: string;
  dark: boolean;
  onSelect: (id: string) => void;
}

const sidebarItems = [
  {
    id: "dashboard",
    label: "لوحة التحكم",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    id: "orders",
    label: "الطلبات",
    href: "/dashboard/orders",
    icon: ShoppingBag,
  },
  {
    id: "products",
    label: "المنتجات",
    href: "/dashboard/products",
    icon: Package,
  },
  {
    id: "categories",
    label: "الأقسام",
    href: "/dashboard/categories",
    icon: Grid3X3,
  },
  {
    id: "inventory",
    label: "المخزون",
    href: "/dashboard/inventory",
    icon: Boxes,
  },
  {
    id: "customers",
    label: "العملاء",
    href: "/dashboard/customers",
    icon: Users,
  },
  {
    id: "b2b",
    label: "عملاء الشركات",
    href: "/dashboard/b2b",
    icon: Users,
  },
  {
    id: "sales-team",
    label: "فريق المبيعات",
    href: "/dashboard/sales-team",
    icon: Users,
  },
  {
    id: "coupons",
    label: "الكوبونات",
    href: "/dashboard/coupons",
    icon: Sparkles,
  },
  {
    id: "offers",
    label: "العروض",
    href: "/dashboard/offers",
    icon: Sparkles,
  },
  {
    id: "reviews",
    label: "التقييمات",
    href: "/dashboard/reviews",
    icon: Sparkles,
  },
  {
    id: "analytics",
    label: "التحليلات",
    href: "/dashboard/analytics",
    icon: LayoutDashboard,
  },
  {
    id: "reports",
    label: "التقارير",
    href: "/dashboard/reports",
    icon: Package,
  },
  {
    id: "settings",
    label: "الإعدادات",
    href: "/dashboard/settings",
    icon: Grid3X3,
  },
];

export default function Sidebar({ collapsed, dark }: SidebarProps) {
  const pathname = usePathname();
  const params = useParams();

  const locale = params.locale as string;

  const bg = dark ? P.darkSurface : P.surface;
  const border = dark ? P.darkBorder : P.border;
  const text = dark ? P.darkText : P.text;
  const muted = dark ? P.darkMuted : P.muted;

  return (
    <div
      className="flex flex-col h-full transition-all duration-300"
      style={{
        width: collapsed ? 70 : 250,
        background: bg,
        borderLeft: `1px solid ${border}`,
      }}
    >
      <div className="flex items-center gap-3 p-4 mb-2 min-h-16">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shadow-md"
          style={{
            background: `linear-gradient(135deg, ${P.primary}, #9B6DE8)`,
          }}
        >
          <Sparkles size={18} className="text-white" />
        </div>

        {!collapsed && (
          <div>
            <h2 className="font-bold text-sm" style={{ color: text }}>
              Group Sweet
            </h2>

            <p className="text-xs" style={{ color: muted }}>
              لوحة الإدارة
            </p>
          </div>
        )}
      </div>

      <nav className="flex-1 overflow-y-auto px-2 space-y-1">
        {sidebarItems.map(({ id, label, href, icon: Icon }) => {
          const fullPath = `/${locale}${href}`;

          return (
            <Link key={id} href={fullPath} className="block">
              <div
                className="flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200"
                style={{
                  background:
                    pathname === fullPath ? P.primaryLt : "transparent",
                  color: pathname === fullPath ? P.primary : muted,
                }}
              >
                <Icon size={18} />

                {!collapsed && (
                  <span className="text-sm font-medium">{label}</span>
                )}
              </div>
            </Link>
          );
        })}
      </nav>

      {!collapsed && (
        <div
          className="m-3 rounded-xl p-3"
          style={{
            background: dark ? "#2D3148" : P.bg,
          }}
        >
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold"
              style={{
                background: P.primary,
              }}
            >
              م
            </div>

            <div className="flex-1 min-w-0">
              <p
                className="text-sm font-semibold truncate"
                style={{ color: text }}
              >
                مدير النظام
              </p>

              <p className="text-xs truncate" style={{ color: muted }}>
                admin@groupsweet.com
              </p>
            </div>

            <LogOut size={16} style={{ color: muted }} />
          </div>
        </div>
      )}
    </div>
  );
}
