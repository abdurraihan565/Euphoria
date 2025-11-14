import Hero from "@/components/marketing/hero";
import Brands from "@/components/marketing/brands";
import Features from "@/components/marketing/features";
import Currency from "@/components/marketing/currency";
import Payments from "@/components/marketing/payments";
import Testimonials from "@/components/marketing/testimonials";
import Pricing from "@/components/marketing/pricing";
import Cta from "@/components/marketing/cta";
const HomePage = () => {
  return (
    <div>
      <Hero />
      <Brands />
      <Features />
      <Currency />
      <Payments />
      <Testimonials />
      <Pricing />
      <Cta />
    </div>
  );
};

export default HomePage;
