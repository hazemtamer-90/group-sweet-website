import { create } from "zustand";
import type { Product } from "@/data/products";

export interface CartItem extends Product {
  quantity: number;
  selectedWeight: string;
}

interface CartStore {
  items: CartItem[];

  addToCart: (
    product: Product,
    quantity: number,
    selectedWeight: string
  ) => void;

  removeFromCart: (id: number, weight?: string) => void;

  increaseQuantity: (id: number, weight?: string) => void;

  decreaseQuantity: (id: number, weight?: string) => void;

  clearCart: () => void;
}

export const useCartStore = create<CartStore>((set) => ({
  items: [],

  addToCart: (product, quantity, selectedWeight) =>
    set((state) => {
      const existing = state.items.find(
        (item) =>
          item.id === product.id &&
          item.selectedWeight === selectedWeight
      );

      if (existing) {
        return {
          items: state.items.map((item) =>
            item.id === product.id &&
            item.selectedWeight === selectedWeight
              ? {
                  ...item,
                  quantity: item.quantity + quantity,
                }
              : item
          ),
        };
      }

      return {
        items: [
          ...state.items,
          {
            ...product,
            quantity,
            selectedWeight,
          },
        ],
      };
    }),

  removeFromCart: (id, weight) =>
    set((state) => ({
      items: state.items.filter(
        (item) =>
          !(item.id === id && item.selectedWeight === weight)
      ),
    })),

  increaseQuantity: (id, weight) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id &&
        item.selectedWeight === weight
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      ),
    })),

  decreaseQuantity: (id, weight) =>
    set((state) => ({
      items: state.items
        .map((item) =>
          item.id === id &&
          item.selectedWeight === weight
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0),
    })),

  clearCart: () => set({ items: [] }),
}));
