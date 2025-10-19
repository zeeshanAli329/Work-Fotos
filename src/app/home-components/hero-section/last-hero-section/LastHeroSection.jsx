"use client";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import Link from "next/link";

const LastHeroSection = () => {
  return (
    <section
      style={{
        backgroundImage: "url('/last-hero-bg.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        background: "linear-gradient(0deg, #1E3A8A 0%, #1D4ED8 100%)"
      }}
      className="pt-[24px] pl-[24px] overflow-hidden flex flex-col  text-start 
      bg-gradient-to-t from-[#1E3A8A] to-[#1D4ED8] rounded-[12px] px-[24px] 
      md:flex-row md:justify-between md:items-center md:text-left 
      md:px-[20px]  md:h-[377px] lg:px-[24px]"
    >
      {/* LEFT CONTENT */}
      <div className="flex flex-col gap-5 md:gap-7 lg:gap-8 text-white md:w-[60%]">
        <h1 className="font-inter font-semibold text-[28px] leading-[110%]
          md:text-[44px] lg:text-[48px]">
          Ready To Organize Your Photos In Smarter Way
        </h1>

        <p className="font-inter font-normal text-[15px] leading-[140%] opacity-90
          md:text-[18px] lg:text-[20px] md:w-[75%]">
          Start sorting, sorting and sharing with ease, all available in one place.
        </p>

        <Link
          href="/login"
          className="group flex items-center justify-center  md:justify-center gap-2 
            w-[180px] h-[50px] rounded-[12px] bg-white text-[#0C4DF4] font-medium 
            text-[16px] transition-all duration-300 hover:bg-[#f2f6ff]"
        >
          Get Started Free
          <span className="transform -rotate-45 transition-transform duration-300 group-hover:rotate-0">
            <FaRegArrowAltCircleRight />
          </span>
        </Link>
      </div>

      {/* RIGHT IMAGE */}
      <div className="mt-7  md:w-[40%] flex justify-center md:justify-end md:pl-[80px]">
        <img
          src="/last-hero-img.svg"
          alt="phone image"
          className="w-[260px] md:w-[320px] lg:w-[360px]"
        />
      </div>
    </section>
  );
};

export default LastHeroSection;
