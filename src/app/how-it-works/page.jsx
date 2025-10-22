"use client";
import NavBar from "../home-components/header/NavBar";
import Slider from "../img-slider/Slider";
import LastHeroSection from "../home-components/heroSections/last-hero-section/LastHeroSection";
import Footer from "../home-components/footer/Footer";
import WorksPage from "./faq/worksPage";
import Cards from "./cards/Cards";
import TaskCards from "./taskcards/TaskCards";
import HeroPowerSection from "./power-section/HeroPowerSection";
import SmarterSection from "./smarter-section/SmarterSection";

const Page = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-[1452px] mx-auto ">
        <NavBar />
        <HeroPowerSection />
        <SmarterSection />
        <TaskCards />
        <Cards />
        <Slider />
        <WorksPage />
        <LastHeroSection />
        <Footer />
      </div>
    </section>
  );
};

export default Page;
