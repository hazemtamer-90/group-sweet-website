"use client";

import { useEffect } from "react";
import { useWishlist } from "@/store/wishlistStore";

export default function WishlistHydration() {
  useEffect(() => {
    useWishlist.persist.rehydrate();
  }, []);

  return null;
}