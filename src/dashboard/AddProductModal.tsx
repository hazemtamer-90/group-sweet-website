"use client";

import { useState } from "react";
import P from "@/lib/dashboard/palette";

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  image: string;
  featured: boolean;
}

interface Props {
  open: boolean;
  onClose: () => void;
  onAdd: (product: Product) => void;
}

export default function AddProductModal({ open, onClose, onAdd }: Props) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [image, setImage] = useState("");
  const [featured, setFeatured] = useState(false);

  if (!open) return null;

  const submit = () => {
    if (!name.trim() || !category.trim() || !price || !stock) return;

    onAdd({
      id: Date.now().toString(),
      name,
      category,
      price: Number(price),
      stock: Number(stock),
      image: image || "https://placehold.co/120x120/png",
      featured,
    });

    setName("");
    setCategory("");
    setPrice("");
    setStock("");
    setImage("");
    setFeatured(false);

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center">
      <div
        className="w-full max-w-xl rounded-2xl p-6"
        style={{ background: P.surface }}
      >
        <h2 className="text-2xl font-bold mb-6" style={{ color: P.text }}>
          إضافة منتج
        </h2>

        <div className="space-y-4">
          <input
            className="w-full border rounded-xl p-3"
            placeholder="اسم المنتج"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            className="w-full border rounded-xl p-3"
            placeholder="القسم"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />

          <input
            type="number"
            className="w-full border rounded-xl p-3"
            placeholder="السعر"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          <input
            type="number"
            className="w-full border rounded-xl p-3"
            placeholder="الكمية"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />

          <input
            className="w-full border rounded-xl p-3"
            placeholder="رابط الصورة (اختياري)"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />

          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={featured}
              onChange={(e) => setFeatured(e.target.checked)}
            />
            منتج مميز
          </label>
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
