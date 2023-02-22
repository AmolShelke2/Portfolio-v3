import React from 'react';

import heroImage from '../assets/myHeroImage.jpg';

import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black
       via-black to-gray-800"
    >
      <div
        className="max-w-screen-lg mx-auto flex flex-col items-center
       justify-center h-full px-4 md:flex-row"
      >
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a front End Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have 1 year of experince building and designing front end websites
            from scratch. Currently I love to work on web applications using
            technologies like React, Tailwind❤️
          </p>

          <div>
            <button>
              Portfolio{' '}
              <span>
                <MdOutlineKeyboardArrowRight />
              </span>
            </button>
          </div>
        </div>

        <div>
          <img
            src={heroImage}
            alt="my portfolio"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
