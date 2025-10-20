import FaqData from "./data/faqRender/FaqRender";
import PricingFaq from "./data/PricingFaq";
import HomeSection from "./home-components/HomeSection";

export default function Home() {
  return (
    <section className="flex flex-col justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-[1440px] mx-auto w-full ">
        <HomeSection />
      </div>
    </section>
 
        // <FaqData />
        // <PricingFaq />
  );
}
