import React from 'react'
import { CONTACT } from '../constants'
import { motion } from 'framer-motion'
const Contact = () => {
  return (
    <div className='border-b border-neutral-900 pb-20'>
        <motion.h1  
            whileInView={{opacity:1,y:0}}
            initial={{opacity:0,y:-100}}
            transition={{duration:0.5}}
         className='my-10 text-center lg:text-4xl sm:text-7xl'>Contact</motion.h1>
        <div className='text-center tracking-tighter'>
            <motion.p 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:1}}
            className='my-4 sm:text-3xl lg:text-lg'>
                {CONTACT.address}
            </motion.p>
            <motion.p
             whileInView={{opacity:1,x:0}}
             initial={{opacity:0,x:100}}
             transition={{duration:1}}
             className='my-4 sm:text-3xl lg:text-lg'>
                {CONTACT.phoneNo}
            </motion.p>
            <motion.a 
            href="#"
            className='sm:text-3xl lg:text-lg'
            >
                {CONTACT.email}
            </motion.a>

        </div>
    </div>
  )
}

export default Contact
