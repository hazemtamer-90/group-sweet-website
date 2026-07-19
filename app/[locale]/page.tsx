
import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";
import Categories from "@/components/home/Categories";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import CorporateOrders from "@/components/home/CorporateOrders";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CTASection from "@/components/home/CTASection";
import { Testimonials } from "@/components/home/Testimonials";
import AboutFactory from "@/components/home/AboutFactory";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Categories />
      <FeaturedProducts />
      <CorporateOrders />
      <WhyChooseUs />
      <CTASection />
      <Testimonials />
      <AboutFactory />
      <Footer />
    </>
  );
}
