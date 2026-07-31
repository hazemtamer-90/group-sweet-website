"use client";

import Image from "next/image";
import clsx from "clsx";
import { LogOut } from "lucide-react";

interface SidebarFooterProps {
  collapsed?: boolean;
}

export default function SidebarFooter({
  collapsed = false,
}: SidebarFooterProps) {
  return (
    <div
      className={clsx(
        "rounded-3xl border border-gray-200/70 bg-gradient-to-br from-white to-gray-50 p-4 shadow-sm transition-all duration-300",
        collapsed && "p-3",
      )}
    >
      {collapsed ? (
        <button className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#670047] text-white transition hover:scale-105 hover:bg-[#54003a]">
          <LogOut size={20} />
        </button>
      ) : (
        <>
          <div className="flex items-center gap-3">
            <div className="relative h-14 w-14 overflow-hidden rounded-2xl">
              <Image
                src="/images/admin.jpg"
                alt="Admin"
                fill
                className="object-cover"
              />
            </div>

            <div className="flex-1">
              <h3 className="font-bold text-gray-900">مدير النظام</h3>

              <p className="mt-1 text-sm text-gray-500">admin@groupsweet.com</p>
            </div>
          </div>

          <button className="mt-5 flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-[#670047] font-semibold text-white transition-all duration-300 hover:bg-[#54003a] hover:shadow-lg hover:shadow-[#670047]/30">
            <LogOut size={18} />
            تسجيل الخروج
          </button>
        </>
      )}
    </div>
  );
}
