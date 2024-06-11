import React, { useState } from 'react'
import { motion } from 'framer-motion'
import './app.scss'
function Test() {
    const [open,setOpen]=useState(false)
    const variants={
        visible:{opacity:1,x:500},
        hidden:{opacity:0}
    }
  return (
    <div className='course'>
      <motion.div
        // initial={{opacity:0,scale:0.5}}
        variants={variants}
        transition={{type:"spring",stiffness:100}}
        // initial="hidden"
        // animate="visible"
        animate={open?"visible":"hidden"}
        className="box"></motion.div>
        <button onClick={()=>setOpen(pre=>!pre)}>Click</button>
    </div>
  )
}

export default Test
