import React from "react";

const Contact = () => {
  return (
    <div
      name="Contact"
      className="bg-gradient-to-b from-black
     to-gray-800 w-full h-screen text-white"
    >
      <div
        className="flex flex-col p-4 justify-center
       max-w-screen-lg h-full mx-auto"
      >
        <div className="pb-8">
          <p
            className="text-4xl font-bold border-b-4 border-gray-500
           pb-2 inline"
          >
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me!</p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/79989f31-3d89-438f-b1bd-b5861e6901c1"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              required={true}
              placeholder="Enter your name"
              name="name"
              className="p-2 bg-transparent border-2 rounded-md
               text-white focus:outline-none"
            />

            <input
              type="email"
              required={true}
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />

            <textarea
              name="message"
              required={true}
              cols="30"
              rows="10"
              placeholder="Enter your message"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button
              className="text-white bg-gradient-to-b
             from-cyan-500 to-blue-500 px-6 py-3 mx-auto my-8 flex 
             items-center rounded-md hover:scale-105 duration-300"
            >
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
