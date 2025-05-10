"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section className="text-center sm:text-left min-h-screen p-2 sm:p-4 lg:p-10 relative">
      {/* Background layer */}
      <div
        className="absolute inset-0 bg-[url('/hero-image.png')] bg-cover bg-center opacity-40 z-0"
        aria-hidden="true"
      ></div>

      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/10 to-transparent z-10"></div>

      {/* Content layer */}
      <div className="relative z-20 mt-72 sm:mt-80 px-6 sm:px-16">
        <div className="sm:px-4">
          <h1 className="text-white mb-2 p text-[1.7rem] sm:text-4xl md:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello, I'm Randima Dias
            </span>
            <br />
          </h1>

          <span className="text-white mb-4 text-[1.4rem] sm:text-2xl md:text-5xl font-extrabold">
            <TypeAnimation
              sequence={[
                "Full Stack Engineer",
                1000,
                "React.js Expert",
                1000,
                "Node.js Expert",
                1000,
                "AWS Enthusiast",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </span>

          <p className="text-[#ADB7BE] mt-2 text-sm md:text-lg lg:text-xl w-full lg:w-1/2">
            I specialize in crafting scalable web applications with clean,
            efficient code. I thrive on solving real-world problems through
            thoughtful design and modern technologies.
          </p>
          <div className="mt-4 flex flex-col sm:flex-row sm:gap-4 items-center sm:items-start">
            <button className="w-full sm:w-auto font-medium px-6 py-2 rounded-full bg-transparent hover:bg-gradient-to-r from-purple-400 to-pink-600 text-white border border-purple-600 cursor-pointer">
              Hire Me
            </button>
            <button className="w-full sm:w-auto font-medium px-6 py-2 rounded-full bg-transparent hover:bg-gradient-to-r from-purple-400 to-pink-600 text-white border border-purple-600 mt-3 sm:mt-0 cursor-pointer">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
