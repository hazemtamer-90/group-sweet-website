import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://groupsweet.com"),

  title: {
    default: "Group Sweet",
    template: "%s | Group Sweet",
  },

  description:
    "Premium Egyptian sweets, Mawlid sweets, gift boxes, corporate orders and luxury desserts.",

  keywords: [
    "Group Sweet",
    "حلويات",
    "حلاوة المولد",
    "بسيمة",
    "ملبن",
    "نوجا",
    "Egyptian Sweets",
    "Gift Boxes",
  ],

  authors: [
    {
      name: "Group Sweet",
    },
  ],

  creator: "Group Sweet",

  publisher: "Group Sweet",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "ar_EG",
    siteName: "Group Sweet",
    title: "Group Sweet",
    description: "Premium Egyptian sweets and luxury gift boxes.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Group Sweet",
    description: "Premium Egyptian sweets and luxury gift boxes.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
