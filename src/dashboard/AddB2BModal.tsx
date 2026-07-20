"use client";

import { X } from "lucide-react";
import { useState } from "react";
import P from "@/lib/dashboard/palette";
import type { B2BOrder } from "@/types/b2b";

interface Props {
  open: boolean;
  onClose: () => void;
  order?: B2BOrder | null;
  onSave: (order: B2BOrder) => void;
}

export default function AddB2BModal({ open, onClose, onSave, order }: Props) {
  const [company, setCompany] = useState(order?.company ?? "");
  const [contact, setContact] = useState(order?.contact ?? "");
  const [phone, setPhone] = useState(order?.phone ?? "");
  const [value, setValue] = useState(order ? String(order.quantity) : "");

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
      <div
        className="w-[650px] rounded-2xl p-6"
        style={{ background: P.surface }}
      >
        <div className="flex items-center justify-between mb-6">
          <h2>{order ? "تعديل الطلب" : "إضافة طلب شركة"}</h2>

          <button onClick={onClose}>
            <X />
          </button>
        </div>

        <div className="space-y-4">
          <input
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="اسم الشركة"
            className="w-full border rounded-xl p-3"
          />

          <input
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="اسم المسؤول"
            className="w-full border rounded-xl p-3"
          />

          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="رقم الهاتف"
            className="w-full border rounded-xl p-3"
          />

          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="قيمة الطلب"
            className="w-full border rounded-xl p-3"
          />
        </div>

        <div className="flex justify-end gap-3 mt-8">
          <button onClick={onClose} className="px-5 py-3 rounded-xl border">
            إلغاء
          </button>

          <button
            onClick={() => {
              onSave({
                id: order?.id ?? Date.now().toString(),
                company,
                contact,
                phone,
                quantity: Number(value),
                status: "جديد",
              });

              onClose();
            }}
            className="px-5 py-3 rounded-xl text-white"
            style={{ background: P.primary }}
          >
            حفظ
          </button>
        </div>
      </div>
    </div>
  );
}
