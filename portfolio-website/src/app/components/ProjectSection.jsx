"use client";

import React, { useRef } from "react";
import { projectData } from "../content/project-data";
import ProjectCard from "./ProjectCard";
import { animate, motion, useInView } from "framer-motion";

const ProjectSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <section id="projects" className="scroll-mt-12">
      <div className="text-white px-6 sm:px-16">
        <h2 className="text-4xl md:text-5xl font-bold text-transparent px-4 xl:px-16 bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-pink-600 mb-4 mt-10">
          My Projects
        </h2>
        <ul
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 xl:px-16"
        >
          {[...projectData].reverse().map((project, index) => (
            <motion.li
              key={index}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index * 0.4 }}
            >
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
              />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProjectSection;
