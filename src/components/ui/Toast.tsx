"use client";

import { CheckCircle2, XCircle, Info, X } from "lucide-react";

import { useToastStore } from "@/store/toastStore";

export default function Toast() {
  const { open, message, type, hide } = useToastStore();

  if (!open) return null;

  const Icon =
    type === "success" ? CheckCircle2 : type === "error" ? XCircle : Info;

  return (
    <div className="fixed bottom-6 right-6 z-[9999] animate-[toastIn_.35s_ease]">
      <div className="relative min-w-[340px] overflow-hidden rounded-2xl border border-[#E8D7B6] bg-white shadow-2xl">
        <div className="absolute left-0 top-0 h-1 w-full bg-[#670047] animate-[progress_2.5s_linear]" />

        <div className="flex items-center gap-4 p-5">
          <div
            className={`flex h-11 w-11 items-center justify-center rounded-full ${
              type === "success"
                ? "bg-green-100 text-green-600"
                : type === "error"
                  ? "bg-red-100 text-red-600"
                  : "bg-blue-100 text-blue-600"
            }`}
          >
            <Icon size={22} />
          </div>

          <div className="flex-1">
            <h4 className="font-bold text-[#2C1A0E]">
              {type === "success"
                ? "Success"
                : type === "error"
                  ? "Error"
                  : "Info"}
            </h4>

            <p className="mt-1 text-sm text-[#7A5C3A]">{message}</p>
          </div>

          <button
            onClick={hide}
            className="rounded-full p-2 transition hover:bg-[#F5EDD6]"
          >
            <X size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
