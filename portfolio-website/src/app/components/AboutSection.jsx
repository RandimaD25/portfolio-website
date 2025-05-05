"use client";

import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import javascript from "../images/javascript.svg";
import typescript from "../images/typescript.svg";
import react from "../images/react.svg";
import node from "../images/nodedotjs.svg";
import express from "../images/express.svg";
import next from "../images/nextdotjs.svg";
import nest from "../images/nestjs.svg";
import html from "../images/html5.svg";
import css from "../images/css3.svg";
import tailwind from "../images/tailwindcss.svg";
import mysql from "../images/mysql.svg";
import postgre from "../images/postgresql.svg";
import mongodb from "../images/mongodb.svg";
import prisma from "../images/prisma.svg";
import auth0 from "../images/auth0.svg";
import aws from "../images/amazonwebservices.svg";
import docker from "../images/docker.svg";
import jest from "../images/jest.svg";
import jira from "../images/jira.svg";
import figma from "../images/figma.svg";
import swagger from "../images/swagger.svg";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-8 place-items-center py-6">
        <Image src={javascript} width={70} height={70} alt="JavaScript" />
        <Image src={typescript} width={70} height={70} alt="TypeScript" />
        <Image src={react} width={70} height={70} alt="React" />
        <Image src={node} width={70} height={70} alt="Node.js" />
        <Image src={express} width={70} height={70} alt="Express" />
        <Image src={next} width={70} height={70} alt="Next.js" />
        <Image src={nest} width={70} height={70} alt="NestJS" />

        <Image src={html} width={70} height={70} alt="HTML" />
        <Image src={css} width={70} height={70} alt="CSS" />
        <Image src={tailwind} width={70} height={70} alt="Tailwind CSS" />
        <Image src={mysql} width={70} height={70} alt="MySQL" />
        <Image src={postgre} width={70} height={70} alt="PostgreSQL" />
        <Image src={mongodb} width={70} height={70} alt="MongoDB" />
        <Image src={prisma} width={70} height={70} alt="Prisma" />

        <Image src={auth0} width={70} height={70} alt="Auth0" />
        <Image src={aws} width={70} height={70} alt="AWS" />
        <Image src={docker} width={70} height={70} alt="Docker" />
        <Image src={jest} width={70} height={70} alt="Jest" />
        <Image src={jira} width={70} height={70} alt="Jira" />
        <Image src={swagger} width={70} height={70} alt="Swagger" />
        <Image src={figma} width={70} height={70} alt="Figma" />
      </div>
    ),
  },

  {
    title: "Education",
    id: "education",
    content: (
      <ul className="flex flex-col gap-4">
        <li>
          <span className="font-semibold text-lg">
            University of Colombo School of Computing (May 2021 - Oct 2024)
          </span>{" "}
          <br />
          <span className="text-[#ADB7BE]">
            BSc. Computer Science <br />
            GPA : 3.3593 - 2nd Class (Upper) Division <br />
            Major : Web Development
          </span>
        </li>

        <li>
          <span className="font-semibold text-lg">
            IJSE - Institute of Software Engineering (Jan 2020 - Sep 2020)
          </span>{" "}
          <br />
          <span className="text-[#ADB7BE]">
            The Diploma of Comprehensive Master Java Developer
          </span>
        </li>

        <li>
          <span className="font-semibold text-lg">
            Southlands College (2005 - 2019)
          </span>{" "}
          <br />
          <span className="text-[#ADB7BE]">
            GCE A/L - Physical Science Stream : Combined Mathematics - A,
            Physics - B, Chemistry - C <br />
            GCE O/L - 9A s
          </span>
        </li>
      </ul>
    ),
  },

  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="flex flex-col gap-4 text-justify">
        <li>
          <span className="font-semibold text-lg">
            Kingteza Software Solutions (Pvt) Ltd (Jul 2024 - Jan 2025)
          </span>
          <br />
          <span className="text-[#ADB7BE]">
            Worked as an Associate Software Engineer and Contributed to a client
            project using a custom React-based framework, Next.js, and Nest.js.
            Implemented frontend interfaces, backend APIs, and AWS-based
            solutions including SQS and the Serverless Framework.
          </span>
        </li>
        <li>
          <span className="font-semibold text-lg">
            iTelaSoft (Pvt) Ltd (Nov 2023 - May 2024)
          </span>
          <br />
          <span className="text-[#ADB7BE]">
            Completed 6 months internship as a Software Engineer Inter and
            worked on two individual projects using JavaScript technologies.
            Researched clean architecture for a Node.js app and implemented
            Docker-based containerization for frontend and backend services.
          </span>
        </li>
      </ul>
    ),
  },

  {
    title: "extra-curricular",
    id: "extra-curricular",
    content: <></>,
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white px-6 sm:px-16">
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

      <div className="items-center py-8 px-4 xl:px-16">
        {TAB_DATA.find((t) => t.id === tab).content}
      </div>
    </section>
  );
};

export default AboutSection;
