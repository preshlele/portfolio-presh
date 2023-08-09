import React from 'react'
import { FiGithub, FiExternalLink } from "react-icons/fi";

const PortfolioItem = ({title, imgUrl, stack, link, description, github}) => {
  return (
    <div className="lg:w-2/3 rounded  relative mt-8 lg:mt-28 md:mx-20">
      <div className="absolute rounded-lg inset-0 w-full md:h-2/3  md:w-2/3  bg-gradient-to-r from-black to-gray-400 opacity-90 md:opacity-90 md:transition-opacity duration-300">
        <img
          src={imgUrl}
          alt="image"
          className="w-full min-h-full  opacity-10  md:h-48 object-cover cursor-pointer absolute duration-100 hover:opacity-100 rounded-lg"
        />
      </div>

      <div className=" lg:top-[-4rem] lg:left-24 relative md:w-1/2 md: md:mx-[19rem] inset-0 flex flex-col p-4 min-h-full">
        <p className="text-gray-200 md:text-gray-800 md:text-base md:text-right text-sm md:font-medium font-raleway tracking-wider">
           Project
        </p>
        <p className="text-white md:text-hover-300 hover:text-hover-200 text-xl font-bold  md:text-3xl md:text-right mb-2 md:mb-3 ">
          {title}
        </p>
        <p className="text-white md:text-gray-700 md:text-base md:bg-white md:p-4 text-justify md:border-2  md:border-hover-200 mb-6 lg:mb-3 md:ml-[-10rem]">
          {description}
        </p>
        <p className="flex flex-wrap gap-2 py-3 md:py-8 flex-row items-center justify-start text-white font-raleway min-w-full tracking-wider md:ml-[-10rem] text-xs md:text-sm">
          {stack.map((item) => (
            <span
              key={item}
              className="inline-block px-2 py-2 font-normal bg-stone-800 rounded-md"
            >
              {item}
            </span>
          ))}
        </p>
        <div className="flex flex-row gap-3 items-center py-3 md:ml-auto">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiGithub
              size={20}
              className="hover:text-hover-400 text-white md:text-hover-300"
            />
          </a>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <FiExternalLink
              size={20}
              className="hover:text-hover-400 text-white md:text-hover-300"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default PortfolioItem