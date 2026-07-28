import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import WishlistHeader from "@/components/wishlist/WishlistHeader";
import WishlistGrid from "@/components/wishlist/WishlistGrid";

export default function WishlistPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#FAF5E9]">
        <WishlistHeader />
        <WishlistGrid />
      </main>

      <Footer />
    </>
  );
}