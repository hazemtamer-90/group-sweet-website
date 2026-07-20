"use client";

import { useState } from "react";
import { Plus, Pencil, Trash2, Package } from "lucide-react";

import P from "@/lib/dashboard/palette";
import AddCategoryModal, { Category } from "@/dashboard/AddCategoryModal";

const initialCategories: Category[] = [
  {
    id: "1",
    name: "حلويات المولد",
    description: "جميع منتجات المولد",
    products: 28,
  },
  {
    id: "2",
    name: "علب الهدايا",
    description: "علب هدايا فاخرة",
    products: 12,
  },
  {
    id: "3",
    name: "المكسرات",
    description: "منتجات المكسرات",
    products: 17,
  },
];

export default function CategoriesPage() {
  const [categories, setCategories] = useState<Category[]>(initialCategories);

  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold" style={{ color: P.text }}>
            الأقسام
          </h1>

          <p className="text-sm mt-1" style={{ color: P.muted }}>
            إدارة أقسام المتجر
          </p>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 px-5 py-3 rounded-xl text-white"
          style={{ background: P.primary }}
        >
          <Plus size={18} />
          إضافة قسم
        </button>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className="rounded-2xl p-6"
            style={{ background: P.surface }}
          >
            <div className="flex items-center justify-between">
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center"
                style={{ background: P.primaryLt }}
              >
                <Package color={P.primary} />
              </div>

              <div className="flex gap-2">
                <button>
                  <Pencil size={18} color={P.primary} />
                </button>

                <button
                  onClick={() =>
                    setCategories((prev) =>
                      prev.filter((c) => c.id !== category.id),
                    )
                  }
                >
                  <Trash2 size={18} color="#DC2626" />
                </button>
              </div>
            </div>

            <h2 className="text-xl font-bold mt-5" style={{ color: P.text }}>
              {category.name}
            </h2>

            <p className="mt-2 text-sm" style={{ color: P.muted }}>
              {category.description}
            </p>

            <div
              className="mt-5 flex items-center justify-between rounded-xl p-3"
              style={{ background: P.bg }}
            >
              <span style={{ color: P.muted }}>عدد المنتجات</span>

              <span className="font-bold" style={{ color: P.primary }}>
                {category.products}
              </span>
            </div>
          </div>
        ))}
      </div>

      <AddCategoryModal
        open={open}
        onClose={() => setOpen(false)}
        onAdd={(category) => setCategories((prev) => [category, ...prev])}
      />
    </div>
  );
}
