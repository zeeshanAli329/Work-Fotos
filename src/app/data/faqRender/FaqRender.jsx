import React from "react";

const FaqRender = ({ question, answer, isOpen, onToggle }) => {
  return (
    <section className="w-full flex justify-center">
      <div className="w-full max-w-[608px] flex flex-col">
        <button
          onClick={onToggle}
          className={`flex justify-between cursor-pointer items-center w-full  px-5 py-4 md:py-2 lg:py-4 text-[18px] md:text-[20px] font-normal rounded-t-lg transition-all duration-300
            ${
              isOpen
                ? "border-t-4 border-t-[#0B5FFF] rounded-t-lg text-black bg-gray-50 "
                : "border-b border-t border-gray-200 text-black bg-gray-50 hover:bg-gray-50 lg::mt-5 rounded-lg lg:mb-5 md:mt-1 mt-5 "
            }`}
        >
          <span className="">{question}</span>
          <span
            className={`text-2xl transition-transform ${
              isOpen ? "text-black rotate-0" : "text-black"
            }`}
          >
            {isOpen ? "−" : "+"}
          </span>
        </button>

        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen
              ? "max-h-[300px] opacity-100 translate-y-0"
              : "max-h-0 opacity-0 -translate-y-2"
          }`}
        >
          <div className="px-5 py-3 text-[16px] text-black bg-gray-50 rounded-b-lg ">
            {answer}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqRender;
