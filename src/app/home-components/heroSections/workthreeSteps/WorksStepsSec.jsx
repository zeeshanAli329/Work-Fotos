import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaRegArrowAltCircleRight } from "react-icons/fa"
const WorksStepsSec = () => {
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
      <div className="flex flex-col md:flex-row lg:flex-row justify-between  lg:px-[100px] md:px-[70px] px-[20px] h-auto max-w-[1452px] ">
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
                Start by adding a job using the address or client name — simple
                and organized from the start.
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
            <Image src="/upload-img.svg" alt="Upload" width={40} height={40} />
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
    </section>
  );
};

export default WorksStepsSec;
