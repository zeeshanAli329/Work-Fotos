import next from "next";
import { Link } from 'next/link'
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import React from 'react';

const PricingCards = () => {
      const features = [
    "Unlimited Photo Storage",
    "Project Album Tools",
    "Estimates & Invoices",
    "Before & After Templates",
    "Map-Linked Photos",
    "Public Portfolio Page",
    "Private Notes & Markups",
    "Mobile + Desktop Access",
  ];
    return (
        <section className="max-w-[1452px] justify-center flex mx-auto">
                    <div className="flex w-full justify-center gap-0 md:mt-[-250px] lg:mt-[-250px] mt-[-200px]">
       
          <section className="flex justify-center items-center py-10 px-4">
            <div className="w-[360px] bg-white rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.1)] overflow-hidden relative">
              <div className="bg-[linear-gradient(180deg,#1D4ED8_0%,#558DE2_47.89%,#558DE2_57.09%,#2769D7_100%)] text-white text-center py-2 text-sm font-medium tracking-wide">
                RECOMMENDED
              </div>

              {/* Content */}
              <div className="px-6 py-8 text-center">
                <h2 className="text-xl font-semibold text-gray-900">
                  WorkFotos Pro
                </h2>
                <p className="text-gray-500 text-sm mt-1">
                  Perfect for solo professionals and growing teams.
                </p>

                <h3 className="text-[32px] font-bold text-[#1D4ED8] mt-4">
                  $29/mo
                </h3>
                <p className="text-gray-500 text-sm mt-1">
                  15-Day Free Trial. Cancel Anytime.
                </p>

                <button className="cursor-pointer mt-5 w-full py-3 rounded-full text-white font-medium text-[16px] bg-[linear-gradient(180deg,#1D4ED8_0%,#558DE2_47.89%,#558DE2_57.09%,#2769D7_100%)] hover:opacity-90 transition-all">
                  Get Start Now
                </button>

                <hr className="my-6 border-gray-200" />

                <h4 className="text-gray-800 font-semibold text-left mb-3">
                  Top Features Included:
                </h4>

                <ul className="space-y-3 text-left">
                  {features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-gray-700 text-sm"
                    >
                      <CheckCircleIcon className="h-5 w-5 text-[#1D4ED8]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
          <section className="md:flex lg:flex hidden justify-center items-center py-10 px-4">
            <div className="w-[360px] bg-white rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.1)] overflow-hidden relative">
              <div className="bg-[linear-gradient(180deg,#1D4ED8_0%,#558DE2_47.89%,#558DE2_57.09%,#2769D7_100%)] text-white text-center py-4 text-sm font-medium tracking-wide"></div>

              <div className="px-6 py-8 text-center">
                <h2 className="text-xl font-semibold text-gray-900">
                  WorkFotos Pro
                </h2>
                <p className="text-gray-500 text-sm mt-1">
                  Perfect for solo professionals and growing teams.
                </p>

                <h3 className="text-[32px] font-bold text-[#1D4ED8] mt-4">
                  $290/year
                </h3>
                <p className="text-gray-500 text-sm mt-1">
                  15-Day Free Trial. Cancel Anytime.
                </p>

                <button className="mt-5 w-full py-3 rounded-full text-white font-medium text-[16px] bg-[linear-gradient(180deg,#1D4ED8_0%,#558DE2_47.89%,#558DE2_57.09%,#2769D7_100%)] hover:opacity-90 transition-all cursor-pointer">
                  Get Start Now
                </button>

                <hr className="my-6 border-gray-200" />

                <h4 className="text-gray-800 font-semibold text-left mb-3">
                  Top Features Included:
                </h4>

                <ul className="space-y-3 text-left">
                  {features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-gray-700 text-sm"
                    >
                      <CheckCircleIcon className="h-5 w-5 text-[#1D4ED8]" />

                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </div>
        </section>
    );
}

export default PricingCards;
