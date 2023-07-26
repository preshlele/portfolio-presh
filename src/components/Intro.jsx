import React from "react";
import techstack from "../data/techstack";
import { BiSolidRightArrow } from "react-icons/bi";
import profilePic from "../assets/Presh-pic.png";

const Intro = () => {
  return (
    <div id="about" className="scroll-mt-36">
      <div className="relative flex items-center px-5 md:px-20">
        {/* <div className="flex-grow border-t border-hover-400"></div> */}
        <span className="flex-shrink mx-4 text-2xl font-bold text-gray-700">
          About Me
        </span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>
      <div className="flex flex-col md:flex-row md:gap-14  items-center px-5 md:px-[4rem] text-justify justify-center  pt-8 pb-6">
        <div className=" w-full md:w-3/5 h-full">
          <span className="text-base md:text-lg text-justify">
            Hi, I am Emmanuel, a Ghanaian based frontend developer passionate about crafting visually appealing websites
            prioritizing aesthetics and user experience. I am an expert in web
            and mobile interface design, creating intuitive, responsive designs
            for diverse user groups.
            <p className="mt-3">
              Currently I am focused on building accessible, high-quality
              products and digital experiences and dedicated to delivering
              exceptional frontend solutions for clients' needs.
            </p>
            <p className="mt-4">
              {" "}
              Here are some technologies I have been working with recently:
            </p>
          </span>
          <div className="">
            <ul className="w-full grid grid-cols-2 gap-x-20 p-5">
              {techstack[0].tech.map((item) => (
                <li
                  key={item.tech}
                  className="flex gap-2 text-sm md:text-base items-center py-1 font-raleway tracking-wider font-medium whitespace-nowrap"
                >
                  <BiSolidRightArrow size={8} className="text-hover-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-20 md:-mt-[19rem] relative">
          <img src={profilePic} alt="Profile picture" className="" />
          <div className="absolute text-center top-0 w-full h-full rounded-full bg-hover-200 bg-blend-overlay bg-opacity-75 transition-opacity duration-300 hover:bg-opacity-0"></div>
        </div>
      </div>

      <div className="relative flex items-center mt-[12rem] md:mt-72 px-4 md:px-24">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="flex-shrink mx-4 text-2xl font-bold text-gray-700">
          Experience
        </span>
        {/* <div className="flex-grow border-t border-hover-400"></div> */}
      </div>
    </div>
  );
};

export default Intro;
