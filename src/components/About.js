import React, { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div
      name="About"
      data-aos="fade-up"
      className="w-full h-screen bg-gradient-to-b
       from-gray-800 to-black text-white px-4"
    >
      <div
        className="max-w-screen-lg mx-auto flex flex-col 
        justify-center w-full h-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Hey, There I'm Amol Shelke I'm a Front-End Developer.I'm a second year
          undergraduated student currently pursuing BCA from RTMNU Nagpur
          university. I have 1 year of experince building delightful websites
          and designs. I love to work with technologies such as HTML, CSS,
          JavaScript,React and Most favorite Tailwind❤️. I'm currently looking
          for an Internship or entry level job, If you have any openings for an
          intern or any project for me then you can write a message below.
        </p>
        <br />
        <p className="text-xl">
          As a self-tought developer I have completed 2 #100daysofcode
          challenges and created plenty of projects and shared them on Github. I
          was new back then still I share my all journey on Linkedin.
        </p>
      </div>
    </div>
  );
};

export default About;
