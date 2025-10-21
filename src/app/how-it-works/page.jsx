"use client";
import next from "next";
import NavBar from "../home-components/header/NavBar";
import Link from "next/link";
import Slider from "../img-slider/Slider";
import LastHeroSection from "../home-components/heroSections/last-hero-section/LastHeroSection";
import Footer from "../home-components/footer/Footer";
// import WorksPage from "../data/worksPage";
import WorksPage from "./faq/worksPage";
import { Key } from "lucide-react";
import Cards from "./cards/Cards";
import TaskCards from "./taskcards/TaskCards";
import HeroPowerSection from "./power-section/HeroPowerSection";
import SmarterSection from "./smarter-section/SmarterSection";

const page = () => {
  return (
    <section className="relative z-0 flex flex-col justify-center items-center bg-gradient-to-br from-blue-50 to-indigo-100 ">
      <div className="w-full max-w-[1450px] mx-auto">
        <NavBar />
        <HeroPowerSection />
        <SmarterSection />
        <TaskCards />
        <Cards />
        <div className="flex flex-col lg:px-[100px] md:px-[64px] px-[24px] relative">
          <Slider />
          <WorksPage />
          <div className="relative z-10 -mb-[80px]">
            <LastHeroSection />
          </div>
        </div>
        <Footer />
      </div>
    </section>
  );
};
export default page;
