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
    content: (
      <>
        <ul className="flex flex-col gap-4 text-justify">
          <li>
            <span className="font-semibold text-lg">CompSoc - UOC </span> <br />
            Contributed to the front-end of the blog platform, enhancing user
            experience and functionality <br />
            Coordinated with the Organizing Committee of the APAN56 - 24 hours
            Datathon
          </li>
          <li>
            <span className="font-semibold text-lg">Peocode - UCSC </span>
            <br />
            Designed and delivered comprehensive web development content,
            supporting team growth and skill-building
          </li>
          <li>
            <span className="font-semibold text-lg">
              Rekha Music Circle - UCSC
            </span>
            <br />
            Showcased musical talent as both a violinist and a vocalist in
            university events
          </li>
          <li>
            <span className="font-semibold text-lg">Rotaract Club - UCSC</span>
            <br />
            Monitored and guided club service initiatives to enhance member
            engagement and involvement
          </li>
        </ul>

        <div className="grid grid-cols-2 md:grid-cols-4 p-4 rounded-xl">
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
