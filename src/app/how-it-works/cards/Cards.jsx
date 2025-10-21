import next from "next";

const Cards = () => {
  const cardContent = [
    {
      id: 1,
      img1: "/cd-2.jpg",
      img2: "/cd-2-1.svg",
      title: "Interior Designer",
    },
    {
      id: 2,
      img1: "/cd-1.jpg",
      img2: "/cd-1-1.svg",
      title: "General Contractors",
    },
    {
      id: 3,
      img1: "/cd-3.jpg",
      img2: "/cd-3-1.svg",
      title: "Real Estate Agency",
    },
    {
      id: 4,
      img1: "/cd-4.png",
      img2: "/cd-4-1.svg",
      title: "Tourism & Travel Agency",
    },
  ];

  return (
    <>
      <div className="flex justify-center items-center lg:px-[100px] md:px-[64px] px-[14px]">
        <div className="flex justify-center items-center text-black flex-col gap-5 mt-20 text-center">
          <h1 className="font-inter font-bold lg:text-[48px] md:text-[48px] text-[28px] leading-[100%] tracking-[0%]">
            How WorkFotos{" "}
            <span className="text-[#2563EB]">Powers Your Projects</span>
          </h1>
          <p className="lg:text-[18px] md:text-[18px] text-[14px] w-[90%] mx-auto">
            From jobsite to showcase see how everything connects to save you
            time, impress clients, and grow your business.
          </p>
        </div>
      </div>
      <div
        className="flex justify-between items-center w-full h-[500px] lg:px-[100px] md:px-[64px] px-[20px]  
  md:overflow-visible overflow-x-auto scrollbar-hide gap-5"
      >
        {cardContent.map((card) => (
          <div
            className=" relative group min-w-[292px] h-[400px] rounded-[16px] overflow-hidden cursor-pointer flex-shrink-0"
            key={card.id}
          >
            <div
              style={{ backgroundImage: `url(${card.img1})` }}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ease-in-out group-hover:opacity-0`}
            ></div>
            <div
              style={{ backgroundImage: `url(${card.img2})` }}
              className={`absolute inset-0  bg-cover bg-center opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100`}
            ></div>
            <div className="relative z-10 flex justify-center items-end h-full pb-6">
              <button className="w-[164px] h-[43px] font-bold text-[16px] cursor-pointer mb-10 text-[#000000] rounded-[100px] bg-white transition-all duration-700 ease-in-out group-hover:bg-black group-hover:text-white">
                {card.title}
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Cards;
