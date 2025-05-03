"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section className="text-center sm:text-left min-h-screen p-4 lg:p-10 relative">
      {/* Background layer */}
      <div
        className="absolute inset-0 bg-[url('/hero-image.png')] bg-cover bg-center opacity-40 z-0"
        aria-hidden="true"
      ></div>

      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/10 to-transparent"></div>

      {/* Content layer */}
      <div className="relative z-10 mt-72 sm:mt-80 ">
        <div className="sm:px-4">
          <h1 className="text-white mb-4 text-2xl sm:text-4xl md:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello, I'm{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={["Randima Dias", 1000, "Full Stack Engineer", 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>

          <p className="text-[#ADB7BE] text-sm lg:text-xl w-full lg:w-1/2">
            I specialize in crafting scalable web applications with clean,
            efficient code. I thrive on solving real-world problems through
            thoughtful design and modern technologies.
          </p>
          <div className="mt-4 flex flex-col sm:flex-row sm:gap-4 items-center sm:items-start">
            <button className="w-full sm:w-auto font-medium px-6 py-2 rounded-full bg-transparent hover:bg-gradient-to-r from-purple-400 to-pink-600 text-white border border-purple-600">
              Hire Me
            </button>
            <button className="w-full sm:w-auto font-medium px-6 py-2 rounded-full bg-transparent hover:bg-gradient-to-r from-purple-400 to-pink-600 text-white border border-purple-600 mt-3 sm:mt-0">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
