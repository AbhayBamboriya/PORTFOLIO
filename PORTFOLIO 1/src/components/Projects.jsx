import React from 'react'
import { PROJECTS } from '../constants'
import { motion } from 'framer-motion'
const Projects = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 m-4 sm:m-4'>
        <motion.h1 
        whileInView={{opacity:1,y:0}}

        initial={{opacity:0,y:-100}}
        transition={{duration:0.5}}

        className='my-20 text-center lg:text-4xl sm:text-7xl'>
            Projects
        </motion.h1>
        <div>
            {PROJECTS.map((project,id)=>(
                <div key={id} className='mb-8 flex flex-wrap lg:justify-center sm:ml-5 '>
                    <motion.div
                    whileInView={{opacity:1,x:0}}
                    initial={{opacity:0,x:-100}}
                    transition={{duration:0.5}}
                     className='w-full lg:w-1/4 sm:mt-10'>
                        <img src={project.image} width={150} height={150} className='mb- rounded sm:rounded-2xl sm:mb-6'/>
                    </motion.div>
                    <motion.div 
                    whileInView={{opacity:1,x:0}}
                    initial={{opacity:0,x:100}}
                    transition={{duration:1}}
                    className='w-full max-w-xl lg:w-3/4 lg:mt-10'>
                        <h6 className='mb-2 font-semibold sm:text-4xl lg:text-lg'>
                            {project.title}
                        </h6>
                        <p className='mb-4 text-neutral-400 sm:text-3xl lg:text-sm'>
                            {project.description}
                        </p>
                        {project.technologies.map((t,id)=>(
                            <span key={id} className='mr-2 rounded bg-neutral-900 px-2 py-1 lg:text-sm font-medium text-purple-900 sm:text-3xl '>{t}</span>
                        ))}
                    </motion.div>
                    
                </div>
            ))}
        </div>
    </div>
  )
}

export default Projects
