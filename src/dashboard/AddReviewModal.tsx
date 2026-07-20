"use client";

import { useState } from "react";
import P from "@/lib/dashboard/palette";

export interface Review {
  id: string;
  customer: string;
  product: string;
  rating: number;
  comment: string;
}

interface Props {
  open: boolean;
  onClose: () => void;
  onAdd: (review: Review) => void;
}

export default function AddReviewModal({ open, onClose, onAdd }: Props) {
  const [customer, setCustomer] = useState("");
  const [product, setProduct] = useState("");
  const [rating, setRating] = useState("5");
  const [comment, setComment] = useState("");

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div
        className="w-full max-w-lg rounded-2xl p-6"
        style={{ background: P.surface }}
      >
        <h2 className="text-2xl font-bold mb-6" style={{ color: P.text }}>
          إضافة تقييم
        </h2>

        <div className="space-y-4">
          <input
            className="w-full border rounded-xl p-3"
            placeholder="اسم العميل"
            value={customer}
            onChange={(e) => setCustomer(e.target.value)}
          />

          <input
            className="w-full border rounded-xl p-3"
            placeholder="اسم المنتج"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
          />

          <input
            type="number"
            min={1}
            max={5}
            className="w-full border rounded-xl p-3"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />

          <textarea
            className="w-full border rounded-xl p-3"
            rows={4}
            placeholder="التعليق"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button onClick={onClose} className="border rounded-xl px-5 py-2">
            إلغاء
          </button>

          <button
            onClick={() => {
              onAdd({
                id: Date.now().toString(),
                customer,
                product,
                rating: Number(rating),
                comment,
              });

              onClose();
            }}
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
