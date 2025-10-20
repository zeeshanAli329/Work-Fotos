import React from "react";
import { useState } from "react";
import FaqData from "../FaqQuestions/FaqData";
import FaqRender from "./faqRender/FaqRender";
const WorksPage = () => {
  const [open, setOpen] = useState(null);

  return (
    <div className="flex flex-col lg:flex-row md:flex-row justify-between items-center  lg:gap-0 md:gap-[20px] gap-20 mt-10 mb-10">
      <div className="  lg:flex-col md:max-w-[343px] lg:max-w-[600px] ">
        <div className="md:flex lg:flex w-[70%] lg:w-[80%] text-center md:text-left hidden lg:mb-10">
          <h2 className="lg:text-[48px] md:text-[36px] font-semibold text-gray-900 leading-snug  ">
            <span className="text-blue-600 font-bold">Everything </span>
            You Need to Know{" "}
          </h2>
        </div>
        {FaqData.howWorks.map((items, index) => (
          <FaqRender
            key={index}
            question={items.question}
            answer={items.answer}
            isOpen={open === index}
            onToggle={() => setOpen(open === index ? null : index)}
          />
        ))}
      </div>
      <div className="flex flex-col">
        <img
          src="/work-img.png"
          alt="photoGrapher"
          className="lg:w-[587px] lg:h-[544px] md:w-[343px] md:h-[434px] rounded-lg"
        />
      </div>
    </div>
  );
};

export default WorksPage;
