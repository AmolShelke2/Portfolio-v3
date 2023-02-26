import React from "react";

const Contact = () => {
  return (
    <div>
      <div>
        <div>
          <p>Contact</p>
          <p>Submit the form below to get in touch with me!</p>
        </div>

        <div>
          <form action="">
            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              className="p-2 bg-transparent border-2 rounded-md
               text-white focus:outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />

            <textarea
              name="message"
              cols="30"
              rows="10"
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
