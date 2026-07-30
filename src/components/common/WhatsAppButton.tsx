"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/201000000000"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="
        fixed
        bottom-6
        left-6
        z-[999]
        flex
        h-14
        w-14
        items-center
        justify-center
        rounded-full
        bg-[#25D366]
        text-white
        shadow-[0_10px_30px_rgba(37,211,102,.35)]
        transition-all
        duration-300
        hover:scale-110
        hover:shadow-[0_12px_35px_rgba(37,211,102,.45)]
        active:scale-95
      "
    >
      <FaWhatsapp className="text-[30px]" />
    </a>
  );
}
