import HeroSection from "../components/HeroSection";
import FeatureSection from "../components/FeatureSection";
import Footer from "../components/Footer/Footer";
export default function FrontendTest() {
  return (
    <div className="w-full flex flex-col justify-center overflow-x-hidden">
      {" "}
      <div className="bg-neutral-7">
        <HeroSection />
        <FeatureSection />
        <Footer />
      </div>
    </div>
  );
}
