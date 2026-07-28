"use client";

import { create } from "zustand";

export type ToastType = "success" | "error" | "info";

interface ToastState {
  open: boolean;
  message: string;
  type: ToastType;

  show: (message: string, type?: ToastType) => void;

  hide: () => void;
}

export const useToastStore = create<ToastState>((set) => ({
  open: false,

  message: "",

  type: "success",

  show: (message, type = "success") => {
    set({
      open: true,
      message,
      type,
    });

    setTimeout(() => {
      set({
        open: false,
      });
    }, 2500);
  },

  hide: () =>
    set({
      open: false,
    }),
}));
