import React from "react";

const HeroSection = () => {
  return (
    <section>
      <div
        className="bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col lg:px-[100px] md:px-[64px] px-[24px] bg-cover bg-center bg-no-repeat h-[350px] lg:mt-[100px] mt-[60px] md:mt-[84px] w-full justify-center items-center"
        style={{ backgroundImage: "url('/contact-hero-img.svg')" }}
      >
        <div className="flex flex-col gap-5 justify-center items-center ">
          <h1 className=" text-[28px] font-semibold lg:text-[48px] lg:font-bold text-white leading-[100%] text-center">
            Let’s Build Better Together
          </h1>
          <p className=" text-[14px] flex lg:text-[20px] font-normal text-center lg:w-[75%] md:w-[90%]">
            Have a question about WorkFotos or need help getting started? Our
            team is here to support you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
