import React from 'react'
import { motion } from 'framer-motion'
const Links = () => {
  const items=[
    "HomePage",
    "Services",
    "Portfolio",
    "Contact",
    "About",
    "HomePage"
  ]
  const variants={
    open:{
      transition:{
        staggerChildren:0.1
      }
    },
    closed:{
      transition:{
        staggerChildren:0.05,
        staggerDirection:-1
      }
    }
  }
  const itemVariants={
    open:{
      y:0,
      opacity:1
    },
    closed:{
      y:50,
      opacity:0
    }
  }
  return (
    <motion.div className='links' variants={variants}>
      {
        items.map((i)=>(
          <motion.a href={`#${i}`} key={i} variants={itemVariants} whileHover={{scale:1.1}} whileTap={{scale:0.9}}>{i}</motion.a>
        ))
      }
    </motion.div>
  )
}

export default Links
