import React, { Fragment } from 'react';

import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          Linkedin <FaLinkedin size={30} />
        </>
      ),
      href: 'https://www.linkedin.com/in/amol-shelke-627813220/',
      style: 'rounded-tr-md',
    },

    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      href: 'https://github.com/AmolShelke2',
    },

    {
      id: 2,
      child: (
        <>
          Linkedin <FaLinkedin size={30} />
        </>
      ),
      href: 'https://www.linkedin.com/in/amol-shelke-627813220/',
    },

    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: 'mailto:shelkeamol829@gmail.com',
    },

    {
      id: 4,
      child: (
        <>
          Linkedin <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: '/resume.pdf',
      style: 'rounded-br-md',
      download: true,
    },
  ];

  return (
    <div className="flex flex-col top-[35%] left-0 fixed">
      <ul>
        <li
          className="flex justify-between items-center w-40 
        h-14 px-4 ml-[-100px] hover:rounded-md hover:ml-[10px] 
        duration-300 bg-gray-500"
        >
          <a
            href=""
            className="flex justify-between items-center 
            w-full text-white"
          >
            <>
              Linkedin <FaLinkedin size={30} />
            </>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;