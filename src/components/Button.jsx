import React from 'react'

const Button = ({buttonText}) => {
  return (
    <a className="relative inline-block  px-4 py-3 font-medium group">
      <span className="absolute rounded inset-0 w-full h-full transition duration-400 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
      <span className="absolute inset-0 w-full h-full bg-white border-2 rounded border-black group-hover:bg-black"></span>
      <span className="relative text-black font-raleway font-bold tracking-wider group-hover:text-white">
        {buttonText}
      </span>
    </a>
  );
}

export default Button