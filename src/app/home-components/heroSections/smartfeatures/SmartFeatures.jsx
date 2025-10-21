import next from "next";
import Image from "next/image";
import Link from "next/link";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import React from "react";

const SmartFeatures = () => {
  const card = [
    {
      title: "Visual Project Management",
      desc: "Manage job sites by visual hub.",
      img: "/file-card-img.svg"
    },
    {
      title: "Photo & File Organization",
      desc: "Project-based photo storage.",
      img: "/file-search-img.svg"
    },
    {
        title: "Shareable Project Albums",
        desc: "Send polished albums to clients.",
        img: "/file-link-img.svg"
    },
    {
      title: "Branded Public Portfolios",
      desc: "Build a professional portfolio.",
      img: "/file-banner-img.svg"
    },
    {
      title: "CRM & Client Tracking",
      desc: "Store contact info & track.",
      img: "/file-graph-img.svg"
    },
    {
      title: "Smart Notes & Annotations",
      desc: "Notes that add context.",
      img: "/file-copy-img.svg"
    },
    {
      title: "All-in-One Visual Platform",
      desc: "Workflow under one visual roof.",
      img: "/file-window-img.svg"
    },
    {
      title: "Team & Client Collaboration",
      desc: "Assign tasks with real-time updates.",
      img: "/file-circle-img.svg"
    },
  ];
  return (
    <section>
      <section className=" py-20 lg:mt-20 ">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left mt-10 justify-center  flex flex-col lg:items-start items-center">
            <Image
              className="pt-2 mx-auto lg:mx-0"
              src="/smart-img.svg"
              alt="Smart Features"
              height={35}
              width={170}
            />
            <h1 className="font-inter font-bold text-[22px] md:text-[32px] lg:text-[36px] text-gray-900 leading-tight mt-4 w-[70%] lg:w-[90%]">
              WorkFotos Features That{" "}
              <span className="text-blue-600">Simplify & Scale</span> Your
              Workflow
            </h1>
            <Link
              href="/login"
              className="hidden group: ml-10 lg:ml-0 md:flex items-center justify-center group rounded-[16px] mt-8 text-[16px] gap-2 bg-[#2563EB] text-white w-[190px] h-[53px]"
            >
              Join WorkFotos
              <span className="transform -rotate-60 transition-transform duration-300 group-hover:rotate-0">
                <FaRegArrowAltCircleRight />
              </span>
            </Link>
          </div>

          <div className="flex justify-center ">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px]">
              {card.map((card, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between p-5 w-full max-w-[282px] h-[160px] md:h-[182px] lg:h-[182px]"
                >
                  <Image
                    className="w-[28px] h-[28px]"
                    src={card.img}
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
    </section>
  );
};

export default SmartFeatures;
