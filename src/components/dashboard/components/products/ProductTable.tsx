"use client";

import ProductRow from "./ProductRow";
import { products } from "./productsData";

export default function ProductTable() {
  return (
    <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="border-b bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-right text-sm font-semibold text-gray-500">
                الصورة
              </th>

              <th className="px-6 py-4 text-right text-sm font-semibold text-gray-500">
                المنتج
              </th>

              <th className="px-6 py-4 text-right text-sm font-semibold text-gray-500">
                التصنيف
              </th>

              <th className="px-6 py-4 text-right text-sm font-semibold text-gray-500">
                السعر
              </th>

              <th className="px-6 py-4 text-right text-sm font-semibold text-gray-500">
                المخزون
              </th>

              <th className="px-6 py-4 text-right text-sm font-semibold text-gray-500">
                الحالة
              </th>

              <th className="px-6 py-4 text-center text-sm font-semibold text-gray-500">
                الإجراءات
              </th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <ProductRow
                key={product.id}
                product={product}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}