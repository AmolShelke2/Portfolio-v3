import React from "react";

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          Linkedin <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/amol-shelke-627813220/",
      style: "rounded-tr-md",
    },

    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/AmolShelke2",
    },

    {
      id: 3,
      child: (
        <>
          Twitter <FaTwitter size={30} />
        </>
      ),
      href: "https://twitter.com/Amol_shelke09",
    },

    {
      id: 4,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:shelkeamol829@gmail.com",
    },

    {
      id: 5,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/AmolShelke.resume.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className="flex-col top-[35%] left-0 fixed hidden lg:flex">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:rounded-md hover:ml-[10px] duration-300 bg-gray-500" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center 
            w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
