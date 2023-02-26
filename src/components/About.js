import React from "react";

const About = () => {
  return (
    <div
      name="About"
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi magnam
          consequatur quae ea quam doloribus, sit aperiam impedit magni sint
          maxime, enim error itaque quisquam pariatur? Officia minus doloremque
          qui delectus illum. Enim, sit maxime laboriosam, necessitatibus cum in
          maiores ad perferendis quam vitae explicabo nihil at rerum error! Nam?
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          maxime eaque impedit reprehenderit, minima nihil, ab cupiditate porro
          voluptatibus aut delectus iusto officiis voluptates maiores vel?
          Voluptatum, odit esse nam officiis aliquid commodi assumenda,
          cupiditate obcaecati excepturi tempora unde repudiandae perspiciatis
          illo minima quae maiores. Quis necessitatibus fuga eum illo?
        </p>
      </div>
    </div>
  );
};

export default About;
