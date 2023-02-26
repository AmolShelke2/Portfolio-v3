import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import git from "../assets/git.png";
import github from "../assets/github.png";
import javascript from "../assets/javascript.png";
import reactIcon from "../assets/react.png";
import nextjsIcon from "../assets/nextjs.png";
import nodeIcon from "../assets/node.png";
import tailwindIcon from "../assets/tailwind.png";

const Experience = () => {
  const skills = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },

    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },

    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },

    {
      id: 4,
      src: reactIcon,
      title: "React JS",
      style: "shadow-blue-600",
    },

    {
      id: 5,
      src: tailwindIcon,
      title: "Tailwind",
      style: "shadow-sky-400",
    },

    {
      id: 6,
      src: nextjsIcon,
      title: "Next JS",
      style: "shadow-white",
    },

    {
      id: 7,
      src: nodeIcon,
      title: "Node",
      style: "shadow-green-500",
    },

    {
      id: 8,
      src: github,
      title: "Github",
      style: "shadow-gray-400",
    },

    {
      id: 9,
      src: git,
      title: "Git",
      style: "shadow-orange-500",
    },
  ];

  return (
    <div
      name="experience"
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
          {skills.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 
          duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="skills-images" className="w-20 mx-auto" />
              <p className="mt-5 text-md">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
