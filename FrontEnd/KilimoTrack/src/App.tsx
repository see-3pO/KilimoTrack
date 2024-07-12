import "./App.css";
import HeroSection from "./pages/home/HeroSection";
import Layout from "./components/Layout";
import FeatureSection from "./pages/home/FeatureSection";
import BenefitsSection from "./pages/home/BenefitsSection";
import FAQSection from "./pages/home/FAQSection";
// import TestForm from "./test/TestForm";

function App() {
  return (
    <>
      <Layout>
        <HeroSection />
        <FeatureSection />
        <BenefitsSection />
        <FAQSection />
      </Layout>
      {/* <NavBar /> */}
    </>
  );
}

export default App;
