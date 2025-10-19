"use client";
import next from "next";
import NavBar from "../home-components/header/NavBar";
import Link from "next/link";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import Slider from "../home-components/hero-section/img-slider/Slider";
import FAQAccordion from "../home-components/hero-section/bottom-hero-section/BottomSection";
import LastHeroSection from "../home-components/hero-section/last-hero-section/LastHeroSection";
import Footer from "../home-components/footer/Footer";

const page = () => {
  return (
    <section className="relative z-0 flex flex-col justify-center items-center bg-gradient-to-br from-blue-50 to-indigo-100 ">

      <div className="w-full max-w-[1450px] mx-auto">
        <NavBar />

        <div className="relative w-[100%] flex flex-col justify-center items-center min-h-screen max-w-[1450px] ">
          <div className="h-screen flex justify-start z-0 items-center bg-cover bg-no-repeat relative overflow-hidden w-full ">
            {/* -------- Background Video------ */}
            <img
              src="/how-it-works-page.png"
              className="absolute top-0 left-0 w-full h-full object-cover -z-10"
            />

            {/* ---------------- hero section ------------- */}
            <div className="flex justify-start items-center h-[calc(100vh-100px)] text-white lg:px-[100px] md:px-[100px] px-[20px] ">
              <div className="w-[608px] gap-5">
                <div className="flex flex-col gap-5 md:mt-20 lg:mt-20 mt-10 lg-w-full md:w-full w-[60%]">
                  <h1 className="font-inter font-bold lg:text-[48px] md:text-[48px] text-[28px] leading-[100%] tracking-[0%]">
                    How WorkFotos{" "}
                    <span className="text-[#2563EB]">Powers Your Projects</span>
                  </h1>
                  <p className="lg:text-[18px] md:text-[18px] text-[14px] w-[90%]">
                    From jobsite to showcase see how everything connects to save
                    you time, impress clients, and grow your business.
                  </p>
                </div>

                <Link
                  href="/login"
                  className="group w-[190px] h-[53px] flex items-center justify-center rounded-[16px] mt-5 text-[16px] gap-2 bg-[#2563EB] text-white transition-all duration-300 hover:bg-[#1e4fd8]"
                >
                  Start Free Trial
                  <span className="inline-block transform -rotate-60 transition-transform duration-300 group-hover:rotate-0">
                    <FaRegArrowAltCircleRight />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center flex-col mt-10">
          {/* Heading Section */}
          <div className="text-black flex flex-col justify-center items-center gap-5 w-full">
            <div className="flex flex-col gap-5 justify-center items-center text-center">
              <h1 className="font-inter font-semibold text-[24px] leading-[100%] tracking-[0%] text-center md:text-[48px] lg:text-[48px] md:font-bold lg:font-bold w-full">
                Start <span className="text-[#2563EB]">Smarter,</span> Not{" "}
                <span className="text-[#2563EB]">Harder</span>
              </h1>
              <p className="font-inter font-normal text-[14px] leading-[100%] tracking-[0%] md:text-[20px] w-[80%] text-center">
                WorkFotos simplifies every step from the first photo to the
                final invoice.
              </p>
            </div>
          </div>
        </div>
        {/* -----------------card-section------------- */}
        <div className="px-[24px]  ">
          {/* ------------cards------------- */}
          <section className="flex flex-col lg:flex-row md:flex-row  justify-center items-center gap-15 md:px-[64px] ">
            <div className="flex flex-wrap justify-center items-center  font-inter mt-8 lg:mt-10 transition-all duration-300 ease-in-out hover:scale-101 rounded-lg shadow-md ">
              <div className="md:w-[222px] md:h-[138px]  lg:w-[292px]   w-[210px] h-[110px] py-[16px] px-[12px]   md:px-[29px] md:py-[42px] flex flex-col justify-center items-center gap-5 bg-white rounded-lg ">
                <div className="flex justify-center items-center gap-2 ">
                  <img
                    className="lg:w-[28px] lg:h-[28px] w-[19px] h-[20px] "
                    src="/how-to-woks-page-file-img.svg"
                  ></img>
                  <h1 className="text-[#1E3A8A] font-bold lg:text-[20px] text-[14px] tracking-[0%] leading-[100%]">
                    Set Up Your Project
                  </h1>
                </div>
                <p className="lg:text-[16px] text-[12px] text-[#000000]  ml-[5px]">
                  Create a new project in seconds just give it a name and you’re
                  ready to go.
                </p>
              </div>
            </div>
            <div className="flex md:hidden lg:hidden ">
              <video
                src="/video-how-to...mp4"
                loop
                autoPlay
                muted
                playsInline
                className="w-[342px] h-[162px] rounded-lg shadow-md object-cover"
              />
            </div>
            <div className="flex flex-wrap justify-center items-center font-inter mt-8 lg:mt-10 transition-all duration-300 ease-in-out hover:scale-101 rounded-lg shadow-md bg-[#ffffff]">
              <div className="md:w-[222px] md:h-[138px] lg:w-[292px] lg:h-[187px]  w-[210px] h-[110px] py-[16px] px-[12px]  md:px-[29px] md:py-[42px] flex flex-col justify-start items-start gap-5  ">
                <div className="flex justify-center items-center gap-2 ">
                  <img
                    className="lg:w-[28px] lg:h-[28px] w-[19px] h-[20px] "
                    src="/how-to-woks-page-file-2-img.svg"
                  ></img>
                  <h1 className="text-[#1E3A8A] font-bold lg:text-[20px] text-[14px] tracking-[0%] leading-[100%]">
                    Organize Photos
                  </h1>
                </div>
                <p className="lg:text-[16px] text-[12px] text-[#000000] ">
                  Capture site photos, tag them with notes, dates, and locations
                  all from your phone.
                </p>
              </div>
            </div>
            <div className="flex md:hidden lg:hidden ">
              <video
                src="/video-how-to...mp4"
                loop
                autoPlay
                muted
                playsInline
                className="w-[342px] h-[162px] rounded-lg shadow-md object-cover"
              />
            </div>

            <div className="flex flex-wrap justify-center items-center font-inter mt-8 lg:mt-10 transition-all duration-300 ease-in-out hover:scale-101 rounded-lg shadow-md bg-[#ffffff]">
              <div className="md:w-[222px] md:h-[138px]  lg:w-[292px] lg:h-[187px] w-[210px] h-[110px] py-[16px] px-[12px]  md:px-[29px] md:py-[42px] flex flex-col justify-center items-center gap-5  ">
                <div className="flex justify-center items-center gap-2">
                  <img
                    className="lg:w-[28px] lg:h-[28px] w-[19px] h-[20px] "
                    src="/how-to-woks-page-file-3-img.svg"
                  ></img>
                  <h1 className="text-[#1E3A8A] font-bold lg:text-[20px] text-[14px] tracking-[0%] leading-[100%]">
                    Share Work Reports
                  </h1>
                </div>
                <p className="lg:text-[16px] text-[12px] text-[#000000] ml-[5px]">
                  Generate polished, ready-to-send reports for clients,
                  managers, or your own .
                </p>
              </div>
            </div>
            <div className="flex md:hidden lg:hidden ">
              <video
                src="/video-how-to...mp4"
                loop
                autoPlay
                muted
                playsInline
                className="w-[342px] h-[162px] rounded-lg shadow-md object-cover"
              />
            </div>
          </section>
          <div className="hidden lg:flex justify-center items-center mt-20">
            <video
              src="/video-how-to...mp4"
              loop
              autoPlay
              muted
              playsInline
              className="w-[1088px] h-[513px] rounded-lg shadow-md object-cover"
            />
          </div>
        </div>
        <div className="flex-col mt-10 flex bg-[linear-gradient(180deg,#1D4ED8_0%,#558DE2_47.89%,#558DE2_57.09%,#2769D7_100%)] w-full h-auto md:px-[64px] lg:px-[100px] px-[20px] ">
          <div className="flex justify-center items-center flex-col mt-10 gap-10">
            {/* Heading Section */}
            <div className="text-white flex flex-col justify-center items-center gap-5 w-full">
              <div className="flex flex-col gap-5 justify-center items-center text-center">
                <h1 className="font-inter font-semibold text-[24px] leading-[100%] tracking-[0%] text-center md:text-[48px] lg:text-[48px] md:font-bold lg:font-bold w-full">
                  Everything You Need, One Place
                </h1>
                <p className="font-inter font-normal text-[14px] leading-[100%] tracking-[0%] md:text-[20px] w-[80%] text-center">
                  Manage your photos, documents, reports, and client-facing
                  portfolio from a single dashboard.
                </p>
              </div>
            </div>
            <img
              className="lg:w-[911px] lg:h-[415px] w-full h-[198px] rounded-[14px]"
              src="/ft-img.png"
              alt="dashboard"
            />
          </div>
          <div className="flex lg:flex-row w-[100%] lg:mt-20 mt-10 lg:mb-30 md:mb-20 mb-10 flex-wrap justify-around flex-col gap-5 ">
            <div
              className="flex lg:w-[30%] lg:px-2 lg:h-[76px] h-[42px] px-[44px] w-full
                     bg-[rgba(255,255,255,0.33)] border border-[rgba(255,255,255,0.66)] 
                       backdrop-blur-[24px] items-center gap-2 rounded-[14px]"
            >
              <img
                className="w-[25] h-[25] lg:[44px] lg:w-[44px]"
                src="/c1.svg"
                alt="window"
              />
              <p className="lg:text-[24px] text-white text-[14px]">
                Jobsite photo organization
              </p>
            </div>
            <div
              className="flex lg:w-[30%] lg:px-2 lg:h-[76px] h-[42px] px-[44px] w-full
                     bg-[rgba(255,255,255,0.33)] border border-[rgba(255,255,255,0.66)] 
                       backdrop-blur-[24px] items-center gap-2 rounded-[14px]"
            >
              <img
                className="w-[25] h-[25] lg:[44px] lg:w-[44px]"
                src="/c2.svg"
                alt="window"
              />
              <p className="lg:text-[24px] text-white text-[14px]">
                Team & Task Tracking
              </p>
            </div>
            <div
              className="flex lg:w-[30%] lg:px-2 lg:h-[76px] h-[42px] px-[44px] w-full
                     bg-[rgba(255,255,255,0.33)] border border-[rgba(255,255,255,0.66)] 
                       backdrop-blur-[24px] items-center gap-2 rounded-[14px]"
            >
              <img
                className="w-[25] h-[25] lg:[44px] lg:w-[44px]"
                src="/c3.svg"
                alt="window"
              />
              <p className="lg:text-[24px] text-white text-[14px]">
                Estimate & Invoice
              </p>
            </div>
            <div
              className="flex lg:w-[30%] lg:px-2 lg:h-[76px] h-[42px] px-[44px] w-full
                     bg-[rgba(255,255,255,0.33)] border border-[rgba(255,255,255,0.66)] 
                       backdrop-blur-[24px] items-center gap-2 rounded-[14px]"
            >
              <img
                className="w-[25] h-[25] lg:[44px] lg:w-[44px]"
                src="/c4.svg"
                alt="window"
              />
              <p className="lg:text-[24px] text-white text-[14px]">
                Custom Branding
              </p>
            </div>
            <div
              className="flex lg:w-[30%] lg:px-2 lg:h-[76px] h-[42px] px-[44px] w-full
                     bg-[rgba(255,255,255,0.33)] border border-[rgba(255,255,255,0.66)] 
                       backdrop-blur-[24px] items-center gap-2 rounded-[14px]"
            >
              <img
                className="w-[25] h-[25] lg:[44px] lg:w-[44px]"
                src="/c5.svg"
                alt="window"
              />
              <p className="lg:text-[24px] text-white text-[14px]">
                Portfolio & Share Links
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center lg:px-[100px] md:px-[64px] px-[14px]">
          <div className="flex justify-center items-center text-black flex-col gap-5 mt-20 text-center">
            <h1 className="font-inter font-bold lg:text-[48px] md:text-[48px] text-[28px] leading-[100%] tracking-[0%]">
              How WorkFotos{" "}
              <span className="text-[#2563EB]">Powers Your Projects</span>
            </h1>
            <p className="lg:text-[18px] md:text-[18px] text-[14px] w-[90%] mx-auto">
              From jobsite to showcase see how everything connects to save you
              time, impress clients, and grow your business.
            </p>
          </div>
        </div>

        <div
          className="flex justify-between items-center w-full h-[500px] lg:px-[100px] md:px-[64px] px-[20px]  
  md:overflow-visible overflow-x-auto scrollbar-hide gap-5"
        >
          {/* ----------card-1------- */}
          <div className="relative group min-w-[292px] h-[400px] rounded-[16px] overflow-hidden cursor-pointer flex-shrink-0">
            <div className="absolute inset-0 bg-[url('/cd-1.jpg')] bg-cover bg-center transition-opacity duration-700 ease-in-out group-hover:opacity-0"></div>
            <div className="absolute inset-0 bg-[url('/cd-1-1.svg')] bg-cover bg-center opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100"></div>
            <div className="relative z-10 flex justify-center items-end h-full pb-6">
              <button className="w-[164px] h-[43px] font-bold text-[16px] mb-10 text-[#000000] rounded-[100px] bg-white transition-all duration-700 ease-in-out group-hover:bg-black group-hover:text-white">
                Interior Designer
              </button>
            </div>
          </div>

          {/* ----------card-2------- */}
          <div className="relative group min-w-[292px] h-[400px] rounded-[16px] overflow-hidden cursor-pointer flex-shrink-0">
            <div className="absolute inset-0 bg-[url('/cd-2.jpg')] bg-cover bg-center transition-opacity duration-700 ease-in-out group-hover:opacity-0"></div>
            <div className="absolute inset-0 bg-[url('/cd-2-1.svg')] bg-cover bg-center opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100"></div>
            <div className="relative z-10 flex justify-center items-end h-full pb-6">
              <button className="w-[164px] h-[43px] font-bold text-[16px] mb-10 text-[#000000] rounded-[100px] bg-white transition-all duration-700 ease-in-out group-hover:bg-black group-hover:text-white">
                Interior Designer
              </button>
            </div>
          </div>

          {/* ----------card-3------- */}
          <div className="relative group min-w-[292px] h-[400px] rounded-[16px] overflow-hidden cursor-pointer flex-shrink-0">
            <div className="absolute inset-0 bg-[url('/cd-3.jpg')] bg-cover bg-center transition-opacity duration-700 ease-in-out group-hover:opacity-0"></div>
            <div className="absolute inset-0 bg-[url('/cd-3-1.svg')] bg-cover bg-center opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100"></div>
            <div className="relative z-10 flex justify-center items-end h-full pb-6">
              <button className="w-[164px] h-[43px] font-bold text-[16px] mb-10 text-[#000000] rounded-[100px] bg-white transition-all duration-700 ease-in-out group-hover:bg-black group-hover:text-white">
                Interior Designer
              </button>
            </div>
          </div>

          {/* ----------card-4------- */}
          <div className="relative group min-w-[292px] h-[400px] rounded-[16px] overflow-hidden cursor-pointer flex-shrink-0">
            <div className="absolute inset-0 bg-[url('/cd-4.png')] bg-cover bg-center transition-opacity duration-700 ease-in-out group-hover:opacity-0"></div>
            <div className="absolute inset-0 bg-[url('/cd-4-1.svg')] bg-cover bg-center opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100"></div>
            <div className="relative z-10 flex justify-center items-end h-full pb-6">
              <button className="w-[164px] h-[43px] font-bold text-[16px] mb-10 text-[#000000] rounded-[100px] bg-white transition-all duration-700 ease-in-out group-hover:bg-black group-hover:text-white">
                Interior Designer
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:px-[100px] md:px-[64px] px-[24px] relative">
          <Slider />
          <FAQAccordion />
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
