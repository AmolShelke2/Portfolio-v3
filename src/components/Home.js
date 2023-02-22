import React from 'react';

import heroImage from '../assets/myHeroImage.jpg';

import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
const Home = () => {
  return (
    <div name="home">
      <div>
        <div>
          <h2>I'm a front End Developer</h2>
          <p>
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
      </div>
    </div>
  );
};

export default Home;
