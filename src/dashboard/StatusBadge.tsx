"use client";

import P from "@/lib/dashboard/palette";

interface Props {
  status: string;
}

export default function StatusBadge({ status }: Props) {
  const map: Record<
    string,
    {
      bg: string;
      text: string;
      label: string;
    }
  > = {
    "تسليم": {
      bg: "#DCFCE7",
      text: "#15803D",
      label: "تم التسليم",
    },

    "شحن": {
      bg: "#DBEAFE",
      text: "#1D4ED8",
      label: "في الشحن",
    },

    "تحضير": {
      bg: P.primaryLt,
      text: P.primary,
      label: "قيد التحضير",
    },

    "مؤكد": {
      bg: "#FEF9C3",
      text: "#92400E",
      label: "مؤكد",
    },

    "ملغي": {
      bg: "#FEE2E2",
      text: "#B91C1C",
      label: "ملغي",
    },

    "معلق": {
      bg: "#FEF3C7",
      text: "#B45309",
      label: "معلق",
    },

    "مدفوع": {
      bg: "#DCFCE7",
      text: "#15803D",
      label: "مدفوع",
    },
  };

  const s = map[status] ?? {
    bg: "#F3F4F6",
    text: "#374151",
    label: status,
  };

  return (
    <span
      className="px-2.5 py-1 rounded-full text-xs font-semibold"
      style={{
        backgroundColor: s.bg,
        color: s.text,
      }}
    >
      {s.label}
    </span>
  );
}