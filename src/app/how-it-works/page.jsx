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
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100">
    
        <NavBar />
        <HeroPowerSection />
        <SmarterSection />
        <TaskCards />
        <Cards />
        <Slider />
        <WorksPage />
        <LastHeroSection />
        <Footer />
    
     
    </section>
  );
};
export default page;
