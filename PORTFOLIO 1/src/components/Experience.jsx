import React from 'react'
import { EXPERIENCES } from '../constants'
import { motion } from 'framer-motion'
const Experience = () => {
  return (
    <div className='border-b border-neutral-800 pb-4 m-7'>
        <motion.h1 
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:0.5}}
        className='my-20 text-center lg:text-4xl sm:text-7xl'>Experience</motion.h1>

        
        {/* <h1>Abhya</h1> */}
            {EXPERIENCES.map((experience,index)=>(
                <div key={index} className='mb-8 flex flex-wrap lg:justify-center sm:flex sm:items-center
                sm:justify-center sm:mb-20'>
                    {/* <div>cdsksk</div> */}
                    <motion.div
                        whileInView={{opacity:1,x:0}}
                        initial={{opacity:0,x:-100}}
                        transition={{duration:1}}
                     className='w-full lg:w-1/4 sm:ml-5'>
                    
                        <p className='mb-2 lg:text-sm text-neutral-400 sm:text-3xl'>
                            {console.log(experience.year)}
                            {/* (experience.year) */}
                            {experience.year}
                            
                        </p>
                    </motion.div>
                    <motion.div 
                        whileInView={{opacity:1,x:0}}
                        initial={{opacity:0,x:100}}
                        transition={{duration:1}}
                        className='w-full max-w-xl lg:w-3/4'>
                        <h6 className='mb-2 lg:text-lg lg:font-semibold sm:text-4xl sm:mt-5'>
                            {experience.role} - 
                            <span className='lg:text-sm text-purple-300 sm:text-3xl'>
                                {experience.company}
                            </span>
                        </h6>
                        <p className='mb-4 text-neutral-400  lg:text-sm sm:text-3xl'>
                                {experience.description}
                        </p>
                        {experience.technologies.map((t,id)=>(
                            <span key={id} className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 lg:text-sm sm:text-3xl font-purple-500 font-medium'>{t}</span>
                        
                        ))}
                    </motion.div>
                </div>
            ))}
       
    </div>
  )
}

export default Experience
