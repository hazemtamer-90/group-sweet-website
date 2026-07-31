"use client";

import ContactHeroBackground from "@/components/contact/ContactHeroBackground";

interface PageHeroProps {
  title: string;
  subtitle: string;
}

export default function PageHero({
  title,
  subtitle,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#2C1A0E] py-16">
      <ContactHeroBackground />

      <div className="relative z-10 mx-auto max-w-7xl px-5 text-center">
        <h1 className="text-5xl font-bold text-white">
          {title}
        </h1>

        <p className="mt-4 text-lg text-[#E8C472]">
          {subtitle}
        </p>
      </div>
    </section>
  );
}