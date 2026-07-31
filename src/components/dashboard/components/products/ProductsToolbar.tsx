"use client";

import ProductSearch from "./ProductSearch";
import ProductFilters from "./ProductFilters";

export default function ProductsToolbar() {
  return (
    <div
      className="
      rounded-3xl
      border
      bg-white
      p-5
      shadow-sm
    "
    >
      <div
        className="
        flex
        flex-col
        gap-4
        xl:flex-row
        xl:items-center
        xl:justify-between
      "
      >
        <ProductSearch />

        <ProductFilters />
      </div>
    </div>
  );
}