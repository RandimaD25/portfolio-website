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

const scrollToProject = (id) => {
  const el = document.getElementById(id);
  if (el) {
    const yOffset = -80; // adjust for navbar height
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });

    // Highlight the card
    el.classList.add(
      "ring-4",
      "ring-purple-500",
      "transition-all",
      "duration-500",
      "rounded-xl"
    );

    setTimeout(() => {
      el.classList.remove("ring-4", "ring-purple-500");
    }, 2000);
  }
};

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
          <span className="hidden font-semibold text-lg md:flex md:justify-between mb-[-12px]">
            <div>
              <p>University of Colombo School of Computing</p>
              <p className="text-sm">BSc. Computer Science</p>
              <p className="text-sm">
                Second Class (Upper) Division – GPA: 3.3593
              </p>
            </div>
            <p>May 2021 - Oct 2024</p>
          </span>

          <span className="block md:hidden font-semibold text-md text-left">
            <p>University of Colombo School of Computing</p>
            <p className="text-sm">BSc. Computer Science</p>
            <p className="text-sm">
              Second Class (Upper) Division – GPA: 3.3593
            </p>
            <p className="text-sm">May 2021 - Oct 2024</p>
          </span>
          <br />
          <span className="text-[#ADB7BE]">
            <ul className="list-disc pl-6 text-sm md:text-md lg:text-[1rem] text-justify">
              <li>
                During my time at university, I was exposed to a broad range of
                subjects including Data Structures and Algorithms, OOP, Software
                Engineering, Databases, Computer Networks, Human Computer
                Interaction, Professional Practice, Game Development and more.
              </li>
              <li>
                One of the most memorable parts of my degree was working on two
                group projects. These experiences were my first real exposure to
                building software as part of a team. I learned how to
                communicate effectively, take on leadership responsibilities,
                handle conflicts, and deliver working software together. It
                taught me not only about coding but also how important teamwork
                is in real-world development.
              </li>
            </ul>
          </span>
        </li>

        <li>
          <span className="hidden font-semibold text-lg md:flex md:justify-between mb-[-12px]">
            <div>
              <p>IJSE - Institute of Software Engineering</p>
              <p className="text-sm">
                The Diploma of Comprehensive Master Java Developer
              </p>
            </div>
            <p>Jan 2020 - Sep 2020</p>
          </span>

          <span className="block md:hidden font-semibold text-md text-left">
            <p>IJSE - Institute of Software Engineering</p>
            <p className="text-sm">
              The Diploma of Comprehensive Master Java Developer
            </p>
            <p className="text-sm">Jan 2020 - Sep 2020</p>
          </span>

          <br />
          <span className="text-[#ADB7BE]">
            <ul className="list-disc pl-6 text-justify text-sm md:text-md lg:text-[1rem]">
              <li>
                Through this program, I developed a solid foundation in Java
                fundamentals, mastered object-oriented programming (OOP) using
                Java, and gained hands-on experience with Database Management
                Systems. It was a valuable addition to my academic journey and
                significantly enhanced my problem-solving abilities and backend
                development skills early on.
              </li>
            </ul>
          </span>
        </li>

        <li>
          <span className="hidden font-semibold text-lg md:flex md:justify-between mb-[-12px]">
            <p>Southlands College - Galle</p>

            <p>2005 - 2019</p>
          </span>

          <span className="block md:hidden font-semibold text-md text-left">
            <p>Southlands College - Galle</p>

            <p className="text-sm">2005 - 2019</p>
          </span>
          <br />
          <span className="text-[#ADB7BE]">
            <ul className="list-disc pl-6 text-justify text-sm md:text-md lg:text-[1rem]">
              <li>
                GCE A/L - Physical Science Stream : Combined Mathematics - A,
                Physics - B, Chemistry - C
              </li>
              <li>GCE O/L - 9A s</li>
            </ul>
            <br />
          </span>
        </li>
      </ul>
    ),
  },

  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="flex flex-col gap-5 text-justify">
        <li>
          <span className="hidden font-semibold text-lg md:flex md:justify-between mb-[-12px]">
            <div>
              <p>Kingteza Software Solutions (Pvt) Ltd</p>
              <p className="text-sm">Associate Software Engineer</p>
            </div>
            <div className="text-right">
              <p>Jul 2024 - Jan 2025</p>
              <p className="text-sm">Rajagiriya, Colombo</p>
            </div>
          </span>

          <span className="block md:hidden font-semibold text-md text-left">
            <p>
              Kingteza Software Solutions (Pvt) Ltd - Associate Software
              Engineer
            </p>
            <p className="text-sm">Jul 2024 - Jan 2025 | Rajagiriya, Colombo</p>
          </span>
          <br />
          <span className="text-[#ADB7BE]">
            <ul className="list-disc pl-6 text-sm md:text-md lg:text-[1rem]">
              <li>
                I worked as an Associate Software Engineer on a contract basis
                for a client project called Winlads, a rewards-based platform.
                The project followed a microservices architecture using
                JavaScript technologies and AWS cloud solutions. I mainly did
                the frontend related tasks using a custom React.js framework and
                Next.js, but I also contributed on the backend by building API
                endpoints with Nest.js and managing the database using
                PostgreSQL with Prisma ORM and migrations.
              </li>

              <li>
                One of the most interesting challenges I took on was developing
                a notification service. I implemented asynchronous communication
                between the notification module and the user service using AWS
                SQS and deployed the module through the Serverless Framework.
              </li>

              <li>
                This experience helped me strengthen my knowledge of scalable
                systems, cloud-based architectures, and async communication. It
                was also a great opportunity to work closely with teammates,
                exchange ideas, and learn continuously through hands-on
                development.
              </li>
            </ul>
          </span>
        </li>
        <li>
          <span className="font-semibold text-lg hidden md:flex justify-between mb-[-12px]">
            <div>
              <p>iTelaSoft (Pvt) Ltd</p>
              <p className="text-sm">Software Engineer Intern</p>
            </div>
            <div className="text-right">
              <p>Nov 2023 - May 2024</p>
              <p className="text-sm">Mirihana, Colombo</p>
            </div>
          </span>

          <span className="block md:hidden font-semibold text-md text-left">
            <p>iTelaSoft (Pvt) Ltd - Software Engineer Intern</p>
            <p className="text-sm">Nov 2023 - May 2024 | Mirihana, Colombo</p>
          </span>
          <br />
          <span className="text-[#ADB7BE]">
            <ul className="list-disc pl-6 text-sm md:text-md lg:text-[1rem]">
              <li>
                During my 6-month internship, I completed two individual
                projects using JavaScript-based technologies. Both projects were
                built with React.js and Tailwind CSS on the frontend, and
                Node.js on the backend, allowing me to apply a wide range of
                technical concepts in real-world scenarios.
              </li>

              <li>
                For the first project, I developed a{" "}
                <a
                  href="#todo-project"
                  className="text-blue-400 hover:underline"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToProject("todo-project");
                  }}
                >
                  Todo application
                </a>{" "}
                with full CRUD functionality and JWT-based authentication. I
                also wrote unit tests using Jest and improved code quality with
                SonarLint.
              </li>

              <li>
                In the second project,{" "}
                <a
                  className="text-blue-400 hover:underline"
                  href="#shopping-app"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToProject("shopping-app");
                  }}
                >
                  GFlock - Shopping Cart Application
                </a>
                , I explored Clean Architecture principles in a Node.js setup. I
                used Auth0 for authentication and containerized both the
                frontend and backend using Docker.
              </li>

              <li>
                This internship not only sharpened my technical skills but also
                exposed me to development best practices. I received valuable
                mentorship from senior engineers and even improved my
                communication skills through participation in the company’s
                Toastmasters club meetings.
              </li>
            </ul>
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
              <ul className="list-disc pl-6 text-sm md:text-md lg:text-[1rem]">
                <li>
                  As a member of the Web Development Team, I implemented the
                  frontend for a blog platform called{" "}
                  <a
                    href="#sense-science"
                    className="text-blue-400 hover:underline"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToProject("sense-science");
                    }}
                  >
                    Sense and Science
                  </a>
                  , and also took the lead in designing the main website for the
                  club. It was a great opportunity to apply my skills in a
                  real-world setting and contribute to something meaningful
                  within the university.
                </li>
                <li>
                  I also volunteered for the APAN56 – 2024 Datathon, where I was
                  part of the organizing committee. It gave me the chance to
                  collaborate with peers, support event logistics, and gain
                  valuable experience working behind the scenes of a large-scale
                  tech event.
                </li>
              </ul>
            </span>
          </li>
          <li>
            <span className="font-semibold text-lg">Peocode - UCSC </span>
            <br />
            <span className="text-[#ADB7BE]">
              <ul className="list-disc pl-6 text-sm md:text-md lg:text-[1rem]">
                <li>
                  I was also an active member of Web Development team, a club
                  focused on introducing core technology concepts to junior
                  students. I had the opportunity to design and deliver
                  comprehensive web development content. This experience not
                  only helped others grow but also support team learning.
                </li>
              </ul>
            </span>
          </li>
          <li>
            <span className="font-semibold text-lg">
              Rekha Music Circle - UCSC
            </span>
            <br />
            <span className="text-[#ADB7BE]">
              <ul className="list-disc pl-6 text-sm md:text-md lg:text-[1rem]">
                <li>
                  As a passionate musician, I was an active member of the club,
                  where I performed as both a violinist and vocalist. I
                  contributed to several university events, including the
                  Inauguration Ceremony, Excipio Freshers’ Welcome, Farewell
                  Ceremony for the senior batch, and UCSC Pandura. These moments
                  not only let me express my love for music but also connect
                  with the university community on a more personal level.
                </li>
              </ul>
            </span>
          </li>
          <li>
            <span className="font-semibold text-lg">Rotaract Club - UCSC</span>
            <br />
            <span className="text-[#ADB7BE]">
              <ul className="list-disc pl-6 text-sm md:text-md lg:text-[1rem]">
                <li>
                  I was an enthusiastic member of this club, where I
                  participated in several club service activities and
                  volunteered at various events organized by the club. It was a
                  great opportunity to contribute to meaningful causes, connect
                  with diverse teams, and grow personally through community
                  engagement.
                </li>
              </ul>
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
