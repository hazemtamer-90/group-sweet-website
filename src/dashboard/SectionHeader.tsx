"use client";

import { ReactNode } from "react";
import P from "@/lib/dashboard/palette";

interface Props {
  title: string;
  action?: ReactNode;
  dark: boolean;
}

export default function SectionHeader({
  title,
  action,
  dark,
}: Props) {
  return (
    <div className="flex items-center justify-between mb-4">
      <h2
        className="font-bold text-base"
        style={{
          color: dark ? P.darkText : P.text,
        }}
      >
        {title}
      </h2>

      {action}
    </div>
  );
}