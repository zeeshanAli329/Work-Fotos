import next from "next";
import Link from "next/link";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

import React from 'react';

const HeroPowerSection = () => {
    return (
        <div>
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
            
        </div>
    );
}

export default HeroPowerSection;
