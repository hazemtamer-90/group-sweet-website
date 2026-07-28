import { notFound } from "next/navigation";
import ProductSchema from "@/components/seo/ProductSchema";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductDetails from "@/components/products/ProductDetails";

import { products } from "@/data/products";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}
import type { Metadata } from "next";
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return {};
  }

  return {
    title: `${product.name} | Group Sweet`,

    description: product.description,

    openGraph: {
      title: product.name,
      description: product.description,
      images: [product.image],
    },

    twitter: {
      card: "summary_large_image",
      title: product.name,
      description: product.description,
      images: [product.image],
    },
  };
}
export default async function ProductDetailsPage({ params }: Props) {
  const { slug } = await params;

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <ProductSchema
        name={product.name}
        description={product.description}
        image={product.image}
        price={product.price}
      />

      <Header />

      <main className="min-h-screen bg-[#FAF5E9]">
        <ProductDetails product={product} />
      </main>

      <Footer />
    </>
  );
}
