import React, { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

import codedamn from "../assets/experience/codedamn.png";
import girlscript from "../assets/experience/girlscript.jpg";

const Experience = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const experinces = [
    {
      id: 1,
      company: "codedamn",
      role: "Tech Support team",
      date: "Nov-022 to Feb-023",
      logo: codedamn,
      description:
        "Codedamn is a E-learning platform where coders can learn and apply there skills practically. I work there as a technical content writer and written multiple blogs on various technologies",
      topics: ["writing", "research", "frontend"],
    },

    {
      id: 2,
      company: "Girlscript foundation",
      role: "Open-source developer",
      date: "Feb-022 to May-022",
      logo: girlscript,
      description:
        "Girlscript foundation is an non-profitable organization which provides free open-source coding opportunities. I work at Girlscript foundation as a open-source contributor and in the period of 3 months I have done more than 60+ contributions.",
      topics: ["webdev", "frontend", "open-source"],
    },
  ];

  return (
    <div
      name="Experience"
      data-aos="fade-up"
      className="bg-gradient-to-b from-gray-800 to-black text-white
      w-full md:h-screen"
    >
      <div
        className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center
        text-white"
      >
        <div>
          <p
            className="font-bold text-4xl border-b-4
           border-gray-500 p-2 inline"
          >
            Experience
          </p>
          <p className="my-8">Here is my work experience</p>
        </div>

        <div className="flex flex-row justify-center items-center flex-wrap">
          {experinces.map(experience => (
            <div
              key={experience.id}
              className="max-w-sm rounded overflow-hidden shadow-lg shadow-gray-600 mx-6 mb-4 lg:my-6"
            >
              <img className="w-full" src={experience.logo} alt="Mountain" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-1">
                  {experience.company}
                </div>
                <div className="font-normal text-lg mb-1">
                  {experience.date}
                </div>
                <p className="text-gray-700 text-base">
                  {experience.description}
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span
                  className="inline-block bg-gray-200 rounded-full px-3 py-1
               text-sm font-semibold text-gray-700 mr-2 mb-2"
                >
                  #{experience.topics[0]}{" "}
                </span>
                <span
                  className="inline-block bg-gray-200 rounded-full px-3 py-1
               text-sm font-semibold text-gray-700 mr-2 mb-2"
                >
                  #{experience.topics[1]}{" "}
                </span>
                <span
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 
              text-sm font-semibold text-gray-700 mr-2 mb-2"
                >
                  #{experience.topics[2]}{" "}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
