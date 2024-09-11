import BenefitsSection from "./BenefitsSection";
import FAQSection from "./FAQSection";
import FeaturedProducts from "./FeaturedProducts";
import FeatureSection from "./FeatureSection";
import HeroSection from "./HeroSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <section id="features">
        <FeatureSection />
      </section>

      <section id="benefits">
        <BenefitsSection />
      </section>

      <section id="featured-products">
        <FeaturedProducts />
      </section>

      <section id="faq">
        <FAQSection />
      </section>

    </>
  );
};

export default Home;
