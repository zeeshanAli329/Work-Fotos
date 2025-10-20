"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [navBg, setNavBg] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      setNavBg(window.scrollY > viewportHeight * 0.25);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* -------- Navbar -------- */}
      <nav
        className={`fixed top-0 left-0 w-full z-[999] flex justify-center transition-all duration-300 ${
          navBg
            ? "bg-white text-black shadow-md"
            : "bg-[#FFFFFF1A] text-white backdrop-blur-[16px]"
        }`}
      >
        <div className="flex justify-between items-center w-full max-w-[1450px] lg:h-[100px] md:h-[84px] h-[60px] lg:px-[100px] md:px-[100px] px-[30px]">
          {/* Logo */}
          <div className="flex lg:w-full md:w-full w-full justify-between items-center ">
            <div className="flex items-center">
              <Link href="/">
                <img
                  src={navBg ? "/mb-logo.svg" : "/logo.svg"}
                  alt="Logo"
                  className="md:h-[50px] lg:h-[50px] h-[28px] w-[139px] transition-all duration-300"
                />
              </Link>
            </div>

            {/* Links */}
            <div className="hidden md:hidden gap-[32px] items-center font-poppins font-medium text-[18px] leading-[100%] tracking-[0%] lg:flex ">
              <Link href="/how-it-works">How It Works</Link>
              <Link href="/pricing">Pricing</Link>
              <Link href="/contact">Contact</Link>
              <div className="flex gap-[12px] justify-between items-center">
                <Link
                  href="/auth/login"
                  className="flex justify-center items-center rounded-[100px] h-[49px] w-[146px] border-2"
                >
                  Member Login
                </Link>
                <Link
                  href="/auth/login"
                  className="flex justify-center items-center rounded-[100px] h-[49px] w-[122px] bg-[#1D4ED8] text-white shadow-[inset_0px_4px_4px_0px_#FFFFFF40]"
                >
                  Login
                </Link>
              </div>
            </div>

            <div className="flex lg:hidden md:flex text-blue-600">
              <button onClick={() => setOpenMenu(!openMenu)}>
                <FiMenu />
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div
  className={`fixed top-0 right-0 px-[30px] z-[9999] bg-white text-black flex flex-col items-start gap-2 py-6 text-lg font-medium lg:hidden md:hidden h-screen w-[80%] transform transition-transform duration-500 ease-in-out ${
    openMenu ? "translate-x-0" : "translate-x-full"
  }`}
>
  <div className="flex flex-col w-full gap-[100px]">
    <div className="flex justify-between w-full">
      <img className="h-[28px] w-[139px]" src="/mb-logo.svg" alt="logo" />
      <button onClick={() => setOpenMenu(false)}>
        <MdClose />
      </button>
    </div>

    <div className="flex flex-col gap-2">
      <Link href="/how-it-works" onClick={() => setOpenMenu(false)}>
        How It Works
      </Link>
      <Link href="/pricing" onClick={() => setOpenMenu(false)}>
        Pricing
      </Link>
      <Link
        href="/contact"
        className="text-blue-600"
        onClick={() => setOpenMenu(false)}
      >
        Contact
      </Link>
    </div>
  </div>

  <div className="flex flex-col gap-5 w-full mt-40">
    <Link
      href="/auth/login"
      className="flex justify-center items-center rounded-[100px] h-[49px] w-full border-2"
      onClick={() => setOpenMenu(false)}
    >
      Member Login
    </Link>
    <Link
      href="/auth/login"
      className="flex justify-center items-center text-white rounded-[100px] h-[49px] w-full bg-[#1D4ED8]"
      onClick={() => setOpenMenu(false)}
    >
      Join Today
    </Link>
  </div>
</div>


      {/* {openMenu && (
        <div
          className={`fixed top-0 right-0 px-[30px] z-[9999] bg-white text-black flex flex-col items-start gap-2 py-6 text-lg font-medium lg:hidden md:hidden h-screen w-[80%] transform transition-transform duration-500 ease-in-out translate-x-0`}
        >
          <div className="flex flex-col w-full gap-[100px]">
            <div className="flex justify-between w-full">
              <img
                className="h-[28px] w-[139px]"
                src="/mb-logo.svg"
                alt="logo"
              />
              <button onClick={() => setOpenMenu(false)}>
                <MdClose />
              </button>
            </div>
            <div className="flex flex-col gap-2">
              <Link href="/how-it-works" onClick={() => setOpenMenu(false)}>
                How It Works
              </Link>
              <Link href="/pricing" onClick={() => setOpenMenu(false)}>
                Pricing
              </Link>
              <Link
                href="/contact"
                className="text-blue-600"
                onClick={() => setOpenMenu(false)}
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-5 w-full mt-40">
            <Link
              href="/auth/login"
              className="flex justify-center items-center rounded-[100px] h-[49px] w-full border-2"
              onClick={() => setOpenMenu(false)}
            >
              Member Login
            </Link>
            <Link
              href="/auth/login"
              className="flex justify-center items-center text-white rounded-[100px] h-[49px] w-full bg-[#1D4ED8]"
              onClick={() => setOpenMenu(false)}
            >
              Join Today
            </Link>
          </div>
        </div>
      )} */}
    </>
  );
};

export default NavBar;
