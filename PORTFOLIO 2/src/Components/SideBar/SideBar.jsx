import React, { useState } from 'react'
import './Sidebar.scss'
import ToggleButton from './toggleButton/ToggleButton'
import Links from './links/Links'
import { delay, motion } from 'framer-motion'
const SideBar = () => {
    const [open,setOpen]=useState(false)
    const variants={
        open:{
            clipPath:"circle(1000px at 50px 50px)",
            transition:{
                type:"spring",
                stiffness:20,
            }
        },
        closed:{
            // for custom shape
            clipPath:"circle(30px at 50px 50px)",
            transition:{
                delay:0.5,
                type:"spring",
                stiffness:400,
                damping:40
            }
        }
    }

  return (
    
    <motion.div className='sidebar' animate={open? "open":"closed"}>
        <motion.div className="bg" variants={variants}>
                <Links/>
        </motion.div>
        {console.log(open)}
        <ToggleButton setOpen={setOpen}/>
        {console.log('afetr',open)}
    </motion.div>
  )
}

export default SideBar
