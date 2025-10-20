"use client";
import next from "next";
import Image from "next/image";
import Link from "next/link";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import Slider from "./img-slider/Slider";
import FAQAccordion from "./bottom-hero-section/BottomSection";
import LastHeroSection from "./last-hero-section/LastHeroSection";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 lg:px-[100px] md:px-[70px] px-[20px] h-auto max-w-[1452px]">
      <div className="max-w-7xl mx-auto">
        {/* -------hero-heading-section-1----------- */}
        <div className="h-[200px] w-[100%] flex flex-col  gap-2 text-[black] font-inter  ">
          <h1 className="lg:font-bold  leading-[100%] tracking-[0%] font-semibold text-[24px] text-center lg:mt-20 md:mt-[50px] mt-[80px] md:text-[48px] lg:text-[48px]">
            How WorkFotos <span className="text-[#2563EB]">Works</span>
          </h1>

          <p className="leading-[100%] tracking-[0%] text-center font-normal text-[14px] md:text-[20px] lg:text-[20px] ">
            Simplify your workflow in just three steps
          </p>
        </div>

        <div className="flex flex-col md:flex-row lg:flex-row justify-between ">
          {/* -------- Image Section -------- */}
          <div className="md:w-[50%] w-full lg:w-[50%] flex justify-center items-center group py-10 lg:py-0 ">
            <div className="relative flex justify-center items-center w-full h-full">
              <Image
                src="/iphon-img-2.svg"
                alt="Phone 2"
                width={492}
                height={240}
                className="inline-block transform -rotate-10 transition-transform duration-300 group-hover:rotate-0 
                       w-[190px] h-[300px] md:w-[240px] md:h-[400px] lg:w-[480px] lg:h-[500px]  "
                priority
              />
              <Image
                src="/iphon-img-1.svg"
                alt="Phone 1"
                width={492}
                height={240}
                className="inline-block transform rotate-10 transition-transform duration-300 group-hover:rotate-0 
                       w-[190px] h-[300px] md:w-[240px] md:h-[400px] lg:w-[480px] lg:h-[500px] ml-[-40px] "
                priority
              />
            </div>
          </div>

          {/* -------- Content Section -------- */}
          <div className="w-full md:w-[50%]  lg:w-[50%] flex flex-col gap-10 px-6 lg:pl-[40px] justify-center">
            {/* 1 */}
            <div className="flex gap-2">
              <div className="flex">
                <Image src="/file-img.svg" alt="File" width={40} height={40} />
              </div>
              <div className="flex flex-col gap-2 text-black ">
                <h1 className="font-inter font-bold text-[20px] lg:text-[24px] leading-[100%] ">
                  Create Projects
                </h1>
                <p className="font-inter font-normal text-[14px] lg:text-[16px] leading-[150%]">
                  Start by adding a job using the address or client name —
                  simple and organized from the start.
                </p>
              </div>
            </div>

            {/* 2 */}
            <div className="flex gap-3">
              <Image src="/share-img.svg" alt="Share" width={40} height={40} />
              <div className="flex flex-col gap-2 text-black">
                <h1 className="font-inter font-bold text-[20px] lg:text-[24px] leading-[100%]">
                  Upload & Track
                </h1>
                <p className="font-inter font-normal text-[14px] lg:text-[16px] leading-[150%]">
                  Add jobsite photos, write notes, and keep progress visible all
                  in one place.
                </p>
              </div>
            </div>

            {/* 3 */}
            <div className="flex gap-3">
              <Image
                src="/upload-img.svg"
                alt="Upload"
                width={40}
                height={40}
              />
              <div className="flex flex-col gap-2 text-black">
                <h1 className="font-inter font-bold text-[20px] lg:text-[24px] leading-[100%]">
                  Share or Showcase
                </h1>
                <p className="font-inter font-normal text-[14px] lg:text-[16px] leading-[150%]">
                  Add jobsite photos, write notes, and keep progress visible all
                  in one place.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* hero-section-3 */}

        <div className="flex justify-center items-center flex-col mt-10 ">
          {/* <<<<<<<<---heading---section= */}
          <div className="text-black flex flex-col justify-center items-center gap-5">
            <h1 className="font-inter font-semibold text-[24px] leading-[100%] tracking-[0%] text-center md:text-[48px] lg:text-[48px] md:font-bold lg:font-bold w-[90%]">
              Smart <span className="text-[#2563EB]">Features</span> For Every
              Step of The <span className="text-[#2563EB]">Job</span>
            </h1>
            <p className="font-inter font-normal text-[14px] leading-[100%] tracking-[0%] md:text-[20px]">
              Job photos, notes, teams, and sharing WorkFotos brings everything
              together to help you grow{" "}
            </p>
          </div>
        </div>
        {/* ------------hero-section-3 */}
        <div className="flex mt-10 justify-center w-full h-[144px] rounded-[15px]  border-none md:h-[580px]">
          <div className="bg-[#1E3A8A] w-[72px]  rounded-l-[15px] lg:w-[252px] lg:h[504] md:w-[252px]  flex flex-col md:h-[504px]">
            <Image
              src="/logo.svg"
              width={100}
              height={400}
              alt="img"
              className="w-[38px] h-[10px]  ml-[5px] mt-[10px] lg-w-[133px] md:w-[133px] lg:h-[333px]  md:ml-[10px] md:mt-[15px] sm:w-[281px] md:h-[34px] "
            />
            <Image
              src="/video-img.svg"
              width={200}
              height={600}
              alt="img"
              className="mt-[5px] w-[277px] md:ml-[-30px] ml-[-6px] lg:ml-[-30px] lg:mt-[20px] md:mt-[20px] md:h-[503px]"
            />
          </div>

          {/* ---vidoe-section */}
          <div className="">
            <video
              src="/video-2.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover z-10 rounded-r-[15px]
            mt-[5px] md:h-[503px] lg:h-[503px] md:w-[967px] lg:w-[967px]
            shadow-[0px_0px_5.73px_0px_#0000001A]"
            />
          </div>
        </div>

        <section className="  py-20 ">
          <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* LEFT CONTENT */}
            <div className="text-center lg:text-left mt-10">
              <Image
                className="pt-2 mx-auto lg:mx-0"
                src="/smart-img.svg"
                alt="Smart Features"
                height={35}
                width={170}
              />
              <h1 className="font-inter font-bold text-[22px] md:text-[32px] lg:text-[36px] text-gray-900 leading-tight mt-4">
                WorkFotos Features That{" "}
                <span className="text-blue-600">Simplify & Scale</span> Your
                Workflow
              </h1>
              <Link
                href="/login"
                className="hidden ml-10 md:flex items-center justify-center group rounded-[16px] mt-8 text-[16px] gap-2 bg-[#2563EB] text-white w-[190px] h-[53px]"
              >
                Join WorkFotos
                <span className="transform -rotate-60 transition-transform duration-300 hover:rotate-0">
                  <FaRegArrowAltCircleRight />
                </span>
              </Link>
            </div>

            <div className="flex justify-center ">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px]">
                {[
                  {
                    title: "Visual Project Management",
                    desc: "Manage job sites by visual hub.",
                  },
                  {
                    title: "Photo & File Organization",
                    desc: "Project-based photo storage.",
                  },
                  {
                    title: "Shareable Project Albums",
                    desc: "Send polished albums to clients.",
                  },
                  {
                    title: "Branded Public Portfolios",
                    desc: "Build a professional portfolio.",
                  },
                  {
                    title: "CRM & Client Tracking",
                    desc: "Store contact info & track.",
                  },
                  {
                    title: "Smart Notes & Annotations",
                    desc: "Notes that add context.",
                  },
                  {
                    title: "All-in-One Visual Platform",
                    desc: "Workflow under one visual roof.",
                  },
                  {
                    title: "Team & Client Collaboration",
                    desc: "Assign tasks with real-time updates.",
                  },
                ].map((card, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between p-5 w-full max-w-[282px] h-[160px] md:h-[182px] lg:h-[182px]"
                  >
                    <Image
                      className="w-[28px] h-[28px]"
                      src="/file-card-img.svg"
                      width={28}
                      height={28}
                      alt="icon"
                    />
                    <h2 className="font-inter font-bold text-[18px] md:text-[20px] text-gray-800 mt-2">
                      {card.title}
                    </h2>
                    <p className="font-['Quattrocento_Sans'] text-[14px] md:text-[16px] text-gray-600">
                      {card.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

        
            <Link
              href="/login"
              className="group md:hidden flex items-center justify-center gap-2 w-[190px] h-[53px] mx-auto mt-8
             rounded-[16px] bg-[#2563EB] text-white text-[16px] transition-all duration-300"
            >
              Join WorkFotos
              <span className="transform -rotate-60 transition-transform duration-300 group-hover:rotate-0">
                <FaRegArrowAltCircleRight />
              </span>
            </Link>
          </div>
        </section>


      </div>
    </section>
  );
};
export default HeroSection;
