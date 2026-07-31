"use client";

import {
  Pencil,
  Trash2,
} from "lucide-react";

import ProductImage from "./ProductImage";
import ProductStatus from "./ProductStatus";
import { Product } from "./types";

interface Props {
  product: Product;
}

export default function ProductRow({
  product,
}: Props) {
  return (
    <tr className="border-b transition hover:bg-gray-50">

      <td className="px-6 py-5">
        <ProductImage
          src={product.image}
          alt={product.name}
        />
      </td>

      <td className="px-6 py-5">

        <p className="font-bold">
          {product.name}
        </p>

        <p className="mt-1 text-xs text-gray-400">
          {product.sku}
        </p>

      </td>

      <td className="px-6 py-5">
        {product.category}
      </td>

      <td className="px-6 py-5 font-bold text-[#670047]">
        {product.price} ج.م
      </td>

      <td className="px-6 py-5">

        <div className="w-28">

          <div className="mb-2 flex justify-between text-xs">

            <span>
              {product.stock}
            </span>

            <span className="text-gray-400">
              قطعة
            </span>

          </div>

          <div className="h-2 rounded-full bg-gray-200">

            <div
              className="h-2 rounded-full bg-[#670047]"
              style={{
                width: `${Math.min(product.stock,100)}%`,
              }}
            />

          </div>

        </div>

      </td>

      <td className="px-6 py-5">
        <ProductStatus
          status={product.status}
        />
      </td>

      <td className="px-6 py-5">

        <div className="flex justify-center gap-2">

          <button className="rounded-xl bg-blue-50 p-2 text-blue-600 transition hover:bg-blue-100">
            <Pencil size={18} />
          </button>

          <button className="rounded-xl bg-red-50 p-2 text-red-600 transition hover:bg-red-100">
            <Trash2 size={18} />
          </button>

        </div>

      </td>

    </tr>
  );
}