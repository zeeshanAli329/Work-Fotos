import next from "next";

const TaskCards = () => {
  const cardContent = [
    {
      id: 1,
      img: "/c1.svg",
      para: "Jobsite photo organization ",
    },
    {
      id: 2,
      img: "c2.svg ",
      para: " Team & Task Tracking",
    },
    {
      id: 3,
      img: "c3.svg ",
      para: "Estimate & Invoice ",
    },
    {
      id: 4,
      img: "c4.svg",

      para: "Custom Branding",
    },
    {
      id: 5,
      img: "c5.svg",
      para: "Portfolio & Share Links",
    },
  ];
  return (
    <>
    <div className="flex-col mt-10 flex bg-[linear-gradient(180deg,#1D4ED8_0%,#558DE2_47.89%,#558DE2_57.09%,#2769D7_100%)] w-full h-auto md:px-[64px] lg:px-[100px] px-[20px] ">
      <div className="flex justify-center items-center flex-col mt-10 gap-10">
        <div className="text-white flex flex-col justify-center items-center gap-5 w-full">
          <div className="flex flex-col gap-5 justify-center items-center text-center">
            <h1 className="font-inter font-semibold text-[24px] leading-[100%] tracking-[0%] text-center md:text-[48px] lg:text-[48px] md:font-bold lg:font-bold w-full">
              Everything You Need, One Place
            </h1>
            <p className="font-inter font-normal text-[14px] leading-[100%] tracking-[0%] md:text-[20px] w-[80%] text-center">
              Manage your photos, documents, reports, and client-facing
              portfolio from a single dashboard.
            </p>
          </div>
        </div>
        <img
          className="lg:w-[911px] lg:h-[415px] w-full h-[198px] rounded-[14px]"
          src="/ft-img.png"
          alt="dashboard"
        />
      </div>

      <div className="flex lg:flex-row w-[100%] lg:mt-20 mt-10 lg:mb-30 md:mb-20 mb-10 flex-wrap justify-around flex-col gap-5 ">
        {cardContent.map((card) => (
          <div
            key={card.id}
            className="flex lg:w-[30%] lg:px-2 lg:h-[76px] h-[42px] px-[44px] w-full
                     bg-[rgba(255,255,255,0.33)] border border-[rgba(255,255,255,0.66)] 
                       backdrop-blur-[24px] items-center gap-2 rounded-[14px]"
          >
            <img
              className="w-[25] h-[25] lg:[44px] lg:w-[44px]"
              src={card.img}
            />
            <p className="lg:text-[24px] text-white text-[14px]">{card.para}</p>
          </div>
        ))}
      </div>
      </div>
    </>
  );
};

export default TaskCards;
