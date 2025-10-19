"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export default function InfoSectionC({ imageType = "default" }) {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "How is WorkFotos different from Google Drive or Dropbox?",
      answer:
        "WorkFotos is built specifically for photographers, offering project-based organization, proofing tools, and client-friendly galleries.",
    },
    {
      question: "Can I share project photos with clients?",
      answer:
        "Yes! You can share password-protected galleries, download links, or feedback-enabled albums directly with clients.",
    },
    {
      question: "Is WorkFotos mobile-friendly?",
      answer:
        "Absolutely. You can manage projects, upload, and share photos easily from any device.",
    },
    {
      question: "Do I need technical skills to use WorkFotos?",
      answer:
        "Not at all — WorkFotos is designed with simplicity in mind so anyone can get started quickly.",
    },
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const imageSrc =
    imageType === "work" ? "/work-img.png" : "/img-section-c.svg";

  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-between  py-16 max-w-[1440px]">
      {/* LEFT: TEXT + FAQ */}
      <div className="w-full md:w-1/2 flex flex-col items-start space-y-8">
        {/* Heading */}
        <div className="text-center md:text-left w-full">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-snug text-center md:text-left md:max-w-[100%]">
            <span className="text-blue-600 font-bold">Everything</span> You Need
            to Know
          </h2>
        </div>

        <div className="w-full flex justify-center md:hidden">
          <img
            src={imageSrc}
            alt="FAQ section"
            className=" rounded-2xl my-6 object-cover md:w-[343px] md:h-[434px]"
          />
        </div>

        <div className="w-full space-y-3">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-xl bg-gray-50 border transition-all duration-200 overflow-hidden ${
                  isOpen ? "border-blue-600 shadow-md" : "border-gray-200"
                }`}
              >
                <button
                  onClick={() => toggle(index)}
                  className="flex justify-between items-center w-full px-5 py-4 text-left"
                >
                  <span className="font-medium text-gray-900">
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

      <div className="hidden md:flex w-1/2 justify-end">
        <img
          src={imageSrc}
          alt="FAQ section"
          className="w-[527px] h-[544px] rounded-2xl object-cover md:w-[343px] md:h-[434px]"
        />
      </div>
    </section>
  );
}
