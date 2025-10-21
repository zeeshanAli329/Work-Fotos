"use client";
import FaqData from "@/app/FaqQuestions/FaqData";
import { useState } from "react";
import FaqRender from "@/app/data/faqRender/FaqRender";
const PricingFaq = () => {
  const [open, setOpen] = useState(null);

  return (
    <div className="flex flex-col lg:flex-row md:flex-row justify-between items-center  lg:gap-0 md:gap-[20px] gap-20 mt-10 mb-10 lg:px-[100px] md:px-[64px] px-[24px]">
      <div className="flex flex-col">
      <img src="/pricing-photo.svg" alt="photoGrapher" className="lg:w-[527px] lg:h-[544px] md:w-[343px] md:h-[434px]" />
        </div>
        <div className="  lg:flex-col md:max-w-[343px] lg:max-w-[600px] ">

        <div className="md:flex lg:flex w-[70%] lg:w-[80%] text-center md:text-left hidden lg:mb-10">
          <h2 className="lg:text-[48px] md:text-[36px] font-semibold text-gray-900 leading-snug ">
            Work Fotos Pricing{" "}
            <span className="text-blue-600 font-bold">FAQs</span>
          </h2>
             </div>
        {FaqData.pricing.map((item, index) => (
          <FaqRender
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={open === index}
          onToggle={() => setOpen(open === index ? null : index)}
          />
        ))}
        </div>
     
    
    </div>
  );
};

export default PricingFaq;
