import React from "react";

import covid from "../assets/projects/covid.png";
import discord from "../assets/projects/DIscord.png";
import eCommerce from "../assets/projects/ecommerce.png";
import portfolio from "../assets/projects/portfolio.png";
import todo from "../assets/projects/todo.png";
import weather from "../assets/projects/weather.png";

const Project = () => {
  return (
    <div
      name="project"
      className="bg-gradient-to-b from-black to-gray-800 
    w-full text-white md:h-screen"
    >
      <div
        className="max-w-screen-lg p-4 mx-auto flex flex-col 
      justify-center w-full h-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-4">Check out some of my work here</p>
        </div>

        <div
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 
        px-12 sm:px-0"
        >
          <div className="shadow-md shadow-gray-600 rounded-lg">
            <img
              src={covid}
              alt="covid-landing-project"
              className="rounded-md duration-200 hover:scale-105"
            />

            <div className="flex items-center justify-center">
              <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                Demo
              </button>
              <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                Code
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
