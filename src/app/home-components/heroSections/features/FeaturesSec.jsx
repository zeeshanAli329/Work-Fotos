import next from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const FeaturesSec = () => {
  return (
    <section>
      <div className="flex justify-center items-center flex-col mt-10 lg:mt-30">
        <div className="text-black flex flex-col justify-center items-center gap-5 ">
          <h1 className="font-inter font-semibold text-[24px] leading-[100%] tracking-[0%] text-center md:text-[48px] lg:text-[48px] md:font-bold lg:font-bold w-[90%]">
            Smart <span className="text-[#2563EB]">Features</span> For Every
            Step of The <span className="text-[#2563EB]">Job</span>
          </h1>
          <p className="font-inter font-normal text-[14px] leading-[100%] tracking-[0%] md:text-[20px] text-center lg:text-start">
            Job photos, notes, teams, and sharing WorkFotos brings everything
            together to help you grow{" "}
          </p>
        </div>
      </div>

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
    </section>
  );
};

export default FeaturesSec;