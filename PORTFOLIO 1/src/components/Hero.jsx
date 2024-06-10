import React from 'react'
import { HERO_CONTENT } from '../constants'
import profilepic from '../assets/kevinRushProfile.png'
import { motion } from 'framer-motion'

const container=(delay)=>({
    hidden:{x:-100,opacity:0},
    visible:{
        x:0,
        opacity:1,
        transition:{
            duration:0.5,
            delay:delay
        }
    }
})
function Hero() {
  return (
    <div className='border-b  border-neutral-900 pb-4 lg:mb-35 m-3'>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2'>
                    <div className='flex flex-col items-center sm:justify-center lg:items-start'>
                        <motion.p 
                        // initial={{x:-100,opacity:0}}
                        // animate={{x:0,opacity:1}}
                        // transition={{duration : 0.5 ,delay:0}}
                        variants={container(0)}
                        initial="hidden"
                        animate="visible"
                        className='pb-16 text-6xl font-thin tracking-light lg:mt-16 lg:text-6xl md:text-3xl sm:w-full'>Abhay Bamboriya</motion.p>
                        <motion.span
                              variants={container(0.5)}
                              initial="hidden"
                              animate="visible"
                         className='bg-gradient-to-l from-pink-300 lg:text-5xl via-slate-500  to-purple-500 bg-clip-text text-4xl sm:text-6xl tracking-tight text-transparent'>Full  Stack Web Developer</motion.span>
                    </div>
                    <motion.div className='sm:flex sm:justify-center'>
                        <motion.p
                        variants={container(1)}
                        initial="hidden"
                        animate="visible"
                        className='my-2 max-w-xl py-6 font-light lg:text-xl tracking-tighter sm:text-4xl text-neutral-300 '>
                            {HERO_CONTENT}
                        </motion.p>
                    </motion.div>
            </div>
            <div className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex justify-center'>
                    <motion.img 
                        initial={{x:200,opacity:0}}
                        animate={{x:0,opacity:1}}
                        transition={{duration:1,delay:1.2}}
                        src={profilepic}/>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Hero
