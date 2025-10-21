import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaRegArrowAltCircleRight } from "react-icons/fa"
const WorksStepsSec = () => {
  const Card = [
    {
      img: "/file-img.svg",
      title: "Create Projects",
      para: "Start by adding a job using the address or client name simple and organized from the start.",
    },
    {
      img: "/share-img.svg",
      title: "Upload & Track",
      para: "Add jobsite photos, write notes, and keep progress visible all in one place."
    },
    {
      img: "/upload-img.svg",
      title: "Share or Showcase",
      para: "Add jobsite photos, write notes, and keep progress visible all in one place."
    }
  ]
  return (
    <section>
                
      <div className="h-[200px] w-[100%] flex flex-col  gap-2 text-[black] font-inter  ">
        <h1 className="lg:font-bold  leading-[100%] tracking-[0%] font-semibold text-[24px] text-center lg:mt-20 md:mt-[50px] mt-[80px] md:text-[48px] lg:text-[48px]">
          How WorkFotos <span className="text-[#2563EB]">Works</span>
        </h1>

        <p className="leading-[100%] tracking-[0%] text-center font-normal text-[14px] md:text-[20px] lg:text-[20px] ">
          Simplify your workflow in just three steps
        </p>
      </div>

      {Card.map((items, index) => {
        <div
        key={index}
        className="w-full md:w-[50%]  lg:w-[50%] flex flex-col gap-10 px-6 lg:pl-[40px] justify-center">
        <div className="flex gap-3 justify-start">
          <Image src={items.img} alt="Share" width={50} height={50} />
          <div className="flex flex-col gap-2 text-black">
              <h1 className="font-inter font-bold text-[20px] lg:text-[24px] leading-[100%]">
                {items.title}
              </h1>
              <p className="font-inter font-normal text-[14px] lg:text-[16px] leading-[150%]">
                {items.para}
              </p>

          </div>
        </div>
        </div>
      })}    
    </section>
  );
};

export default WorksStepsSec;
