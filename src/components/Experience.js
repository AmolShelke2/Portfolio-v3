import React from "react";

import codedamn from "../assets/experience/codedamn.png";
import girlscript from "../assets/experience/girlscript.jpg";

const Experience = () => {
  const experinces = [
    {
      company: "codedamn",
      role: "Tech Support team",
      date: "Nov-022 to Feb-023",
      description:
        "Codedamn is a E-learning platform where coders can learn and apply there skills practically",
      tasks: {
        task1: "Writen blogs on various technologies",
        task2: "Become an top performer and get extended for 6 months",
        task3: "Written plag free articles",
      },
    },

    {
      company: "Girlscript foundation",
      role: "Open-source developer",
      date: "Feb-022 to May-022",
      description:
        "Girlscript foundation is an non-profitable organization which provides free open-source coding opportunities.",
      tasks: {
        task1: "Created contributions over 15+ github repositories",
        task2: "Become a top performer with 15th rank all over India",
        task3: "Created all the contributions without any plagiarisms",
      },
    },

    {
      company: "#100daysofcode",
      role: "Self-tought developer",
      date: "Dec-021 to Mar-022",
      description:
        "#100daysofcode is an challenging way of learning and posting your progress with other as a self-tought developer",
      tasks: {
        task1: "Started Learning web development with zero knowldge",
        task2: "Learned HTML, CSS and JavaScript in this challenge",
        task3: "Created and deployed multiple projects with github and vercel",
      },
    },
  ];

  return (
    <div
      name="Experience"
      className="bg-gradient-to-b from-gray-800 to-black text-white
      w-full md:h-screen"
    >
      <div
        className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center
        text-white flex-wrap"
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
          <div>
            <div>
              <img src={codedamn} alt="codedamn" />
            </div>
            <div>
              <h2>Codedamn</h2>
              <h3>Tech Support team</h3>
              <h4>nov-022 to feb-023</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laborum, animi? Quod iure ad recusandae veniam.
              </p>
              <ul>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
