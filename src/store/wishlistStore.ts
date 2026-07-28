"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import type { Product } from "@/data/products";

interface WishlistStore {
  items: Product[];

  add: (product: Product) => void;

  remove: (id: number) => void;

  toggle: (product: Product) => void;

  clear: () => void;

  exists: (id: number) => boolean;
}

export const useWishlist = create<WishlistStore>()(
  persist(
    (set, get) => ({
      items: [],

      add: (product) =>
        set((state) => ({
          items: [...state.items, product],
        })),

      remove: (id) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        })),

      toggle: (product) => {
        const exists = get().items.some((item) => item.id === product.id);

        if (exists) {
          get().remove(product.id);
        } else {
          get().add(product);
        }
      },

      clear: () => set({ items: [] }),

      exists: (id) => {
        return get().items.some((item) => item.id === id);
      },
    }),
    {
      name: "wishlist-storage",

      storage: createJSONStorage(() => localStorage),

      skipHydration: true,
    },
  ),
);
