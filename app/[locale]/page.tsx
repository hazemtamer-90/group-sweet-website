import dynamic from "next/dynamic";
import WebsiteSchema from "@/components/seo/WebsiteSchema";
const Header = dynamic(() => import("@/components/layout/Header"));
const Hero = dynamic(() => import("@/components/home/Hero"));
const Categories = dynamic(() => import("@/components/home/Categories"));

const FeaturedProducts = dynamic(
  () => import("@/components/home/FeaturedProducts"),
  {
    loading: () => <div className="h-96" />,
  },
);

const CorporateOrders = dynamic(
  () => import("@/components/home/CorporateOrders"),
  {
    loading: () => <div className="h-80" />,
  },
);

const WhyChooseUs = dynamic(() => import("@/components/home/WhyChooseUs"), {
  loading: () => <div className="h-80" />,
});

const CTASection = dynamic(() => import("@/components/home/CTASection"), {
  loading: () => <div className="h-72" />,
});

const Testimonials = dynamic(
  () =>
    import("@/components/home/Testimonials").then((m) => ({
      default: m.Testimonials,
    })),
  {
    loading: () => <div className="h-80" />,
  },
);

const AboutFactory = dynamic(() => import("@/components/home/AboutFactory"), {
  loading: () => <div className="h-96" />,
});

const Footer = dynamic(() => import("@/components/layout/Footer"));

export default function HomePage() {
  return (
    <>
      <WebsiteSchema />
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
