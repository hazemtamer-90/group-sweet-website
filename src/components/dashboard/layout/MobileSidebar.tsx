"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import {
  X,
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  Building2,
  BarChart3,
  Megaphone,
  Settings,
  LogOut,
  LucideIcon,
} from "lucide-react";

interface MobileSidebarProps {
  open?: boolean;
  onClose?: () => void;
}

interface NavItem {
  title: string;
  href: string;
  icon: LucideIcon;
  badge?: number | string;
}

export default function MobileSidebar({
  open = false,
  onClose,
}: MobileSidebarProps) {
  const pathname = usePathname();

  if (!open) return null;

  const navigation: NavItem[] = [
    {
      title: "لوحة التحكم",
      href: "/dashboard",
      icon: LayoutDashboard,
    },

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

    {
      title: "الإعدادات",
      href: "/dashboard/settings",
      icon: Settings,
    },
  ];

  return (
    <div className="fixed inset-0 z-[100] lg:hidden">
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
      />

      <aside
        className="
          absolute
          right-0
          top-0
          flex
          h-full
          w-[320px]
          max-w-[88vw]
          flex-col
          bg-white
          shadow-2xl
          animate-in
          slide-in-from-right
          duration-300
        "
      >
        <div className="border-b border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <button
              onClick={onClose}
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-xl
                bg-gray-100
                transition
                hover:bg-gray-200
              "
            >
              <X size={22} />
            </button>

            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#670047] to-[#8A005F]">
                <Image
                  src="/images/logo/logo.png"
                  alt="Group Sweet"
                  width={42}
                  height={42}
                  className="object-contain"
                />
              </div>

              <div>
                <h2 className="text-lg font-bold">Group Sweet</h2>

                <p className="text-sm text-gray-500">لوحة التحكم</p>

                <div className="mt-2 flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-green-500" />

                  <span className="text-xs text-green-600">النظام متصل</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-6 space-y-2">
          {navigation.map((item) => {
            const Icon = item.icon;

            const active =
              pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={`
        group
        relative
        mb-2
        flex
        items-center
        gap-4
        rounded-2xl
        px-4
        py-4
        transition-all
        duration-300
        ${
          active
            ? "bg-[#670047] text-white shadow-lg shadow-[#670047]/30"
            : "text-gray-700 hover:bg-[#670047]/10 hover:text-[#670047]"
        }
      `}
              >
                {active && (
                  <span className="absolute right-0 top-3 bottom-3 w-1 rounded-full bg-[#D4AF37]" />
                )}

                <div
                  className={`
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-xl
          transition-all
          ${active ? "bg-white/15" : "bg-gray-100 group-hover:bg-white"}
        `}
                >
                  <Icon
                    size={20}
                    className={
                      active
                        ? "text-white"
                        : "text-gray-600 group-hover:text-[#670047]"
                    }
                  />
                </div>

                <span className="flex-1 text-base font-semibold">
                  {item.title}
                </span>

                {item.badge && (
                  <span
                    className={`
            rounded-full
            px-3
            py-1
            text-xs
            font-bold
            ${active ? "bg-white text-[#670047]" : "bg-[#670047] text-white"}
          `}
                  >
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </div>

        <div className="border-t border-gray-200 p-5">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#670047] to-[#8A005F] text-xl font-bold text-white">
              A
            </div>

            <div className="flex-1">
              <h3 className="font-bold text-gray-900">مدير النظام</h3>

              <p className="text-sm text-gray-500">admin@groupsweet.com</p>
            </div>
          </div>

          <button
            className="
      flex
      w-full
      items-center
      justify-center
      gap-2
      rounded-2xl
      bg-[#670047]
      px-4
      py-3
      font-semibold
      text-white
      transition-all
      hover:bg-[#54003a]
    "
          >
            <LogOut size={18} />
            تسجيل الخروج
          </button>
        </div>
      </aside>
    </div>
  );
}
