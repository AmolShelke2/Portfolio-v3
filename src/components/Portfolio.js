import React, { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

import covid from "../assets/projects/covid.png";
import discord from "../assets/projects/DIscord.png";
import eCommerce from "../assets/projects/ecommerce.png";
import portfolio from "../assets/projects/portfolio.png";
import todo from "../assets/projects/todo.png";
import weather from "../assets/projects/weather.png";

const Portfolio = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const projects = [
    {
      id: 1,
      src: covid,
      live: "https://covid-landing-page-seven.vercel.app/",
      code: "https://github.com/AmolShelke2/Covid-landing-page",
    },

    {
      id: 2,
      src: discord,
      live: "https://discord-ui-ten.vercel.app/",
      code: "https://github.com/AmolShelke2/Discord-UI",
    },

    {
      id: 3,
      src: eCommerce,
      live: "https://e-commerce-website-rose-nu.vercel.app/",
      code: "https://github.com/AmolShelke2/e-commerce-website",
    },

    {
      id: 4,
      src: portfolio,
      live: "https://portfolio-v3-beta-lovat.vercel.app/",
      code: "https://github.com/AmolShelke2/Portfolio-v3",
    },

    {
      id: 5,
      src: todo,
      live: "https://todo-list-v2-nine.vercel.app/",
      code: "https://github.com/AmolShelke2/TodoList-v2",
    },

    {
      id: 6,
      src: weather,
      live: "https://weather-app-reactjs-eta.vercel.app/",
      code: "https://github.com/AmolShelke2/weather-app-reactjs",
    },
  ];

  return (
    <div
      name="Portfolio"
      data-aos="fade-up"
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
          {projects.map(({ src, id }) => (
            <div className="shadow-md shadow-gray-600 rounded-lg" key={id}>
              <img
                src={src}
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
