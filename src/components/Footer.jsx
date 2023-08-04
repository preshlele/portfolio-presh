import React from 'react'
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";
import Button from './Button';

const Footer = () => {
  return (
    <div id="contact">
      <div className="relative flex items-center mt-8 px-5 md:px-20">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="flex-shrink mx-4 text-2xl font-bold text-gray-700">
          Contact
        </span>
        {/* <div className="flex-grow border-t border-hover-400"></div> */}
      </div>
      <div className="h-full py-8 px-4 md:px-[2rem] w-full flex flex-col items-center justify-center gap-3">
        <h1 className="text-4xl font-bold">Get In Touch</h1>
        <p className="text-center text-gray-700 font-normal px-3 md:px-12">
          I'm committed to expanding my knowledge and expertise in the field,
          let's bring your imagination to life. Don't
          hesitate to reach out - I'll do my best to respond promptly.
        </p>
        <div className="my-8">
          <Button buttonText="Say Hello" />
        </div>

        <div className="my-12">
          <div className="flex flex-row justify-evenly my-4 ">
            <a
              href="https://github.com/preshlele"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub size={25} className="hover:text-hover-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/emmanuel-mensah-141b42191/"
              target="_blank"
              rel="noreferrer"
            >
              <FiLinkedin size={25} className="hover:text-hover-300" />
            </a>
            <FiTwitter size={25} className="hover:text-hover-300" />
            <a href="mailto:emomensa@gmail.com">
              <FiMail size={25} className="hover:text-hover-300" />
            </a>
          </div>
          <div>
            <p className="text-sm hover:text-hover-400 font-raleway font-medium">
              Built by Emmanuel Mensah &copy;2023
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer