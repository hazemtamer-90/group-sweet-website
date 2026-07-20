"use client";

import { useState } from "react";
import P from "@/lib/dashboard/palette";

export interface Offer {
  id: string;
  title: string;
  discount: number;
  start: string;
  end: string;
  status: "نشط" | "منتهي";
}

interface Props {
  open: boolean;
  onClose: () => void;
  onAdd: (offer: Offer) => void;
}

export default function AddOfferModal({ open, onClose, onAdd }: Props) {
  const [title, setTitle] = useState("");
  const [discount, setDiscount] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  if (!open) return null;

  const submit = () => {
    if (!title.trim() || !discount || !start || !end) return;

    onAdd({
      id: Date.now().toString(),
      title,
      discount: Number(discount),
      start,
      end,
      status: "نشط",
    });

    setTitle("");
    setDiscount("");
    setStart("");
    setEnd("");

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div
        className="w-full max-w-md rounded-2xl p-6"
        style={{ background: P.surface }}
      >
        <h2 className="text-2xl font-bold mb-6" style={{ color: P.text }}>
          إضافة عرض جديد
        </h2>

        <div className="space-y-4">
          <input
            className="w-full border rounded-xl p-3"
            placeholder="اسم العرض"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            type="number"
            className="w-full border rounded-xl p-3"
            placeholder="نسبة الخصم"
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
          />

          <input
            type="date"
            className="w-full border rounded-xl p-3"
            value={start}
            onChange={(e) => setStart(e.target.value)}
          />

          <input
            type="date"
            className="w-full border rounded-xl p-3"
            value={end}
            onChange={(e) => setEnd(e.target.value)}
          />
        </div>

        <div className="flex justify-end gap-3 mt-8">
          <button onClick={onClose} className="border rounded-xl px-5 py-2">
            إلغاء
          </button>

          <button
            onClick={submit}
            className="rounded-xl px-5 py-2 text-white"
            style={{ background: P.primary }}
          >
            إضافة
          </button>
        </div>
      </div>
    </div>
  );
}
