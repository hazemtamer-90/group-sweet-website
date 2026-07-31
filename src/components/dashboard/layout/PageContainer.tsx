"use client";

import { ReactNode } from "react";

interface PageContainerProps {
  children: ReactNode;
}

export default function PageContainer({
  children,
}: PageContainerProps) {
  return (
    <main className="flex-1 overflow-y-auto bg-[#F7F8FC] p-8">
      <div className="mx-auto w-full max-w-[1600px]">
        {children}
      </div>
    </main>
  );
}