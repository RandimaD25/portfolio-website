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
          className="rounded-full my-4"
          src="/about-image.jpg"
          width={400}
          height={400}
          alt="about-image"
        />
        <div>
          <p className="text-base lg:text-lg text-justify">
            I'm a Computer Science graduate from the University of Colombo
            School of Computing, currently based in Galle. I have 1 year of
            experience in full-stack development, mainly using JavaScript
            technologies like React.js, Next.js, Node.js, and Nest.js, along
            with hands-on exposure to AWS and Docker. I’ve contributed to
            real-world projects during my internship at iTelasofy and later as
            an Associate Software Engineer at Kingteza Software Solutions. Since
            then, I’ve continued to build my skills through freelance work and
            personal projects, with a strong interest in cloud technologies and
            modern web development.
          </p>
        </div>
      </div>

      <div className="flex flex-row items-center md:gap-10 text:md sm:text-xl md:text-2xl py-2 px-4 xl:px-16">
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
          Extra Curricular Activities
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
