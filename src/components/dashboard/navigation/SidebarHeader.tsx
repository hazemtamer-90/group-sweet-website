"use client";

import Image from "next/image";
import clsx from "clsx";

interface SidebarHeaderProps {
  collapsed?: boolean;
}

export default function SidebarHeader({
  collapsed = false,
}: SidebarHeaderProps) {
  return (
    <div
      className={clsx(
        "border-b border-gray-200/70 pb-6 transition-all duration-300",
        collapsed && "flex justify-center",
      )}
    >
      {collapsed ? (
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#670047] to-[#8A005F] shadow-lg">
          <Image
            src="/images/logo/logo.png"
            alt="Group Sweet"
            width={30}
            height={30}
            className="object-contain"
          />
        </div>
      ) : (
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#670047] to-[#8A005F] shadow-xl">
            <Image
              src="/images/logo/logo.png"
              alt="Group Sweet"
              width={38}
              height={38}
              className="object-contain"
            />
          </div>

          <div className="flex-1">
            <h2 className="text-lg font-extrabold text-gray-900">
              Group Sweet
            </h2>

            <p className="mt-1 text-sm text-gray-500">لوحة التحكم</p>

            <div className="mt-3 flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />

              <span className="text-xs font-medium text-emerald-600">
                النظام متصل
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
