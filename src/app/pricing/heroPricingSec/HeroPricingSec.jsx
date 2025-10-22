import next from "next";
import React from "react";

const HeroPricingSec = () => {
  return (
    <section className="max-w-[1452px] justify-center flex mx-auto ">

     <div className="flex flex-col bg-[linear-gradient(180deg,#1D4ED8_0%,#558DE2_47.89%,#558DE2_57.09%,#2769D7_100%)] m:h-screen lg:h-screen h-[585px] w-full ">

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
    </section>
  );
};

export default HeroPricingSec;
