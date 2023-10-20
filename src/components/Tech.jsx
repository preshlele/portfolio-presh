import React from "react";
import Marquee from "react-fast-marquee";
import { skills } from "../data/skills";

const Tech = () => {
  const marqueeProps = [
    { gradient: false, speed: 60, direction: "right", pauseOnHover: true },
    { gradient: false, speed: 60, direction: "left", pauseOnHover: true },
  ];

  return (
    <div className=" p-4 mt-10  mb-48 md:mb-[23.5rem]">
      <div className="w-full mx-auto">
        <div>
          {skills.map((stack, index) => (
            <Marquee key={stack} {...marqueeProps[index]}>
              <div
                key={stack.id}
                className=" whitespace-normal text-gray-700  mt- text-3xl md:text-5xl cursor-pointer font-extrabold md:font-bold font-outline-2"
              >
                <div className=" p-4">
                  {stack.map((item) => (
                    <span key={item.id} className={item.color}>
                      {item.text}
                    </span>
                  ))}
                </div>
              </div>
            </Marquee>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tech;
