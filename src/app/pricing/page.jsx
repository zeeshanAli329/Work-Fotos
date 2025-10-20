import next from "next";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import LastHeroSection from "../home-components/hero-section/last-hero-section/LastHeroSection";
import Footer from "../home-components/footer/Footer";
import WhiteNavBar from "../home-components/header/whitenav/WhiteNavBar";
import PricingFaq from "../data/PricingFaq";

const page = () => {
  const features = [
    "Unlimited Photo Storage",
    "Project Album Tools",
    "Estimates & Invoices",
    "Before & After Templates",
    "Map-Linked Photos",
    "Public Portfolio Page",
    "Private Notes & Markups",
    "Mobile + Desktop Access",
  ];

  return (
    <section className="flex-flex-col justify-center items-center bg-gradient-to-br from-blue-50 to-indigo-100  ">
      <div className="flex flex-col bg-[linear-gradient(180deg,#1D4ED8_0%,#558DE2_47.89%,#558DE2_57.09%,#2769D7_100%)] m:h-screen lg:h-screen h-[585px] w-full ">
        <WhiteNavBar />

        <div className="flex flex-col justify-end   h-screen md:items-end lg:items-end items-center">
          <div className="flex md:h-[300px] h-[200px] md:bg-none  w-full md:mb-[-100px] lg:mb-[-100px] mb-[-60px] z-10">
            <div className="flex flex-col gap-5 items-center md:justify-end justify-start  w-full">
              <div className="flex flex-col gap-5  justify-center items-center md:w-[60%] w-[90%]">
                <h1 className="font-inter font-bold lg:text-[48px] md:text-[48px] text-[28px] text-center leading-[100%] tracking-[0%]">
                  Smart Plans. WorkFotos Results.
                </h1>
                <p className="lg:text-[18px] md:text-[18px] text-[14px] w-[90%] text-center">
                  Join the modern platform designed to grow your business, boost
                  your online presence, and showcase your work visually to your
                  clients and community.
                </p>
              </div>
            </div>
          </div>
          <div className="flex z-0 w-full justify-between">
            <img
              className="w-[176px] h-[266px] md:h-auto md:w-auto lg:h-auto lg:w-auto"
              src="/mb-l.png"
            />
            <img
              className="w-[176px] h-[266px] md:h-auto md:w-auto lg:h-auto lg:w-auto"
              src="/pricing-right-img.png"
            />
          </div>
        </div>
      </div>

      <div className="flex md:px-[64px] lg:px-[100px] px-[24px] flex-col">
        <div className="flex w-full justify-center gap-0 md:mt-[-250px] lg:mt-[-250px] mt-[-200px]">
          {/* price-one-------------- */}
          <section className="flex justify-center items-center py-10 px-4">
            <div className="w-[360px] bg-white rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.1)] overflow-hidden relative">
              <div className="bg-[linear-gradient(180deg,#1D4ED8_0%,#558DE2_47.89%,#558DE2_57.09%,#2769D7_100%)] text-white text-center py-2 text-sm font-medium tracking-wide">
                RECOMMENDED
              </div>

              {/* Content */}
              <div className="px-6 py-8 text-center">
                <h2 className="text-xl font-semibold text-gray-900">
                  WorkFotos Pro
                </h2>
                <p className="text-gray-500 text-sm mt-1">
                  Perfect for solo professionals and growing teams.
                </p>

                <h3 className="text-[32px] font-bold text-[#1D4ED8] mt-4">
                  $29/mo
                </h3>
                <p className="text-gray-500 text-sm mt-1">
                  15-Day Free Trial. Cancel Anytime.
                </p>

                <button className="cursor-pointer mt-5 w-full py-3 rounded-full text-white font-medium text-[16px] bg-[linear-gradient(180deg,#1D4ED8_0%,#558DE2_47.89%,#558DE2_57.09%,#2769D7_100%)] hover:opacity-90 transition-all">
                  Get Start Now
                </button>

                <hr className="my-6 border-gray-200" />

                <h4 className="text-gray-800 font-semibold text-left mb-3">
                  Top Features Included:
                </h4>

                <ul className="space-y-3 text-left">
                  {features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-gray-700 text-sm"
                    >
                      <CheckCircleIcon className="h-5 w-5 text-[#1D4ED8]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
          <section className="md:flex lg:flex hidden justify-center items-center py-10 px-4">
            <div className="w-[360px] bg-white rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.1)] overflow-hidden relative">
              <div className="bg-[linear-gradient(180deg,#1D4ED8_0%,#558DE2_47.89%,#558DE2_57.09%,#2769D7_100%)] text-white text-center py-4 text-sm font-medium tracking-wide"></div>

              <div className="px-6 py-8 text-center">
                <h2 className="text-xl font-semibold text-gray-900">
                  WorkFotos Pro
                </h2>
                <p className="text-gray-500 text-sm mt-1">
                  Perfect for solo professionals and growing teams.
                </p>

                <h3 className="text-[32px] font-bold text-[#1D4ED8] mt-4">
                  $290/year
                </h3>
                <p className="text-gray-500 text-sm mt-1">
                  15-Day Free Trial. Cancel Anytime.
                </p>

                <button className="mt-5 w-full py-3 rounded-full text-white font-medium text-[16px] bg-[linear-gradient(180deg,#1D4ED8_0%,#558DE2_47.89%,#558DE2_57.09%,#2769D7_100%)] hover:opacity-90 transition-all cursor-pointer">
                  Get Start Now
                </button>

                <hr className="my-6 border-gray-200" />

                <h4 className="text-gray-800 font-semibold text-left mb-3">
                  Top Features Included:
                </h4>

                <ul className="space-y-3 text-left">
                  {features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-gray-700 text-sm"
                    >
                      <CheckCircleIcon className="h-5 w-5 text-[#1D4ED8]" />

                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </div>

        <div className="flex flex-col  relative">
          {/* <Slider /> */}
          {/* <FAQ /> */}
          <PricingFaq />
      
          <div className="relative z-10 lg:-mb-[80px] mb-[130px]">
            <LastHeroSection />
          </div>
        </div>

       
      </div>
        <Footer />
    </section>
  );
};
export default page;
