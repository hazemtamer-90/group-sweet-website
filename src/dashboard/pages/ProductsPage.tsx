"use client";

import { useState } from "react";
import Image from "next/image";
import { Search, Plus, Pencil, Trash2, Star } from "lucide-react";

import P from "@/lib/dashboard/palette";
import AddProductModal, { Product } from "@/dashboard/AddProductModal";

const initialProducts: Product[] = [
  {
    id: "1",
    name: "علبة المولد الفاخرة",
    category: "حلويات المولد",
    price: 350,
    stock: 45,
    image: "/images/product.png",
    featured: true,
  },
  {
    id: "2",
    name: "ملبن بندق",
    category: "الحلويات",
    price: 120,
    stock: 18,
    image: "/images/product.png",
    featured: false,
  },
];

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>(initialProducts);

  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold" style={{ color: P.text }}>
            المنتجات
          </h1>

          <p className="text-sm mt-1" style={{ color: P.muted }}>
            إدارة جميع منتجات المصنع
          </p>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 px-5 py-3 rounded-xl text-white"
          style={{ background: P.primary }}
        >
          <Plus size={18} />
          إضافة منتج
        </button>
      </div>

      <div className="rounded-2xl p-5" style={{ background: P.surface }}>
        <div className="relative mb-6">
          <Search
            size={18}
            color={P.muted}
            className="absolute right-4 top-1/2 -translate-y-1/2"
          />

          <input
            placeholder="ابحث عن منتج..."
            className="w-full border rounded-xl py-3 pr-11 pl-4 outline-none"
          />
        </div>

        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-right py-4">المنتج</th>

              <th className="text-right">القسم</th>

              <th className="text-right">السعر</th>

              <th className="text-right">المخزون</th>

              <th className="text-right">مميز</th>

              <th className="text-right">الإجراءات</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-b last:border-0">
                <td className="py-5">
                  <div className="flex items-center gap-4">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={60}
                      height={60}
                      className="rounded-xl object-cover"
                    />

                    <div>
                      <p className="font-semibold" style={{ color: P.text }}>
                        {product.name}
                      </p>

                      {product.featured && (
                        <div className="flex items-center gap-1 mt-1">
                          <Star size={14} fill="#F59E0B" color="#F59E0B" />

                          <span
                            className="text-xs"
                            style={{ color: "#F59E0B" }}
                          >
                            منتج مميز
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </td>

                <td>{product.category}</td>

                <td className="font-semibold" style={{ color: P.primary }}>
                  {product.price} ج
                </td>

                <td>
                  <span
                    className="px-3 py-1 rounded-full text-xs font-semibold"
                    style={{
                      background: product.stock > 20 ? "#DCFCE7" : "#FEE2E2",

                      color: product.stock > 20 ? "#15803D" : "#DC2626",
                    }}
                  >
                    {product.stock} قطعة
                  </span>
                </td>

                <td>
                  {product.featured ? (
                    <Star size={18} fill="#F59E0B" color="#F59E0B" />
                  ) : (
                    "-"
                  )}
                </td>

                <td>
                  <div className="flex items-center gap-3">
                    <button>
                      <Pencil size={18} color={P.primary} />
                    </button>

                    <button
                      onClick={() =>
                        setProducts((prev) =>
                          prev.filter((p) => p.id !== product.id),
                        )
                      }
                    >
                      <Trash2 size={18} color="#DC2626" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <AddProductModal
        open={open}
        onClose={() => setOpen(false)}
        onAdd={(product) => setProducts((prev) => [product, ...prev])}
      />
    </div>
  );
}
