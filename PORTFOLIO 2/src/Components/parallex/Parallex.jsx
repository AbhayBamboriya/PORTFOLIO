import './parallex.scss'
import React, { useRef } from 'react'
import { motion , useScroll ,useTransform} from 'framer-motion'
// import { text } from 'express'
const Parallex = ({type}) => {
    const ref=useRef()
    const {scrollYProgress}=useScroll({
        target:ref,
        offset:["start start","end start"]
    })

    const ypg=useTransform(scrollYProgress,[0,1],["0%","500%"])
    const ytext=useTransform(scrollYProgress,[0,1],["0%","500%"])
  return (
    <div className="parallex" ref={ref} style={{background:type==="services" ? "linear-gradient(180deg,#111132,#0c0c1d)" :
                    "linear-gradient(180deg,#111132,#505064)" 
    }}>
      <motion.h1 style={{y:ytext}}>{type==="services" ? "What We Do" : "What We Did"}</motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div style={{y:ypg ,
        backgroundImage:`url(${
            type==="services" ? "/planets.png" : "/sun.png"
        })`
      }} className="planets"></motion.div>
        <motion.div style={{x:ypg}} className="stars"></motion.div>
    </div>
  )
}

export default Parallex
