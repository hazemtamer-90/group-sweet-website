import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductDetails from "@/components/products/ProductDetails";
import ProductSchema from "@/components/seo/ProductSchema";

import { products } from "@/data/products";

interface Props {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, locale } = await params;

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return {};
  }

  const isEnglish = locale === "en";

  const name = isEnglish ? product.nameEn : product.name;

  const description = isEnglish ? product.descriptionEn : product.description;

  return {
    title: `${name} | Group Sweet`,
    description,

    openGraph: {
      title: `${name} | Group Sweet`,
      description,
      images: [
        {
          url: product.image,
          alt: name,
        },
      ],
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: `${name} | Group Sweet`,
      description,
      images: [product.image],
    },
  };
}

export default async function ProductDetailsPage({ params }: Props) {
  const { slug, locale } = await params;

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  const isEnglish = locale === "en";

  const schemaName = isEnglish ? product.nameEn : product.name;

  const schemaDescription = isEnglish
    ? product.descriptionEn
    : product.description;

  return (
    <>
      <ProductSchema
        name={schemaName}
        description={schemaDescription}
        image={product.image}
        price={product.price}
      />

      <Header />

      <main className="min-h-screen overflow-hidden bg-[#FAF5E9]">
        <ProductDetails product={product} />
      </main>

      <Footer />
    </>
  );
}
