"use client";
import LastHeroSection from "../home-components/heroSections/last-hero-section/LastHeroSection";
import Footer from "../home-components/footer/Footer";
import WhiteNavBar from "../home-components/header/whitenav/WhiteNavBar";
import PricingFaq from "./faq/PricingFaq";
import PricingCards from "./pricingcards/PricingCards";
import HeroPricingSec from "./heroPricingSec/HeroPricingSec";

const Page = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100">
 
      {/* <div className="max-w-[1452px]    flex flex-col justify-center items-center"> */}
        <WhiteNavBar />
        <HeroPricingSec />
        <PricingCards />
        <PricingFaq />
        <LastHeroSection />
        <Footer />
      {/* </div> */}
    </section>
  );
};

export default Page;
