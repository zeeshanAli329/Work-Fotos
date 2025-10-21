"use client";
import Footer from "./footer/Footer";
import NavBar from "./header/NavBar";
import LastHeroSection from "./heroSections/last-hero-section/LastHeroSection";
import Slider from "../img-slider/Slider";
import GeneralFaq from "./heroSections/faq/GeneralFaq";
import VideoHeroSec from "./heroSections/VideoHeroSection/VideoHeroSec";
import WorksStepsSec from "./heroSections/workthreeSteps/WorksStepsSec";
import FeaturesSec from "./heroSections/features/FeaturesSec";
import SmartFeatures from "./heroSections/smartfeatures/SmartFeatures";

const Home = () => {
  return (
    <div className="w-full max-w-[1452px] justify-center ">
      <NavBar />
      <VideoHeroSec />
      <WorksStepsSec />
      <FeaturesSec />
      <SmartFeatures />
      <Slider />
      <GeneralFaq />
      <LastHeroSection />
      <Footer />
    </div>
  );
};

export default Home;
