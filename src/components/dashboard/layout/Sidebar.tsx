"use client";

import { useMemo, useState } from "react";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  Building2,
  BarChart3,
  Megaphone,
  Settings,
  LucideIcon,
} from "lucide-react";

import SidebarHeader from "../navigation/SidebarHeader";
import SidebarFooter from "../navigation/SidebarFooter";
import SidebarCollapseButton from "../navigation/SidebarCollapseButton";

import NavSection from "../navigation/NavSection";
import NavGroup from "../navigation/NavGroup";
import NavItem from "../navigation/NavItem";

interface NavigationItem {
  title: string;
  href: string;
  icon: LucideIcon;
  badge?: number | string;
}

interface NavigationSection {
  title: string;
  items: NavigationItem[];
}

export default function Sidebar() {
  const pathname = usePathname();

  const [collapsed, setCollapsed] = useState(false);

  const navigation = useMemo<NavigationSection[]>(
    () => [
      {
        title: "الرئيسية",
        items: [
          {
            title: "لوحة التحكم",
            href: "/dashboard",
            icon: LayoutDashboard,
          },
        ],
      },

      {
        title: "إدارة المتجر",
        items: [
          {
            title: "المنتجات",
            href: "/dashboard/products",
            icon: Package,
          },

          {
            title: "الطلبات",
            href: "/dashboard/orders",
            icon: ShoppingCart,
            badge: 12,
          },

          {
            title: "العملاء",
            href: "/dashboard/customers",
            icon: Users,
          },

          {
            title: "طلبات الشركات",
            href: "/dashboard/b2b",
            icon: Building2,
          },
        ],
      },

      {
        title: "التقارير",
        items: [
          {
            title: "الإحصائيات",
            href: "/dashboard/reports",
            icon: BarChart3,
          },

          {
            title: "التسويق",
            href: "/dashboard/marketing",
            icon: Megaphone,
          },
        ],
      },

      {
        title: "النظام",
        items: [
          {
            title: "الإعدادات",
            href: "/dashboard/settings",
            icon: Settings,
          },
        ],
      },
    ],
    [],
  );

  return (
    <aside
      className={`
        relative
        hidden
        lg:flex
        flex-col
        h-screen
        shrink-0
        transition-all
        duration-300
        ease-in-out
        ${collapsed ? "w-24" : "w-72"}
        border-l
        border-white/30
        bg-white/70
        backdrop-blur-2xl
        shadow-2xl
      `}
    >
      <SidebarCollapseButton
        collapsed={collapsed}
        onToggle={() => setCollapsed(!collapsed)}
      />

      <div className="flex h-full flex-col px-5 py-6">
        <SidebarHeader collapsed={collapsed} />

        <div className="mt-8 flex-1 overflow-y-auto pr-1 custom-scrollbar">
          <div className="space-y-8">
            {navigation.map((section) => (
              <NavSection
                key={section.title}
                title={section.title}
                collapsed={collapsed}
              >
                <NavGroup>
                  {section.items.map((item) => (
                    <NavItem
                      key={item.href}
                      title={item.title}
                      href={item.href}
                      icon={item.icon}
                      badge={item.badge}
                      collapsed={collapsed}
                      active={
                        pathname === item.href ||
                        pathname.startsWith(`${item.href}/`)
                      }
                    />
                  ))}
                </NavGroup>
              </NavSection>
            ))}
          </div>
        </div>

        <div className="mt-6 border-t border-gray-200/60 pt-5">
          <SidebarFooter collapsed={collapsed} />
        </div>
      </div>
    </aside>
  );
}
