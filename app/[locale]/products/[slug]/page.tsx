import { notFound } from "next/navigation";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductDetails from "@/components/products/ProductDetails";

import { products } from "@/data/products";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProductDetailsPage({ params }: Props) {
  const { slug } = await params;

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#FAF5E9]">
        <ProductDetails product={product} />
      </main>

      <Footer />
    </>
  );
}