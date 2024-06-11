import React, { useState } from 'react'
import { motion } from 'framer-motion'
import './app.scss'
function Test() {
    const [open,setOpen]=useState(false)
    const variants={
        visible:{
            opacity:1,
            // x:500,
            transition:{staggerChildren:0.2}
        },

        hidden:{opacity:0}
    }
    const item=["item1","item2","item3","item.4"]
  return (
    <div className='course'>
        <motion.ul initial="hidden" animate="visible" variants={variants}>
            {
                item.map((i)=>(
                    <motion.li variants={variants}>
                        {i}
                    </motion.li>
                ))
            }
        </motion.ul>
        {/* <button onClick={()=>setOpen(pre=>!pre)}>Click</button> */}
    </div>
  )
}

export default Test
