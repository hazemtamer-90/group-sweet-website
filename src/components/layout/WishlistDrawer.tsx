"use client";

import { useState } from "react";

import Image from "next/image";
import { Link } from "@/i18n/navigation";

import { Heart, ShoppingCart, Trash2, X } from "lucide-react";

import { useTranslations } from "next-intl";

import { useWishlist } from "@/store/wishlistStore";
import { useCartStore } from "@/store/cartStore";

import CartToast from "@/components/ui/CartToast";
import type { Product } from "@/data/products";

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WishlistDrawer({
  isOpen,
  onClose,
}: WishlistDrawerProps) {
  const t = useTranslations("wishlist");

  const wishlist = useWishlist();

  const addToCart = useCartStore((state) => state.addToCart);

  const [showToast, setShowToast] = useState(false);

  const handleAddToCart = (product: Product) => {
    addToCart(product, 1, "1");

    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <>
      <div
        onClick={onClose}
        className="fixed inset-0 z-[90] bg-black/40 backdrop-blur-sm"
      />

      <aside className="fixed right-0 top-0 z-[100] flex h-screen w-[420px] max-w-full flex-col bg-[#FFFDF8] shadow-2xl">
        {/* Header */}

        <div className="flex items-center justify-between border-b border-[#EEE2CF] px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#670047] text-white">
              <Heart size={20} className="fill-white" />
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#2C1A0E]">{t("title")}</h2>

              <p className="text-sm text-[#8B6E4A]">
                {wishlist.items.length} {t("items")}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="rounded-full p-2 hover:bg-[#F5EDD6]"
          >
            <X size={20} />
          </button>
        </div>
        {/* Empty */}

        {wishlist.items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
            <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-[#F5EDD6]">
              <Heart size={40} className="text-[#670047]" />
            </div>

            <h3 className="mb-3 text-2xl font-bold text-[#2C1A0E]">
              {t("emptyTitle")}
            </h3>

            <p className="mb-8 text-[#8B6E4A]">{t("emptyDescription")}</p>

            <button
              onClick={onClose}
              className="rounded-full bg-[#670047] px-8 py-3 font-semibold text-white transition hover:bg-[#7A0052]"
            >
              {t("continueShopping")}
            </button>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto px-5 py-5">
            {wishlist.items.map((product) => (
              <div
                key={product.id}
                className="mb-4 flex gap-4 rounded-2xl border border-[#EFE4C8] bg-white p-3 shadow-sm"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={90}
                  height={90}
                  className="rounded-xl object-cover"
                />

                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-[#2C1A0E]">{product.name}</h3>

                    <p className="mt-1 text-sm text-[#8B6E4A]">
                      {product.category}
                    </p>

                    <p className="mt-2 font-bold text-[#670047]">
                      {product.price} جنيه
                    </p>
                  </div>

                  <div className="mt-3 flex gap-2">
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#670047] py-2 text-sm font-semibold text-white hover:bg-[#7A0052]"
                    >
                      <ShoppingCart size={15} />
                      {t("addToCart")}
                    </button>

                    <button
                      onClick={() => wishlist.remove(product.id)}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-red-200 text-red-500 hover:bg-red-50"
                    >
                      <Trash2 size={17} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {wishlist.items.length > 0 && (
          <div className="border-t border-[#EFE4C8] p-5">
            <Link
              href="/wishlist"
              onClick={onClose}
              className="block w-full rounded-full bg-[#670047] py-3 text-center font-semibold text-white transition hover:bg-[#7A0052]"
            >
              {t("viewWishlist")}
            </Link>
          </div>
        )}
        <CartToast show={showToast} />
      </aside>
    </>
  );
}
