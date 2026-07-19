"use client";

import Header from "../layout/Header";
import Footer from "../layout/Footer";
import AboutFactory from "../home/AboutFactory";

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#FAF5E9]">
        <AboutFactory />
      </main>

      <Footer />
    </>
  );
}