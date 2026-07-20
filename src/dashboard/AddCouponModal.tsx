"use client";

import { useState } from "react";
import P from "@/lib/dashboard/palette";

export interface Coupon {
  id: string;
  code: string;
  discount: number;
  start: string;
  end: string;
  status: "نشط" | "منتهي";
}

interface Props {
  open: boolean;
  onClose: () => void;
  onAdd: (coupon: Coupon) => void;
}

export default function AddCouponModal({ open, onClose, onAdd }: Props) {
  const [code, setCode] = useState("");
  const [discount, setDiscount] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  if (!open) return null;

  const submit = () => {
    if (code.trim() === "" || discount === "" || start === "" || end === "") {
      return;
    }

    onAdd({
      id: Date.now().toString(),
      code: code.toUpperCase(),
      discount: Number(discount),
      start,
      end,
      status: "نشط",
    });

    setCode("");
    setDiscount("");
    setStart("");
    setEnd("");

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div
        className="w-full max-w-md rounded-2xl p-6 shadow-2xl"
        style={{ background: P.surface }}
      >
        <h2 className="text-2xl font-bold mb-6" style={{ color: P.text }}>
          إضافة كوبون جديد
        </h2>

        <div className="space-y-4">
          <input
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="كود الكوبون"
            className="w-full border rounded-xl p-3 outline-none"
          />

          <input
            type="number"
            min={1}
            max={100}
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
            placeholder="نسبة الخصم %"
            className="w-full border rounded-xl p-3 outline-none"
          />

          <input
            type="date"
            value={start}
            onChange={(e) => setStart(e.target.value)}
            className="w-full border rounded-xl p-3 outline-none"
          />

          <input
            type="date"
            value={end}
            onChange={(e) => setEnd(e.target.value)}
            className="w-full border rounded-xl p-3 outline-none"
          />
        </div>

        <div className="flex justify-end gap-3 mt-8">
          <button onClick={onClose} className="px-5 py-2 rounded-xl border">
            إلغاء
          </button>

          <button
            onClick={submit}
            className="px-5 py-2 rounded-xl text-white"
            style={{ background: P.primary }}
          >
            إضافة
          </button>
        </div>
      </div>
    </div>
  );
}
