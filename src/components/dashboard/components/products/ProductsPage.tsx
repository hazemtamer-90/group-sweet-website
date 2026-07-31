"use client";

import ProductsHeader from "./ProductsHeader";
import ProductsStats from "./ProductsStats";
import ProductsToolbar from "./ProductsToolbar";
import ProductTable from "./ProductTable";
import ProductsPagination from "./ProductsPagination";

export default function ProductsPage() {
  return (
    <div className="space-y-8">

      <ProductsHeader />

      <ProductsStats />

      <ProductsToolbar />

      <ProductTable />

      <ProductsPagination />

    </div>
  );
}