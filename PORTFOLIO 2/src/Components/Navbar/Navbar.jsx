import React from 'react'
import "./Navbar.scss"
import { motion } from 'framer-motion'
import SideBar from '../SideBar/SideBar'
function Navbar() {
  return (
    <div className='navbar'>
        <SideBar/>
        <div className="wrapper">
            <motion.span 
                initial={{opacity:0, scale:0.5}}
                animate={{opacity:1, scale:1}}
                transition={{duration:0.5}}
            >
                Abhay Bamboriya
            </motion.span>
            <div className="social">
                <a href="#"><img src='/facebook.png'/></a>
                <a href="#"><img src='/instagram.png'/></a>
                <a href="#"><img src='/youtube.png'/></a>
                {/* <a href="#"><img src='/facebook.png'/></a> */}
            </div>
        </div>
    </div>
  )
}

export default Navbar
