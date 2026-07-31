"use client";

import { useState } from "react";

import Sidebar from "./Sidebar";
import MobileSidebar from "./MobileSidebar";
import TopNavbar from "./TopNavbar";
import PageContainer from "./PageContainer";
import MainContent from "./MainContent";

export default function DashboardShell() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F6F7FB]">
      <MobileSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex min-h-screen">
        <div className="hidden lg:block">
          <Sidebar />
        </div>

        <div className="flex min-h-screen flex-1 flex-col overflow-hidden">
          <TopNavbar onMenuClick={() => setSidebarOpen(true)} />

          <PageContainer>
            <MainContent />
          </PageContainer>
        </div>
      </div>
    </div>
  );
}
