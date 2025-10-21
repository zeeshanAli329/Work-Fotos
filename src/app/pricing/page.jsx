import next from "next";
import LastHeroSection from "../home-components/heroSections/last-hero-section/LastHeroSection";
import Footer from "../home-components/footer/Footer";
import WhiteNavBar from "../home-components/header/whitenav/WhiteNavBar";
import PricingFaq from "./faq/PricingFaq";
import PricingCards from "./pricingcards/PricingCards";
import HeroPricingSec from "./heroPricingSec/HeroPricingSec";

const page = () => {
  return (
    <section className="flex-flex-col justify-center items-center bg-gradient-to-br from-blue-50 to-indigo-100  ">
      
      <WhiteNavBar />
      <HeroPricingSec />
      <PricingCards />
      <PricingFaq />
      <LastHeroSection />
      <Footer />
     
    </section>
  );
};
export default page;
