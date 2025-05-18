"use client";

import React, { useRef } from "react";
import { projectData } from "../content/project-data.jsx";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

// Motion wrapper for each card
const AnimatedCard = ({ children, index, id }) => {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    threshold: 0.2, // Trigger when 20% is in view
  });

  return (
    <motion.li
      ref={ref}
      id={id}
      className="scroll-mt-28"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.6,
        delay: 0.15,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.li>
  );
};

const ProjectSection = () => {
  const reversedProjects = [...projectData].reverse();

  return (
    <section id="projects" className="py-8 md:py-10 scroll-mt-12">
      <div className="text-white px-6 sm:px-16">
        <h2 className="text-4xl md:text-5xl font-bold text-transparent px-4 xl:px-16 bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-pink-600 mb-4 mt-10">
          My Projects
        </h2>
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 xl:px-16">
          {reversedProjects.map((project, index) => {
            const title = project.title.toLowerCase();
            const id = title.includes("todo")
              ? "todo-project"
              : title.includes("gflock")
                ? "shopping-app"
                : title.includes("sense")
                  ? "sense-science"
                  : undefined;

            return (
              <AnimatedCard key={project.id} index={index} id={id}>
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  imgUrl={project.image}
                  gitUrl={project.gitUrl}
                  previewUrl={project.previewUrl}
                />
              </AnimatedCard>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default ProjectSection;
