"use client";

import { useWishlist } from "@/store/wishlistStore";

import WishlistCard from "./WishlistCard";
import WishlistEmpty from "./WishlistEmpty";
import WishlistActions from "./WishlistActions";

export default function WishlistGrid() {
  const items = useWishlist((state) => state.items);

  if (items.length === 0) {
    return <WishlistEmpty />;
  }

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <WishlistActions />

      <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {items.map((product) => (
          <WishlistCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
}