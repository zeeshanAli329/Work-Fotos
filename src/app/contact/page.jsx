"use client";
import NavBar from "../home-components/header/NavBar";
import WhiteNavBar from "../home-components/header/whitenav/WhiteNavBar";

import LastHeroSection from "../home-components/heroSections/last-hero-section/LastHeroSection";
import Footer from "../home-components/footer/Footer";
import HeroSection from "./heroSection/HeroSection";
import ContactForm from "./contactForm/ContactForm";

const Page = () => {

  return (
    <>
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 ">
      <div className="max-w-[1500px] mx-auto   flex flex-col justify-center items-center">


           <WhiteNavBar />
           <HeroSection />
           <ContactForm />
           <LastHeroSection />
           <Footer />
      </div>
    </section>
    </>
  );
};

export default Page;
