import "./App.css";
import HeroSection from "./pages/home/HeroSection";
import Layout from "./components/Layout";
import FeatureSection from "./pages/home/FeatureSection";
import BenefitsSection from "./pages/home/BenefitsSection";
import FAQSection from "./pages/home/FAQSection";
import Footer from "./components/Footer";
import RegForm from "./pages/registration/RegForm";
import Shop from "./pages/shopping/Shop";
import FeaturedProducts from "./pages/home/FeaturedProducts";
// import TestForm from "./test/TestForm";

function App() {
  return (
    <>
      <Layout>
        <HeroSection />
        <FeatureSection />
        <BenefitsSection />
        <FeaturedProducts />
        <FAQSection />
        <Footer />
      </Layout>
      {/* <RegForm /> */}
      {/* <NavBar /> */}
      {/* <Shop /> */}
    </>
  );
}

export default App;
