"use client";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import Image from "next/image";

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-6 py-12 bg-white">
      {/* Logo */}
      <div className="mb-6 flex flex-col items-center">
        <div className="flex items-center gap-2">
          <Image
            className="w-[300px] h-[90px]"
            src="/mb-logo.svg" 
            alt="WorkFotos Logo"
            width={45}
            height={45}
          />
          {/* <h1 className="text-[32px] font-bold text-black">
            <span className="text-[#2563EB]">Work</span>Fotos
          </h1> */}
        </div>
        <p className="text-gray-600 mt-2 text-[16px]">Create your account</p>
      </div>

      {/* Main Card */}
      <div className="w-full max-w-md">
        {/* Google Button */}
        <button
          type="button"
          className="w-full border border-gray-300 rounded-lg py-3 flex items-center justify-center gap-3 hover:bg-gray-50 transition"
        >
          <Image
            src="/google.jpeg"
            alt="Google"
            width={30}
            height={30}
            className=" bg-white"
          />
          <span className="text-gray-800 text-[16px]">
            Continue with Google
          </span>
        </button>

        {/* Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-300" />
          <span className="px-3 text-gray-500 text-sm">
            or sign up with email
          </span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label className="block text-gray-800 font-medium mb-1">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400"
          />
        </div>

        {/* Password Field */}
        <div className="mb-2 relative">
          <label className="block text-gray-800 font-medium mb-1">
            Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 pr-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-11 text-gray-500 hover:text-gray-700"
          >
            {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
          </button>
        </div>

        {/* Password Info */}
        <p className="text-gray-500 text-sm mb-6 leading-tight">
          Password must be at least 8 characters, and must include at least one
          special character.
        </p>

        {/* Sign Up Button */}
        <button
          type="submit"
          className="w-full bg-[#1E3A8A] hover:bg-[#142c6e] text-white py-3 rounded-lg text-[16px] font-semibold transition"
        >
          Sign Up
        </button>

        {/* Sign In Link */}
        <p className="text-center text-gray-700 mt-5">
          Already have an account?{" "}
          <a
            href="/auth/login"
            className="text-[#2563EB] hover:underline font-medium"
          >
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
}
