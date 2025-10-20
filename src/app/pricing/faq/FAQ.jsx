"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "What’s the difference between monthly and yearly plans?",
      answer:
        "Annual plans save you money 💰 and bill once a year. Monthly gives you flexibility with pay-as-you-go. On annual plans, you’re billed upfront based on your team size. Add users anytime (prorated), and remove users without losing their seat—you can reuse it later.",
    },
    {
      question: "Will I lose my data if I cancel Pro?",
      answer: "No. Your data is safe, but Pro features will be paused.",
    },
    {
      question: "Can I collaborate with my team?",
      answer: "Yes. Pro is built for teams with multi-user support.",
    },
    {
      question: "Do I need a credit card to start?",
      answer: "Only for starting a free trial of a Pro plan.",
    },
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full flex flex-col md:flex-row items-start justify-between max-w-[1440px] mx-auto  gap-5 md:w-full mt-10 mb-10">
      <div className="w-full md:w-1/2 flex justify-center md:justify-start md:mb-0">
        <img
          src="/pricing-photo.svg"
          alt="FAQ section"
          className="lg:w-[527px] lg:h-[544px] w-[342px] h-[300px] md:w-[343px] md:h-[434px] rounded-2xl object-cover"
        />
      </div>

      <div className="w-full lg:w-1/2 flex flex-col items-start justify-start md:w-[343px] md:h-[434px]  h-auto">
        <div className="w-full flex flex-col justify-between lg:gap-13 gap-5 md:gap-[20px]">
          <div className="md:flex lg:flex w-[70%] text-center md:text-left hidden">
            <h2 className="lg:text-3xl md:text-[36px] font-semibold text-gray-900 leading-snug">
              Work Fotos Pricing{" "}
              <span className="text-blue-600 font-bold">FAQs</span>
            </h2>
          </div>

          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`bg-gray-50 transition-all rounded-md duration-200 overflow-hidden border-t border-b ${
                  isOpen
                    ? "border-gray-300 shadow-md rounded-md"
                    : "border-gray-200"
                }`}
              >
                <button
                  onClick={() => toggle(index)}
                  className="flex justify-between items-center w-full px-5 py-4 text-left"
                >
                  <span className="font-medium md:text-[16px] lg:text-[20px] text-gray-900">
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <Minus className="w-5 h-5 text-gray-500" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-500" />
                  )}
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="border-t border-gray-100"
                    >
                      <div className="px-5 py-3 text-gray-600 text-sm leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
