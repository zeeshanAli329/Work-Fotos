"use client";
import {
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaFacebookF,
  FaRegArrowAltCircleRight,
  FaSnapchatGhost,
} from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white z-40 text-[#111827] px-6 py-10 md:px-20 md:py-14 flex justify-center items-end max-w-[1440px] mt-20 md:mt-30 lg:mt-30 lg:pt-30">
      <div className="max-w-[1240px] mx-auto w-full">
        <div
          className="
            flex flex-col 
            md:flex-row md:justify-between 
            w-full md:w-[1240px] gap-10 md:gap-0 
            md:[@media(max-width:1024px)]:flex-col md:[@media(max-width:1024px)]:items-start
          "
        >
          <div className="flex flex-col items-start gap-4 md:w-[50%] lg:w-[379px] tablet:mb-10">
            <Link href={"/"}>
              <img
                src="/footer-logo.svg"
                alt="WorkFotos"
                className="w-[200px] h-[48px]"
              />
            </Link>
            <p className="text-[16px] md:text-[20px] text-gray-600 leading-[150%] md:w-[85%]">
              WorkFotos helps visual pros and service teams document, organize,
              and share work effortlessly.
            </p>

            <div className="flex gap-4 text-[#1D4ED8] text-[28px] md:text-[32px] pt-2 cursor-pointer">
              <Link href="/" className="no-underline text-inherit">
                <FaInstagram />
              </Link>
              <Link href="/" className="no-underline text-inherit">
                <FaSnapchatGhost />
              </Link>
              <Link href="/" className="no-underline text-inherit">
                <CiTwitter />
              </Link>
              <Link href="/" className="no-underline text-inherit">
                <FaYoutube />
              </Link>
              <Link href="/" className="no-underline text-inherit">
                <FaLinkedinIn />
              </Link>
              <Link href="/" className="no-underline text-inherit">
                <FaFacebookF />
              </Link>
            </div>
          </div>

          <div
            className="
              flex flex-col  sm:flex-row gap-10 sm:gap-20 
              w-full md:w-[50%] justify-start md:justify-between 
              md:[@media(max-width:1024px)]:flex-row lg:justify-center
            "
          >
            <div className="flex flex-col gap-3">
              <h3 className="font-semibold text-[20px] md:text-[24px] mb-1">
                Resources
              </h3>
              <ul className="flex flex-col gap-2 text-[16px] md:text-[18px] text-gray-700">
                <Link href={"/features"}>Features</Link>
                <Link href={"/pricing"}>Pricing</Link>
                <Link href={"/how-it-works"}>How It Works</Link>
                <Link href={"/our-story"}>Our Story</Link>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="font-semibold text-[20px] md:text-[24px] mb-1">
                Legal
              </h3>
              <ul className="flex flex-col gap-2 text-[16px] md:text-[18px] text-gray-700">
                <Link href={"/term&services"}>Terms of Service</Link>
                <Link href={"/privacy-policy"}>Privacy Policy</Link>
                <Link href={"/cookie-policy"}>Cookie Policy</Link>
              </ul>
            </div>
          </div>

          <div
            className="
              flex flex-col gap-3 md:w-auto w-full 
              md:flex sm:flex sm:items-center sm:justify-center sm:mt-10
            "
          >
            <h3 className="font-semibold text-[20px] md:text-[24px] mb-1 text-center sm:text-left">
              Stay in the loop
            </h3>
            <p className="text-[16px] md:text-[18px] text-gray-600 text-center sm:text-left">
              Tips & updates, straight to your inbox.
            </p>
            <div className="relative mt-2 w-full sm:w-[400px] flex justify-center sm:justify-start">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:w-[320px] border border-gray-300 rounded-[12px] h-[50px] md:h-[57px] px-4 pr-[90px] focus:outline-none"
              />
              <button
                className="cursor-pointer group absolute lg:right-[85px] right-3 top-[4px] bg-[#1D4ED8] hover:bg-[#1E3A8A] text-white 
                text-[14px] md:text-[15px] rounded-[10px] w-[80px] md:w-[103px] h-[40px] md:h-[49px] flex items-center justify-center gap-1 transition"
              >
                Join
                <span className="transform -rotate-45 transition-transform duration-300 group-hover:rotate-0">
                  <FaRegArrowAltCircleRight />
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center text-[14px] md:text-[16px] text-gray-600 border-t border-gray-200 pt-5">
          ©2025 WorkFotos | All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
