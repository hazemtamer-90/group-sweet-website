"use client";

import { useEffect, useState } from "react";
import P from "@/lib/dashboard/palette";

export interface SalesMember {
  id: string;
  name: string;
  phone: string;
  area: string;
  sales: number;
}

interface Props {
  open: boolean;
  onClose: () => void;
  onSave: (member: SalesMember) => void;
}

export default function AddSalesMemberModal({
  open,
  onClose,
  onSave,
}: Props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [area, setArea] = useState("");

  useEffect(() => {
    if (!open) {
      setName("");
      setPhone("");
      setArea("");
    }
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div
        className="w-full max-w-md rounded-2xl p-6"
        style={{ background: "#fff" }}
      >
        <h2
          className="text-xl font-bold mb-5"
          style={{ color: P.text }}
        >
          إضافة عضو جديد
        </h2>

        <div className="space-y-4">
          <input
            placeholder="اسم الموظف"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border rounded-xl p-3 outline-none"
          />

          <input
            placeholder="رقم الهاتف"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border rounded-xl p-3 outline-none"
          />

          <input
            placeholder="المنطقة"
            value={area}
            onChange={(e) => setArea(e.target.value)}
            className="w-full border rounded-xl p-3 outline-none"
          />
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl border"
          >
            إلغاء
          </button>

          <button
            onClick={() => {
              onSave({
                id: Date.now().toString(),
                name,
                phone,
                area,
                sales: 0,
              });

              onClose();
            }}
            className="px-5 py-2 rounded-xl text-white"
            style={{ background: P.primary }}
          >
            حفظ
          </button>
        </div>
      </div>
    </div>
  );
}