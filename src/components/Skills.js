import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import github from "../assets/github.png";
import javascript from "../assets/javascript.png";
import reactIcon from "../assets/react.png";
import nextjsIcon from "../assets/nextjs.png";
import nodeIcon from "../assets/node.png";
import tailwindIcon from "../assets/tailwind.png";

const Skills = () => {
  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-gray-800 to-black text-white
      w-full md:h-screen"
    >
      <div
        className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center
       w-full h-full text-white"
      >
        <div>
          <p
            className="text-4xl font-bold border-b-4 border-gray-500 
          p-2 inline"
          >
            Skills
          </p>
          <p className="py-6">Tech stack on which I've worked</p>
        </div>

        <div
          className="w-full grid grid-cols-2 sm:grid-cols-3
        gap-8 text-center py-8 px-12 sm:px-0"
        >
          <div
            className="shadow-md hover:scale-105 
          duration-500 py-2 rounded-lgs"
          >
            <img src={html} alt="" className="w-20 mx-auto" />
            <p className="mt-4">HTML</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
