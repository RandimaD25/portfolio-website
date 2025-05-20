"use client";

import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { TAB_DATA } from "../content/about-me";

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white px-6 sm:px-16 scroll-mt-12" id="about">
      <h2 className="text-4xl md:text-5xl font-bold text-transparent px-4 xl:px-16 bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-pink-600 mb-4 mt-10">
        About Me
      </h2>
      <div className="md:grid md:grid-cols-2 gap-8 items-center pb-3 px-4 xl:px-16">
        <Image
          className="rounded-full my-4 mx-auto"
          src="/about-image.jpg"
          width={400}
          height={400}
          alt="about-image"
        />
        <div>
          <p className="text-sm md:text-md lg:text-[1rem] text-justify">
            I'm a Computer Science graduate from the University of Colombo
            School of Computing, where I earned a Second Class Upper Division in
            my BSc. I have 1 year of professional experience working with
            JavaScript technologies, both on the frontend and backend, with a
            strong focus on building scalable and maintainable applications. I'm
            passionate about cloud technologies and actively expanding my skills
            in platforms like AWS. I also have a growing interest in UI/UX
            design - I enjoy crafting intuitive, user-friendly interfaces and
            constantly explore ways to improve the user experience through
            design. I thrive on challenging work and love collaborating with
            teammates to solve problems and build great products. I’m a strong
            believer in knowledge sharing and enjoy discussing ideas and
            learning with peers. Outside of work, I'm an active volunteer, a
            music lover, and someone who likes to explore new ideas and build
            experimental side projects in my free time.
          </p>
        </div>
      </div>

      <div className="flex flex-row items-center md:gap-10 text:md sm:text-lg md:text-xl py-2 px-4 xl:px-16">
        <TabButton
          selectTab={() => handleTabChange("skills")}
          active={tab === "skills"}
        >
          Skills
        </TabButton>

        <TabButton
          selectTab={() => handleTabChange("experience")}
          active={tab === "experience"}
        >
          Experience
        </TabButton>

        <TabButton
          selectTab={() => handleTabChange("education")}
          active={tab === "education"}
        >
          Education
        </TabButton>

        <TabButton
          selectTab={() => handleTabChange("extra-curricular")}
          active={tab === "extra-curricular"}
        >
          Volunteering & Passions
        </TabButton>
      </div>

      <div
        key={tab}
        className="opacity-0 animate-fade-in transition-opacity duration-500 ease-in-out py-8 px-4 xl:px-16"
      >
        {TAB_DATA.find((t) => t.id === tab).content}
      </div>
    </section>
  );
};

export default AboutSection;
