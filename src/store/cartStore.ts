import { create } from "zustand";
import type { Product } from "@/data/products";

interface CartItem extends Product {
  quantity: number;
}

interface CartStore {
  items: CartItem[];

  addToCart: (product: Product) => void;

  removeFromCart: (id: number) => void;

  increaseQuantity: (id: number) => void;

  decreaseQuantity: (id: number) => void;

  clearCart: () => void;
}

export const useCartStore = create<CartStore>((set) => ({
  items: [],

  addToCart: (product) =>
    set((state) => {
      const existing = state.items.find((item) => item.id === product.id);

      if (existing) {
        return {
          items: state.items.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }

      return {
        items: [...state.items, { ...product, quantity: 1 }],
      };
    }),

  removeFromCart: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    })),

  increaseQuantity: (id) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ),
    })),

  decreaseQuantity: (id) =>
    set((state) => ({
      items: state.items
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0),
    })),

  clearCart: () => set({ items: [] }),
}));