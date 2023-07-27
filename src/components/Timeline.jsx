import React, { useState, useEffect } from "react";
import workExperience from "../data/timeline";
import { BiSolidRightArrow } from "react-icons/bi";

const Timeline = () => {
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [color, setColor] = useState(null)

  const handleCompanyClick = (company) => {
    setSelectedCompany(company);
    setColor()
  };
  useEffect(() => {
    if (workExperience.length > 0) {
      setSelectedCompany(workExperience[0]);
    }
  }, []);
  return (
    <div id="experience" className="scroll-mt-56">
      <div className="flex md:flex-row flex-col justify-center w-full my-8  md:px-20">
        <div className=" w-full md:w-2/5  py-3 flex sm:flex-col px-5 overflow-x-scroll">
          {workExperience.map((item) => (
            <div
              key={item.id}
              className={`py-3 px-3 cursor-pointer text-sm md:text-base whitespace-nowrap hover:bg-hover-100 text-gray-600 font-raleway  tracking-wider hover:text-hover-300  ${
                item === selectedCompany
                  ? "text-hover-300 font-bold text-base border-b-[3px] md:border-b-0 md:border-l-[3px] border-hover-300"
                  : "border-b-2 md:border-l-2 md:border-b-0 font-medium"
              }`}
              onClick={() => handleCompanyClick(item)}
            >
              {item.company}
            </div>
          ))}
        </div>
        <div className="w-full px-5 py-6">
          {selectedCompany ? (
            <div>
              <p className="text-xl md:text-2xl font-semibold">
                <span className="text-gray-600">{selectedCompany.role}</span>
                <span className="text-hover-300">
                  {" "}
                  @ {selectedCompany.company}
                </span>
              </p>
              <p className="font-raleway font-medium tracking-wider text-gray-700 text-sm md:text-base my-1">
                {selectedCompany.duration}
              </p>
              <div className="my-4  w-full overflow-hidden">
                {selectedCompany.tasks.map((task) => (
                  <div key={task} className="flex items-start my-4 gap-3 ">
                    <BiSolidRightArrow className="flex-shrink-0 mt-2 text-hover-400" size={8} />
                    <span className=" text-gray-700">{task}</span>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
