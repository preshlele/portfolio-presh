import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { navLinks } from "../data/navlinks";
import Button from "./Button";
// import logo from "../assets/PRESH.png"

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex fixed w-full justify-between items-center h-28 max-w-full mx-auto px-4  bg-white backdrop-blur-lg bg-opacity-30 z-10 text-black">
      <span className="w-full text-3xl font-bold text-hover-400 cursor-default">
        {/* <img src={logo} alt="logo" width={150} height={100} className="object-cover" /> */}
        <h2 className="font-raleway text-2xl">&lt;Presh/&gt;</h2>
      </span>
      <ul className="hidden md:flex  font-raleway font-medium">
        {/* desktop menu */}
        {navLinks.map((link) => (
          <li key={link.name} className="p-4 ">
            <a href={`#${link.path}`}>{link.name}</a>
          </li>
        ))}
      </ul>
      <div className="hidden md:flex px-5">
        <Button buttonText={"Resume"} />
      </div>
      <div onClick={handleNav} className="relative md:hidden">
        {nav ? (
          <div className=" relative z-40 text-hover-400 ">
            <AiOutlineClose size={30} />
          </div>
        ) : (
          <AiOutlineMenu size={30} className="text-hover-300" />
        )}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-full h-screen border-r border-r-gray-900 text-gray-800 font-medium bg-[#E8E8E8] backdrop-blur-lg ease-in-out"
            : " ease-in-out fixed top-[-100%] opacity-0"
        }
      >
        {/* mobile menu */}
        {navLinks.map((link) => (
          <li
            key={link.name}
            className="p-4  relative top-20 text-center hover:text-hover-300 z-20"
          >
            <a
              href={`#${link.path}`}
              onClick={() => {
                if (nav) {
                  handleNav();
                }
              }}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
