import javascript from "../images/icon-images/javascript.svg";
import typescript from "../images/icon-images/typescript.svg";
import react from "../images/icon-images/react.svg";
import node from "../images/icon-images/nodedotjs.svg";
import express from "../images/icon-images/express.svg";
import next from "../images/icon-images/nextdotjs.svg";
import nest from "../images/icon-images/nestjs.svg";
import html from "../images/icon-images/html5.svg";
import css from "../images/icon-images/css3.svg";
import tailwind from "../images/icon-images/tailwindcss.svg";
import mysql from "../images/icon-images/mysql.svg";
import postgre from "../images/icon-images/postgresql.svg";
import mongodb from "../images/icon-images/mongodb.svg";
import prisma from "../images/icon-images/prisma.svg";
import auth0 from "../images/icon-images/auth0.svg";
import aws from "../images/icon-images/amazonwebservices.svg";
import docker from "../images/icon-images/docker.svg";
import jest from "../images/icon-images/jest.svg";
import jira from "../images/icon-images/jira.svg";
import figma from "../images/icon-images/figma.svg";
import swagger from "../images/icon-images/swagger.svg";

import extra1 from "../images/about-me-images/extra1.jpg";
import extra2 from "../images/about-me-images/extra2.jpg";
import extra3 from "../images/about-me-images/extra3.jpg";
import extra4 from "../images/about-me-images/extra4.jpg";
import extra5 from "../images/about-me-images/extra5.jpg";
import extra6 from "../images/about-me-images/extra6.jpg";
import extra7 from "../images/about-me-images/extra7.jpg";
import extra8 from "../images/about-me-images/extra8.jpg";
import extra9 from "../images/about-me-images/extra9.jpg";
import extra10 from "../images/about-me-images/extra10.jpg";
import Image from "next/image";

export const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-8 place-items-center py-6">
        {[
          { src: javascript, alt: "JavaScript" },
          { src: typescript, alt: "TypeScript" },
          { src: react, alt: "React.js" },
          { src: node, alt: "Node.js" },
          { src: express, alt: "Express.js" },
          { src: next, alt: "Next.js" },
          { src: nest, alt: "Nest.js" },
          { src: html, alt: "HTML" },
          { src: css, alt: "CSS" },
          { src: tailwind, alt: "Tailwind CSS" },
          { src: mysql, alt: "MySQL" },
          { src: postgre, alt: "PostgreSQL" },
          { src: mongodb, alt: "MongoDB" },
          { src: prisma, alt: "Prisma ORM" },
          { src: auth0, alt: "Auth0" },
          { src: aws, alt: "AWS" },
          { src: docker, alt: "Docker" },
          { src: jest, alt: "Jest" },
          { src: jira, alt: "Jira" },
          { src: swagger, alt: "Swagger API" },
          { src: figma, alt: "Figma" },
        ].map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <Image src={item.src} width={70} height={70} alt={item.alt} />
            <span className="text-sm text-gray-500 mt-1">{item.alt}</span>
          </div>
        ))}
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
    content: (
      <>
        <ul className="flex flex-col gap-4 text-justify">
          <li>
            <span className="font-semibold text-lg">CompSoc - UOC </span> <br />
            <span className="text-[#ADB7BE]">
              Contributed to the front-end of the blog platform, enhancing user
              experience and functionality <br />
              Coordinated with the Organizing Committee of the APAN56 - 24 hours
              Datathon
            </span>
          </li>
          <li>
            <span className="font-semibold text-lg">Peocode - UCSC </span>
            <br />
            <span className="text-[#ADB7BE]">
              Designed and delivered comprehensive web development content,
              supporting team growth and skill-building
            </span>
          </li>
          <li>
            <span className="font-semibold text-lg">
              Rekha Music Circle - UCSC
            </span>
            <br />
            <span className="text-[#ADB7BE]">
              Showcased musical talent as both a violinist and a vocalist in
              university events
            </span>
          </li>
          <li>
            <span className="font-semibold text-lg">Rotaract Club - UCSC</span>
            <br />
            <span className="text-[#ADB7BE]">
              Monitored and guided club service initiatives to enhance member
              engagement and involvement
            </span>
          </li>
        </ul>

        <div className="grid grid-cols-2 md:grid-cols-4 py-4 rounded-xl">
          <Image
            src={extra1}
            width={400}
            height={400}
            alt="extra1"
            className="object-cover "
          />
          <Image
            src={extra2}
            width={400}
            height={400}
            alt="extra2"
            className="object-cover "
          />
          {/* <Image
            src={extra8}
            width={400}
            height={400}
            alt="extra8"
            className="object-cover "
          /> */}
          <Image
            src={extra4}
            width={400}
            height={400}
            alt="extra4"
            className="object-cover "
          />
          {/* <Image
            src={extra5}
            width={400}
            height={400}
            alt="extra5"
            className="object-cover "
          /> */}
          <Image
            src={extra6}
            width={400}
            height={400}
            alt="extra6"
            className="object-cover "
          />
          <Image
            src={extra7}
            width={400}
            height={400}
            alt="extra7"
            className="object-cover "
          />
          <Image
            src={extra3}
            width={400}
            height={400}
            alt="extra3"
            className="object-cover "
          />

          <Image
            src={extra9}
            width={400}
            height={400}
            alt="extra9"
            className="object-cover "
          />
          <Image
            src={extra10}
            width={400}
            height={400}
            alt="extra10"
            className="object-cover "
          />
        </div>
      </>
    ),
  },
];
