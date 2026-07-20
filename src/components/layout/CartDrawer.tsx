"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import WalletLoader from "@/components/ui/WalletLoader";

import {
  X,
  ShoppingCart,
  Plus,
  Minus,
  Trash2,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

import { useLocale, useTranslations } from "next-intl";
import { useCartStore } from "@/store/cartStore";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const locale = useLocale();

  const t = useTranslations("cart");
  const misc = useTranslations("misc");

  const { items, removeFromCart, increaseQuantity, decreaseQuantity } =
    useCartStore();

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const ArrowIcon = locale === "ar" ? ArrowLeft : ArrowRight;
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
          onClick={onClose}
        />
      )}

      <div
        className={`fixed top-0 ${
          locale === "ar" ? "left-0" : "right-0"
        } z-50 flex h-screen w-full max-w-md flex-col bg-[#FFFBF0] shadow-2xl transition-transform duration-300 ${
          isOpen
            ? "translate-x-0"
            : locale === "ar"
              ? "-translate-x-full"
              : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-[#E8D7B6] p-5">
          <button
            onClick={onClose}
            className="rounded-full p-2 hover:bg-[#EFE4C8]"
          >
            <X size={20} />
          </button>

          <div className="flex items-center gap-2">
            <ShoppingCart size={20} className="text-[#670047]" />

            <h2 className="text-xl font-bold text-[#2C1A0E]">{t("heading")}</h2>

            {itemCount > 0 && (
              <span className="rounded-full bg-[#670047] px-2 py-1 text-xs text-white">
                {itemCount}
              </span>
            )}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <div className="mb-8 flex justify-center">
                <WalletLoader />
              </div>

              <h3 className="mb-2 text-2xl font-bold text-[#2C1A0E]">
                {t("empty.title")}
              </h3>

              <p className="mb-8 text-[#7A5C3A]">{t("empty.sub")}</p>

              <Link
                href="/products"
                onClick={onClose}
                className="rounded-full bg-[#670047] px-6 py-3 text-white transition hover:bg-[#7A0052]"
              >
                {t("browseCta")}
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => {
                const displayName = locale === "en" ? item.nameEn : item.name;

                return (
                  <div
                    key={item.id}
                    className="flex gap-4 rounded-2xl border border-[#E8D7B6] bg-white p-4"
                  >
                    <div className="relative h-20 w-20 overflow-hidden rounded-xl bg-[#F5EDD6]">
                      <Image
                        src={item.image}
                        alt={displayName}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="flex flex-1 flex-col justify-between">
                      <h3 className="font-semibold text-[#2C1A0E]">
                        {displayName}
                      </h3>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => decreaseQuantity(item.id)}
                          className="rounded-full bg-[#EFE4C8] p-1"
                        >
                          <Minus size={14} />
                        </button>

                        <span>{item.quantity}</span>

                        <button
                          onClick={() => increaseQuantity(item.id)}
                          className="rounded-full bg-[#670047] p-1 text-white"
                        >
                          <Plus size={14} />
                        </button>
                      </div>

                      <div className="font-bold text-[#670047]">
                        {item.price * item.quantity} {misc("egp")}
                      </div>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="self-start rounded-full p-2 hover:bg-red-50"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-[#E8D7B6] p-5">
            <div className="mb-4 flex items-center justify-between">
              <span className="font-semibold text-[#2C1A0E]">{t("total")}</span>

              <span className="text-2xl font-bold text-[#670047]">
                {total} {misc("egp")}
              </span>
            </div>

            <Link
              href="/cart"
              onClick={onClose}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-[#670047] py-3 font-semibold text-white transition hover:bg-[#7A0052]"
            >
              <span>{t("checkout")}</span>
              <ArrowIcon size={18} />
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
