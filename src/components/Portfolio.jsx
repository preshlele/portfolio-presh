import React from 'react'
import portfolio from '../data/portfolio'
import PortfolioItem from './PortfolioItem'

const Portfolio = () => {
  return (
    <div className='bg-green-400 flex flex-col md:flex-row items-center justify-center'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {portfolio.map(item =>(
                <PortfolioItem
                    imgUrl={item.imgUrl}    
                    title={item.title}   
                    stack={item.stack}     
                    link={item.link}
                />
            ))}
        </div>
    </div>
  )
}

export default Portfolio