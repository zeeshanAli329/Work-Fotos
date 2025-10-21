'use client'
import React from "react";
import Link from "next/link";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const VideoHeroSec = () => {
  return (
    <section>
      <div className="relative w-full min-h-screen max-w-[1450px] overflow-hidden">
        {/* -------- Background Video------ */}
        <video
          src="/hero-bg-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />

        {/* ---------------- hero section ------------- */}
        <div className="absolute top-0 left-0 w-full h-full flex justify-start items-center text-white lg:px-[100px] md:px-[100px] px-[20px] z-20">
          <div className="w-[608px] gap-5">
            <div className="flex flex-col gap-5 mt-20">
              <h1 className="font-inter font-bold lg:text-[48px] md:text-[48px] text-[28px] leading-[100%] tracking-[0%]">
                Turn <span className="text-[#2563EB]">Work Photos</span> Into
                More Business
              </h1>
              <p className="lg:text-[18px] md:text-[18px] text-[14px] w-[90%]">
                Organize, showcase, and grow with the visual platform built for
                service pros who want to win more work.
              </p>
            </div>

            <Link
              href="/login"
              className="group w-[190px] h-[53px] flex items-center justify-center rounded-[16px] mt-5 text-[16px] gap-2 bg-[#2563EB] text-white transition-all duration-300 hover:bg-[#1e4fd8]"
            >
              Join WorkFotos
              <span className="inline-block transform -rotate-60 transition-transform duration-300 group-hover:rotate-0">
                <FaRegArrowAltCircleRight />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoHeroSec;
