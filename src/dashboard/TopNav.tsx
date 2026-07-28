"use client";

import { useEffect, useRef, useState } from "react";

import {
  Search,
  Calendar,
  MessageSquare,
  Bell,
  Sun,
  Moon,
  Menu,
  ChevronDown,
  LogOut,
  User,
  Settings,
} from "lucide-react";

import P from "@/lib/dashboard/palette";

interface TopNavProps {
  dark: boolean;
  onToggleDark: () => void;
  onToggleSidebar: () => void;
  onExit?: () => void;
}

export default function TopNav({
  dark,
  onToggleDark,
  onToggleSidebar,
  onExit,
}: TopNavProps) {
  const bg = dark ? P.darkSurface : P.surface;
  const border = dark ? P.darkBorder : P.border;
  const text = dark ? P.darkText : P.text;
  const muted = dark ? P.darkMuted : P.muted;
  const inputBg = dark ? "#2D3148" : P.bg;

  const [profileOpen, setProfileOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);

  const profileRef = useRef<HTMLDivElement>(null);
  const notificationRef = useRef<HTMLDivElement>(null);
  const [messagesOpen, setMessagesOpen] = useState(false);
  const [calendarOpen, setCalendarOpen] = useState(false);

  const messagesRef = useRef<HTMLDivElement>(null);
  const calendarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        profileRef.current &&
        !profileRef.current.contains(e.target as Node)
      ) {
        setProfileOpen(false);
      }

      if (
        notificationRef.current &&
        !notificationRef.current.contains(e.target as Node)
      ) {
        setNotificationOpen(false);
      }
      if (
        messagesRef.current &&
        !messagesRef.current.contains(e.target as Node)
      ) {
        setMessagesOpen(false);
      }
      if (
        calendarRef.current &&
        !calendarRef.current.contains(e.target as Node)
      ) {
        setCalendarOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className="sticky top-0 z-50 flex h-16 items-center gap-3 px-6 backdrop-blur-xl"
      style={{
        background: bg,
        borderBottom: `1px solid ${border}`,
      }}
    >
      <button
        onClick={onToggleSidebar}
        className="rounded-xl p-2 transition-all hover:scale-105 hover:bg-[#670047]/10"
        style={{ color: muted }}
      >
        <Menu size={18} />
      </button>

      <div className="relative flex-1 max-w-md">
        <Search
          size={15}
          className="absolute right-3 top-1/2 -translate-y-1/2"
          style={{ color: muted }}
        />

        <input
          placeholder="ابحث عن طلب، منتج أو عميل..."
          className="w-full rounded-2xl py-3 pr-10 pl-4 text-sm transition outline-none focus:ring-2 focus:ring-[#670047]"
          style={{
            background: inputBg,
            border: `1px solid ${border}`,
            color: text,
          }}
        />
      </div>

      <div className="mr-auto flex items-center gap-2">
        {" "}
        <div className="relative" ref={messagesRef}>
          <button
            onClick={() => setMessagesOpen(!messagesOpen)}
            className="rounded-xl p-2 transition-all hover:scale-105 hover:bg-[#670047]/10"
            style={{ color: muted }}
          >
            <MessageSquare size={18} />
          </button>

          {messagesOpen && (
            <div
              className="absolute left-0 mt-3 w-80 overflow-hidden rounded-2xl bg-white shadow-2xl z-50"
              style={{
                border: `1px solid ${border}`,
              }}
            >
              <div className="border-b px-5 py-4 font-bold">الرسائل</div>

              <div className="divide-y">
                <div className="cursor-pointer px-5 py-4 hover:bg-gray-50">
                  <p className="font-semibold">أحمد محمد</p>

                  <p className="text-sm text-gray-500">
                    عندي استفسار عن الطلب.
                  </p>
                </div>

                <div className="cursor-pointer px-5 py-4 hover:bg-gray-50">
                  <p className="font-semibold">شركة النيل</p>

                  <p className="text-sm text-gray-500">نريد عرض أسعار جديد.</p>
                </div>

                <div className="cursor-pointer px-5 py-4 hover:bg-gray-50">
                  <p className="font-semibold">سارة</p>

                  <p className="text-sm text-gray-500">
                    شكراً على سرعة التوصيل ❤️
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="relative" ref={calendarRef}>
          <button
            onClick={() => setCalendarOpen(!calendarOpen)}
            className="rounded-xl p-2 transition-all hover:scale-105 hover:bg-[#670047]/10"
            style={{ color: muted }}
          >
            <Calendar size={18} />
          </button>

          {calendarOpen && (
            <div
              className="absolute left-0 mt-3 w-72 rounded-2xl bg-white shadow-2xl z-50"
              style={{
                border: `1px solid ${border}`,
              }}
            >
              <div className="border-b px-5 py-4 font-bold">التقويم</div>

              <div className="space-y-3 p-5 text-sm">
                <div className="flex justify-between">
                  <span>اليوم</span>
                  <span>28 يوليو</span>
                </div>

                <div className="flex justify-between">
                  <span>اجتماع الإدارة</span>
                  <span>11:00</span>
                </div>

                <div className="flex justify-between">
                  <span>شحن الطلبات</span>
                  <span>2:00</span>
                </div>

                <div className="flex justify-between">
                  <span>مراجعة المخزون</span>
                  <span>5:00</span>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="relative" ref={notificationRef}>
          <button
            onClick={() => setNotificationOpen(!notificationOpen)}
            className="relative rounded-xl p-2 transition-all hover:scale-105 hover:bg-[#670047]/10"
            style={{ color: muted }}
          >
            <Bell size={18} />

            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
              3
            </span>
          </button>

          {notificationOpen && (
            <div
              className="absolute left-0 mt-3 w-80 overflow-hidden rounded-2xl bg-white shadow-2xl z-50"
              style={{
                border: `1px solid ${border}`,
              }}
            >
              <div className="border-b px-5 py-4 font-bold">الإشعارات</div>

              <div className="divide-y">
                <div className="px-5 py-4 hover:bg-gray-50 cursor-pointer">
                  🛒 طلب جديد رقم #1548
                </div>

                <div className="px-5 py-4 hover:bg-gray-50 cursor-pointer">
                  📦 منتج أوشك على النفاد
                </div>

                <div className="px-5 py-4 hover:bg-gray-50 cursor-pointer">
                  ⭐ تقييم جديد من عميل
                </div>
              </div>
            </div>
          )}
        </div>
        <button
          onClick={onToggleDark}
          className="rounded-xl p-2 transition-all hover:scale-105 hover:bg-[#670047]/10"
          style={{ color: muted }}
        >
          {dark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        <div ref={profileRef} className="relative">
          <button
            onClick={() => setProfileOpen(!profileOpen)}
            className="flex cursor-pointer items-center gap-3 rounded-2xl px-3 py-2 transition hover:bg-[#670047]/5"
            style={{
              border: `1px solid ${border}`,
            }}
          >
            <div
              className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold text-white"
              style={{
                background: P.primary,
              }}
            >
              GS
            </div>

            <span
              className="hidden sm:block text-sm"
              style={{
                color: text,
              }}
            >
              مدير النظام
            </span>

            <ChevronDown
              size={14}
              style={{
                color: muted,
              }}
            />
          </button>

          {profileOpen && (
            <div
              className="absolute left-0 mt-3 w-56 overflow-hidden rounded-2xl bg-white shadow-2xl z-50"
              style={{
                border: `1px solid ${border}`,
              }}
            >
              {" "}
              <button className="flex w-full items-center gap-3 px-4 py-3 text-right transition hover:bg-gray-50">
                <User size={17} />
                <span>الملف الشخصي</span>
              </button>
              <button className="flex w-full items-center gap-3 px-4 py-3 text-right transition hover:bg-gray-50">
                <Settings size={17} />
                <span>الإعدادات</span>
              </button>
              <button
                onClick={onExit}
                className="flex w-full items-center gap-3 px-4 py-3 text-right text-red-600 transition hover:bg-red-50"
              >
                <LogOut size={17} />
                <span>تسجيل الخروج</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
