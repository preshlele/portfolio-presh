import React from 'react'
import { FiGithub, FiExternalLink } from "react-icons/fi";

const PortfolioItem = ({title, imgUrl, stack, link, description}) => {
  return (
    <div className="lg:w-full rounded l overflow-hidden relative mt-8">
      <div className="absolute inset-0 w-full bg-gradient-to-r from-black to-gray-400 opacity-90"></div>
      <img
        src={imgUrl}
        alt="image"
        className="w-full min-h-full opacity-10  md:h-48 object-cover cursor-pointer absolute"
      />

      <div className="relative inset-0 flex flex-col p-4 min-h-full ">
        <p className="text-gray-200 text-sm font-raleway tracking-wider ">Featured Project</p>
        <p className="text-white hover:text-hover-200 text-xl font-bold  md:text-xl mb-2 md:mb-3 ">
          {title}
        </p>
        <p className="text-white text-justify my-6">{description}</p>
        <p className="flex flex-wrap gap-2 py-3 flex-row items-center justify-start text-white font-raleway tracking-wider text-xs md:text-sm">
          {stack.map((item) => (
            <span
              key={item}
              className="inline-block px-2 py-2 font-normal bg-stone-800 rounded-md"
            >
              {item}
            </span>
          ))}
        </p>
        <div className='flex flex-row gap-3 items-center py-3'>
          <a
            href="https://github.com/preshlele"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiGithub size={20} className="hover:text-hover-400 text-white" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiExternalLink
              size={20}
              className="hover:text-hover-400 text-white"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default PortfolioItem