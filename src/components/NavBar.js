import React, { useState } from "react";
import { Link } from "react-scroll";

import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "Home",
    },

    {
      id: 2,
      link: "About",
    },

    {
      id: 3,
      link: "Portfolio",
    },

    {
      id: 4,
      link: "Skills",
    },

    {
      id: 5,
      link: "Contact",
    },
  ];

  return (
    <div
      className="flex justify-between items-center w-full h-20 px-5
     text-white bg-black fixed"
    >
      <div>
        <h1 className="text-5xl font-signature ml-2">Amol</h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            className="px-4 cursor-pointer capitalize font-medium
         text-gray-500 hover:scale-105 duration-200"
            key={id}
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        className=" cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
        onClick={() => setNav(!nav)}
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul
          className="flex flex-col justify-center items-center 
        absolute top-0 left-0 w-full h-screen bg-gradient-to-b
         from-black to-gray-800 text-gray-500"
        >
          {links.map(({ id, link }) => (
            <li
              className=" px-4 cursor-pointer capitalize py-6
            text-4xl"
              key={id}
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
