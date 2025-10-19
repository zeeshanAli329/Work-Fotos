"use client";
import NavBar from "../home-components/header/NavBar";
import WhiteNavBar from "../home-components/header/whitenav/WhiteNavBar";
import { useEffect, useState } from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import LastHeroSection from "../home-components/hero-section/last-hero-section/LastHeroSection";
import Footer from "../home-components/footer/Footer";

const Page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiry: "",
    phone: "",
    company: "",
    message: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <section className="flex flex-col">
      <WhiteNavBar />
      <div
        className="flex flex-col lg:px-[100px] md:px-[64px] px-[24px] bg-cover bg-center bg-no-repeat h-[350px] lg:mt-[100px] mt-[60px] md:mt-[84px] w-full justify-center items-center"
        style={{ backgroundImage: "url('/contact-hero-img.svg')" }}
      >
        <div className="flex flex-col gap-5 justify-center items-center ">
          <h1 className=" text-[28px] font-semibold lg:text-[48px] lg:font-bold text-white leading-[100%] text-center">
            Let’s Build Better Together
          </h1>
          <p className=" text-[14px] flex lg:text-[20px] font-normal text-center lg:w-[75%] md:w-[90%]">
            Have a question about WorkFotos or need help getting started? Our
            team is here to support you.
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row md-flex-row gap-10 pt-10 pb-10 w-full md:px-[64px] lg:px-[100px] px-[24px] lg:h-auto  bg-gradient-to-br from-blue-50 to-indigo-100  ">
        <div className="flex justify-start items-center">
          <div className="flex flex-col gap-5 mt-20 text-black text-center lg:text-left items-center lg:items-start">
            <h1 className="font-inter font-bold lg:text-[36px] md:text-[36px] text-[28px] leading-[100%] tracking-[0%] lg:w-[80%]">
              Need Help? We’re Just{" "}
              <span className="text-[#2563EB]">a Message Away</span>
            </h1>

            <p className="lg:text-[18px] md:text-[18px] text-[14px] w-[90%] lg:w-[80%]">
              Whether you're managing a busy construction site, running a
              growing service business, or just exploring what WorkFotos can do,
              we're here to help.
            </p>

            <p className="lg:text-[18px] md:text-[18px] text-[14px] w-[90%] lg:w-[80%]">
              Drop us a message and we’ll get back to you within 24 hours.
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center h-auto" >
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-lg rounded-2xl w-[590px] h-auto px-[24px] py-[20px] flex flex-col justify-between"
          >

            <div className="space-y-6">
              {/* Name + Email — same for all */}
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-3">
                <div>
                  <label className="block text-sm font-medium text-black mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Jhon Doe"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 
        focus:outline-none focus:ring-2 focus:ring-blue-500 
        placeholder:text-gray-500 placeholder:opacity-100"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-black mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 
        focus:outline-none focus:ring-2 focus:ring-blue-500 
        placeholder:text-gray-500 placeholder:opacity-100"
                  />
                </div>
              </div>

              {/* Phone + Company (HIDE on mobile & tablet) */}
              <div className="hidden lg:grid lg:grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium text-black mb-1">
                    Phone number
                  </label>
                  <div className="flex">
                    <select className="border border-gray-300 rounded-l-lg px-2 py-2 focus:outline-none text-gray-500">
                      <option>US</option>
                      <option>UK</option>
                      <option>PK</option>
                    </select>
                    <input
                      type="text"
                      name="phone"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-r-lg px-3 py-2 
          focus:outline-none focus:ring-2 focus:ring-blue-500 
          placeholder:text-gray-500 placeholder:opacity-100"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-black mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    placeholder="WorkFotos"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 
        focus:outline-none focus:ring-2 focus:ring-blue-500 
        placeholder:text-gray-500 placeholder:opacity-100"
                  />
                </div>
              </div>

              {/* Inquiry (Desktop only) */}
              <div className="hidden lg:grid lg:grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium text-black mb-1">
                    Inquiry Type
                  </label>
                  <select
                    name="inquiry"
                    value={formData.inquiry}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 
        focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-500"
                  >
                    <option value="">Select one</option>
                    <option value="quote">Request a Quote</option>
                    <option value="support">Support</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>
              </div>

              {/* Message — visible for all */}
              <div>
                <label className="block text-sm font-medium text-black mb-1">
                  How can we help?
                </label>
                <textarea
                  name="message"
                  placeholder="Tell us a little about the project..."
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 
      focus:outline-none focus:ring-2 focus:ring-blue-500 
      placeholder:text-gray-500 placeholder:opacity-100 resize-none"
                ></textarea>
              </div>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="w-full group bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-lg transition flex justify-center items-center gap-2 mt-2"
            >
              <span className="hidden lg:inline">Submit</span>
              <span className="lg:hidden">Join WorkFotos</span>
              <span className="inline-block transform -rotate-60 transition-transform duration-300 group-hover:rotate-0">
                <FaRegArrowAltCircleRight />
              </span>
            </button>
          </form>
        </div>
        
        </div>
      <div className="relative flex flex-col">

 


  <div className="relative z-30 lg:px-[100px] px-[24px] bg-none">
      <LastHeroSection />
  </div>
</div>
<div className=" -z-10 relative ">
    <Footer />
    </div>

      
    </section>
  );
};

export default Page;
