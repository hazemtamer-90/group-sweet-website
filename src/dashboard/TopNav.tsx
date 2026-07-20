"use client";

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

  return (
    <header
      className="sticky top-0 z-20 flex items-center gap-3 px-5 h-16"
      style={{
        background: bg,
        borderBottom: `1px solid ${border}`,
      }}
    >      {/* Sidebar Button */}
      <button
        onClick={onToggleSidebar}
        className="p-2 rounded-lg transition"
        style={{ color: muted }}
      >
        <Menu size={18} />
      </button>

      {/* Search */}
      <div className="relative flex-1 max-w-sm">
        <Search
          size={15}
          className="absolute right-3 top-1/2 -translate-y-1/2"
          style={{ color: muted }}
        />

        <input
          placeholder="بحث..."
          className="w-full rounded-xl py-2 pr-9 pl-3 outline-none text-sm"
          style={{
            background: inputBg,
            border: `1px solid ${border}`,
            color: text,
          }}
        />
      </div>

      <div className="mr-auto flex items-center gap-1">        {[Calendar, MessageSquare].map((Icon, index) => (
          <button
            key={index}
            className="p-2 rounded-lg transition"
            style={{ color: muted }}
          >
            <Icon size={18} />
          </button>
        ))}

        <button
          className="relative p-2 rounded-lg transition"
          style={{ color: muted }}
        >
          <Bell size={18} />

          <span
            className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full"
            style={{
              background: P.danger,
            }}
          />
        </button>

        <button
          onClick={onToggleDark}
          className="p-2 rounded-lg transition"
          style={{ color: muted }}
        >
          {dark ? <Sun size={18} /> : <Moon size={18} />}
        </button>        <div
          className="flex items-center gap-2 px-2 py-1 rounded-xl"
          style={{
            border: `1px solid ${border}`,
          }}
        >
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold"
            style={{
              background: P.primary,
            }}
          >
            م
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
            size={13}
            style={{
              color: muted,
            }}
          />
        </div>

        <button
          onClick={onExit}
          className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-lg text-xs"
          style={{
            background: dark ? "#2D3148" : P.bg,
            border: `1px solid ${border}`,
            color: muted,
          }}
        >
          <LogOut size={14} />
          خروج
        </button>
      </div>
    </header>
  );
}