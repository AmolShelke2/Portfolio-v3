import React from 'react';

import { faBars, faTimes } from 'react-icons/fa';

const NavBar = () => {
  const links = [
    {
      id: 1,
      link: 'Home',
    },

    {
      id: 2,
      link: 'About',
    },

    {
      id: 3,
      link: 'Portfolio',
    },

    {
      id: 4,
      link: 'Experience',
    },

    {
      id: 5,
      link: 'Contact',
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

      <ul className="flex">
        {links.map(({ id, link }) => (
          <li
            className="px-4 cursor-pointer capitalize font-medium
         text-gray-500 hover:scale-105 duration-200"
            key={id}
          >
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
