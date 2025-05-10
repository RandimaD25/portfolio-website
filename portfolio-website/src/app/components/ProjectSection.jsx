import React from "react";
import { projectData } from "../content/project-data";
import ProjectCard from "./ProjectCard";

const ProjectSection = () => {
  return (
    <>
      <div className="text-white px-6 sm:px-16">
        <h2 className="text-4xl md:text-5xl font-bold text-transparent px-4 xl:px-16 bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-pink-600 mb-4 mt-10">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 xl:px-16">
          {projectData.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectSection;
