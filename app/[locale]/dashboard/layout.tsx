"use client";

import { useEffect, type ReactNode } from "react";
import { useRouter } from "next/navigation";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    const isAuth = localStorage.getItem("admin-auth");

    if (isAuth !== "true") {
      router.replace("/ar/admin");
    }
  }, [router]);

  return <>{children}</>;
}
