"use client";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

const Slider = () => {
  const desktopImages = [
    "/moving-card-1.svg",
    "/moving-card-2.svg",
    "/moving-card-3.svg",
  ];

  const mobileImages = [
    "/mb-slider-1.svg",
    "/mb-slider-1.svg",
    "/mb-slider-1.svg",
  ];

  const sliderRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const slideWidth = 800;
  const gap = 24;
  const sidePadding = 220;

  const handleNext = () => setIndex((i) => (i + 1) % desktopImages.length);
  const handlePrev = () =>
    setIndex((i) => (i - 1 + desktopImages.length) % desktopImages.length);

  // Detect mobile/tablet
  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // Scroll when index changes (only on desktop)
  useEffect(() => {
    if (isMobile) return; // disable smooth scroll on mobile (full width)
    const el = sliderRef.current;
    if (!el) return;
    const scrollLeft = (slideWidth + gap) * index;
    el.scrollTo({ left: scrollLeft, behavior: "smooth" });
  }, [index, isMobile]);

  const images = isMobile ? mobileImages : desktopImages;

  return (
    <section className="flex flex-col items-center py-10">
      {/* Header */}
      <div className="text-black flex flex-col justify-center items-center gap-5 w-full max-w-[1240px]">
        <h1 className="font-inter font-semibold text-[24px] leading-[100%] text-center md:text-[48px] lg:text-[48px] md:font-bold lg:font-bold w-[90%]">
          Real <span className="text-[#2563EB]">Stories</span> from the Field
        </h1>
        <p className="font-inter font-normal text-[14px] leading-[100%] md:text-[20px] text-center">
          See how real users streamline jobs, impress clients, and grow faster
          with WorkFotos.
        </p>
      </div>

      {/* Slider */}
      <div className="relative w-full max-w-[1240px] h-[384px] overflow-hidden mt-10">
        <div
          ref={sliderRef}
          className={`flex gap-6 items-center h-full overflow-x-auto scroll-smooth no-scrollbar ${
            isMobile ? "pl-0 pr-0" : "pl-[220px] pr-[220px]"
          }`}
          style={{
            scrollbarWidth: "none",
          }}
        >
          {images.map((src, i) => (
            <div
              key={i}
              className={`flex-shrink-0 rounded-2xl overflow-hidden shadow-lg ${
                isMobile ? "w-full h-[300px]" : "w-[800px] h-[306px]"
              }`}
            >
              <Image
                src={src}
                alt={`Slide ${i + 1}`}
                width={isMobile ? 600 : 800}
                height={isMobile ? 300 : 306}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>

        {/* LEFT gradient (desktop only) */}
        <div
          aria-hidden="true"
          className="hidden md:block pointer-events-none absolute left-0 top-0 h-full w-[220px] z-20"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-transparent backdrop-blur-sm" />
        </div>

        {/* RIGHT gradient (desktop only) */}
        <div
          aria-hidden="true"
          className="hidden md:block pointer-events-none absolute right-0 top-0 h-full w-[220px] z-20"
        >
          <div className="absolute inset-0 bg-gradient-to-l from-white/90 via-white/60 to-transparent backdrop-blur-sm" />
        </div>

        {/* Buttons — same exact desktop position */}
        <div className="absolute right-4 top-4 z-30 flex gap-2">
          <button
            onClick={handlePrev}
            className="bg-black text-white px-3 py-2 rounded-md shadow-md"
          >
            Prev
          </button>
          <button
            onClick={handleNext}
            className="bg-black text-white px-3 py-2 rounded-md shadow-md"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default Slider;
