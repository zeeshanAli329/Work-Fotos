import React from "react";

const SmarterSection = () => {
  const card = [
    {
      img:   "/how-to-woks-page-file-img.svg",
      title: "Set Up Your Project",
      desc:  "Create a new project in seconds just give it a name and you’re ready to go.",
    },
    {
      img:   "/how-to-woks-page-file-2-img.svg",
      title: "Organize Photos",
      desc:  "Capture site photos, tag them with notes, dates, and locations all from your phone.",
    },
    {
      img:   "/how-to-woks-page-file-3-img.svg",
      title: "Share Work Reports",
      desc:  "Generate polished, ready-to-send reports for clients, managers, or your own.",
    },
  ]
  return (
    <section>
      <div className="flex justify-center items-center flex-col mt-10">
        {/* Heading Section */}
        <div className="text-black flex flex-col justify-center items-center gap-5 w-full">
          <div className="flex flex-col gap-5 justify-center items-center text-center">
            <h1 className="font-inter font-semibold text-[24px] leading-[100%] tracking-[0%] text-center md:text-[48px] lg:text-[48px] md:font-bold lg:font-bold w-full">
              Start <span className="text-[#2563EB]">Smarter,</span> Not{" "}
              <span className="text-[#2563EB]">Harder</span>
            </h1>
            <p className="font-inter font-normal text-[14px] leading-[100%] tracking-[0%] md:text-[20px] w-[80%] text-center">
              WorkFotos simplifies every step from the first photo to the final
              invoice.
            </p>
          </div>
        </div>
      </div>

        <div className="px-[24px]  ">
          {/* ------------cards------------- */}
          <section className="flex flex-col lg:flex-row md:flex-row  justify-center items-center gap-15 md:px-[64px] ">
            {/* <div className="flex flex-wrap justify-center items-center  font-inter mt-8 lg:mt-10 transition-all duration-300 ease-in-out hover:scale-101 rounded-lg shadow-md ">
              <div className="md:w-[222px] md:h-[138px]  lg:w-[292px]   w-[210px] h-[110px] py-[16px] px-[12px]   md:px-[29px] md:py-[42px] flex flex-col justify-center items-center gap-5 bg-white rounded-lg ">
                <div className="flex justify-center items-center gap-2 ">
                  <img
                    className="lg:w-[28px] lg:h-[28px] w-[19px] h-[20px] "
                    src="/how-to-woks-page-file-img.svg"
                  ></img>
                  <h1 className="text-[#1E3A8A] font-bold lg:text-[20px] text-[14px] tracking-[0%] leading-[100%]">
                    Set Up Your Project
                  </h1>
                </div>
                <p className="lg:text-[16px] text-[12px] text-[#000000]  ml-[5px]">
                  Create a new project in seconds just give it a name and you’re ready to go.
                </p>
              </div>
            </div> */}
            <div className="flex md:hidden lg:hidden ">
              <video
                src="/video-how-to...mp4"
                loop
                autoPlay
                muted
                playsInline
                className="w-[342px] h-[162px] rounded-lg shadow-md object-cover"
              />
            </div>


            {card.map((items, index) => (
              <div className="flex flex-wrap justify-center items-center font-inter mt-8 lg:mt-10 transition-all duration-300 ease-in-out hover:scale-101 rounded-lg shadow-md bg-[#ffffff]"
              key={index}
              >
                <div className="md:w-[222px] md:h-[138px] lg:w-[292px] lg:h-[187px]  w-[210px] h-[110px] py-[16px] px-[12px]  md:px-[29px] md:py-[42px] flex flex-col justify-start items-start gap-5">
                  <div className="flex justify-center items-center gap-2 ">
                    <img
                    className="lg:w-[28px] lg:h-[28px] w-[19px] h-[20px] "
                    src={items.img}
                    />
                    <h1 className="text-[#1E3A8A] font-bold lg:text-[20px] text-[14px] tracking-[0%] leading-[100%] z-50">
                    {items.title}
                  </h1>
                   <p className="lg:text-[16px] text-[12px] text-[#000000] ">
                  {card.desc}
                </p>
                  </div>
                </div>
              </div>
            ))}











            {/* <div className="flex flex-wrap justify-center items-center font-inter mt-8 lg:mt-10 transition-all duration-300 ease-in-out hover:scale-101 rounded-lg shadow-md bg-[#ffffff]">
              <div className="md:w-[222px] md:h-[138px] lg:w-[292px] lg:h-[187px]  w-[210px] h-[110px] py-[16px] px-[12px]  md:px-[29px] md:py-[42px] flex flex-col justify-start items-start gap-5  ">
                <div className="flex justify-center items-center gap-2 ">
                  <img
                    className="lg:w-[28px] lg:h-[28px] w-[19px] h-[20px] "
                    src="/how-to-woks-page-file-2-img.svg"
                  ></img>
                  <h1 className="text-[#1E3A8A] font-bold lg:text-[20px] text-[14px] tracking-[0%] leading-[100%]">
                    Organize Photos
                  </h1>
                </div>
                <p className="lg:text-[16px] text-[12px] text-[#000000] ">
                  Capture site photos, tag them with notes, dates, and locations all from your phone.
                </p>
              </div>
            </div> */}
            <div className="flex md:hidden lg:hidden ">
              <video
                src="/video-how-to...mp4"
                loop
                autoPlay
                muted
                playsInline
                className="w-[342px] h-[162px] rounded-lg shadow-md object-cover"
              />
            </div>

            {/* <div className="flex flex-wrap justify-center items-center font-inter mt-8 lg:mt-10 transition-all duration-300 ease-in-out hover:scale-101 rounded-lg shadow-md bg-[#ffffff]">
              <div className="md:w-[222px] md:h-[138px]  lg:w-[292px] lg:h-[187px] w-[210px] h-[110px] py-[16px] px-[12px]  md:px-[29px] md:py-[42px] flex flex-col justify-center items-center gap-5  ">
                <div className="flex justify-center items-center gap-2">
                  <img
                    className="lg:w-[28px] lg:h-[28px] w-[19px] h-[20px] "
                    src="/how-to-woks-page-file-3-img.svg"
                  ></img>
                  <h1 className="text-[#1E3A8A] font-bold lg:text-[20px] text-[14px] tracking-[0%] leading-[100%]">
                    Share Work Reports
                  </h1>
                </div>
                <p className="lg:text-[16px] text-[12px] text-[#000000] ml-[5px]">
                  Generate polished, ready-to-send reports for clients, managers, or your own.
                </p>
              </div>
            </div> */}
            <div className="flex md:hidden lg:hidden ">
              <video
                src="/video-how-to...mp4"
                loop
                autoPlay
                muted
                playsInline
                className="w-[342px] h-[162px] rounded-lg shadow-md object-cover"
              />
            </div>
          </section>
          <div className="hidden lg:flex justify-center items-center mt-20">
            <video
              src="/video-how-to...mp4"
              loop
              autoPlay
              muted
              playsInline
              className="w-[1088px] h-[513px] rounded-lg shadow-md object-cover"
            />
          </div>
        </div>
    </section>
  );
};
export default SmarterSection;