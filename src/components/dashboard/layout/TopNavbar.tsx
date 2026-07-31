"use client";

import { useMemo } from "react";
import { usePathname } from "next/navigation";

import { Menu, Bell, Search, Settings } from "lucide-react";

import Avatar from "../design-system/Avatar";
import Badge from "../design-system/Badge";
import IconButton from "../design-system/IconButton";

interface TopNavbarProps {
  onMenuClick?: () => void;
}

export default function TopNavbar({ onMenuClick }: TopNavbarProps) {
  const pathname = usePathname();

  const pageTitle = useMemo(() => {
    switch (pathname) {
      case "/dashboard":
        return "لوحة التحكم";

      case "/dashboard/products":
        return "المنتجات";

      case "/dashboard/orders":
        return "الطلبات";

      case "/dashboard/customers":
        return "العملاء";

      case "/dashboard/b2b":
        return "طلبات الشركات";

      case "/dashboard/reports":
        return "التقارير";

      case "/dashboard/marketing":
        return "التسويق";

      case "/dashboard/settings":
        return "الإعدادات";

      default:
        return "لوحة التحكم";
    }
  }, [pathname]);

  return (
    <header
      className="
        sticky
        top-0
        z-40
        border-b
        border-gray-200/70
        bg-white/80
        backdrop-blur-xl
      "
    >
      <div className="flex h-20 items-center justify-between px-4 md:px-8">
        <div className="flex items-center gap-4">
          <button
            onClick={onMenuClick}
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-xl
              bg-gray-100
              transition
              hover:bg-[#670047]
              hover:text-white
              lg:hidden
            "
          >
            <Menu size={22} />
          </button>

          <div>
            <p className="text-sm font-medium text-gray-400">Group Sweet</p>

            <h1 className="mt-1 text-xl font-bold text-gray-900 md:text-2xl">
              {pageTitle}
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative hidden lg:block">
            <Search
              size={18}
              className="
                absolute
                right-4
                top-1/2
                -translate-y-1/2
                text-gray-400
              "
            />

            <input
              type="text"
              placeholder="ابحث عن منتج أو طلب..."
              className="
                h-12
                w-80
                rounded-2xl
                border
                border-gray-200
                bg-gray-50
                pr-12
                pl-4
                text-sm
                outline-none
                transition
                focus:border-[#670047]
                focus:bg-white
              "
            />
          </div>
          <div className="relative">
            <IconButton
              icon={<Bell size={19} />}
              className="hover:bg-[#670047] hover:text-white"
            />

            <div className="absolute -right-1 -top-1">
              <Badge variant="danger">5</Badge>
            </div>
          </div>

          <div className="relative hidden sm:block">
            <IconButton
              icon={<Settings size={19} />}
              className="hover:bg-[#670047] hover:text-white"
            />
          </div>

          <div className="hidden h-10 w-px bg-gray-200 md:block" />

          <div className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white px-3 py-2 shadow-sm transition hover:shadow-md">
            <Avatar name="Admin" size="md" />

            <div className="hidden text-right md:block">
              <h3 className="text-sm font-bold text-gray-900">مدير النظام</h3>

              <p className="text-xs text-gray-500">admin@groupsweet.com</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
