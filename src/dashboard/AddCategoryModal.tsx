"use client";

import { useState } from "react";
import P from "@/lib/dashboard/palette";

export interface Category {
  id: string;
  name: string;
  description: string;
  products: number;
}

interface Props {
  open: boolean;
  onClose: () => void;
  onAdd: (category: Category) => void;
}

export default function AddCategoryModal({ open, onClose, onAdd }: Props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center">
      <div
        className="w-full max-w-md rounded-2xl p-6"
        style={{ background: P.surface }}
      >
        <h2 className="text-2xl font-bold mb-6" style={{ color: P.text }}>
          إضافة قسم
        </h2>

        <div className="space-y-4">
          <input
            className="w-full border rounded-xl p-3"
            placeholder="اسم القسم"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <textarea
            rows={4}
            className="w-full border rounded-xl p-3"
            placeholder="الوصف"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button className="border rounded-xl px-5 py-2" onClick={onClose}>
            إلغاء
          </button>

          <button
            className="rounded-xl px-5 py-2 text-white"
            style={{ background: P.primary }}
            onClick={() => {
              onAdd({
                id: Date.now().toString(),
                name,
                description,
                products: 0,
              });

              onClose();
            }}
          >
            إضافة
          </button>
        </div>
      </div>
    </div>
  );
}
