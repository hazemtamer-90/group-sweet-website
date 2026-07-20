"use client";

import Link from "next/link";
import { Shield } from "lucide-react";

export default function AdminButton() {
  return (
    <Link
      href="/ar/dashboard"
      className="
      fixed
      bottom-6
      right-6
      z-[999]
      flex
      items-center
      gap-2
      px-5
      py-3
      rounded-full
      bg-violet-600
      text-white
      shadow-2xl
      hover:bg-violet-700
      transition
      "
    >
      <Shield size={18} />
      Admin
    </Link>
  );
}
