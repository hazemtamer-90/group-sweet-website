import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";

import { routing } from "@/i18n/routing";

import AdminButton from "@/components/AdminButton";
import WishlistHydration from "@/components/providers/WishlistHydration";
import Toast from "@/components/ui/Toast";
import AppPreloader from "@/components/common/AppPreloader";
import WhatsAppButton from "@/components/common/WhatsAppButton";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "ar" | "en")) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <WishlistHydration />

      <AppPreloader />

      <div
        lang={locale}
        dir={locale === "ar" ? "rtl" : "ltr"}
        className="min-h-screen"
      >
        {children}

        <Toast />

        <WhatsAppButton />
      </div>
    </NextIntlClientProvider>
  );
}
