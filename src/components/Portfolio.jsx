import React from 'react'
import portfolio from '../data/portfolio'
import PortfolioItem from './PortfolioItem'

const Portfolio = () => {
  return (
    <div id="projects" className="scroll-mt-36">
      <div className="relative flex items-center px-5 md:px-20 lg:px-56">
        <span className="flex-shrink mx-4 text-2xl font-bold text-gray-700">
          Projects
        </span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>
      <div className=" flex flex-col md:flex-row items-center  justify-center">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 w-full px-5 py-8 lg:px-44">
          {portfolio.map((item) => (
            <PortfolioItem
              key={item.title}
              imgUrl={item.imgUrl}
              title={item.title}
              description={item.description}
              stack={item.stack}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio