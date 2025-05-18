import React from "react";
import Link from "next/link";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div className="flex flex-col h-full rounded-xl overflow-hidden bg-[#181818] shadow-lg">
      {/* Image */}
      <div
        className="h-52 sm:h-60 relative group"
        style={{
          backgroundImage: `url(${imgUrl?.src || imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex items-center gap-10 justify-center absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-80 transition-opacity duration-500 z-10">
          <Link
            href={gitUrl}
            className="h-14 w-14 border-2 rounded-full border-[#ADB7BE] hover:border-white"
            target="_blank"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] m-2 hover:text-white" />
          </Link>
          {previewUrl && (
            <Link
              href={previewUrl}
              className="h-14 w-14 border-2 rounded-full border-[#ADB7BE] hover:border-white"
              target="_blank"
            >
              <EyeIcon className="h-10 w-10 text-[#ADB7BE] m-2 hover:text-white" />
            </Link>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between flex-grow p-4 text-white">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <div className="text-[#ADB7BE] flex-grow">{description}</div>
      </div>
    </div>
  );
};

export default ProjectCard;
