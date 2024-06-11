import React from 'react'
import './hero.scss'
import { motion } from 'framer-motion'
const Hero = () => {
    const textVariants={
        initial:{
            x:-500,opacity:0
        },
        animate:{
            x:0,
            opacity:1,
            transition:{
                duration:1,
                staggerChildren:0.1
            }
        },  
        scrollButton:{
            opacity:0,
            y:10,
            transition:{
                duration:2,
                repeat:Infinity
            }
        }
    }

    const SliderVarients={
        initial:{
            x:0
        },
        animate:{
            x:"-200%",
            transition:{
                repeat:Infinity,
                duration:20,
                repeatType:"mirror"
            }
        },  
    }
  return (
    <div className='hero'>
        <div className="wrapper">
            <motion.div className="textcontainer" variants={textVariants} initial="initial" animate="animate">
                <motion.h2 variants={textVariants}>Abhay Bamboriya</motion.h2>
                <motion.h1 variants={textVariants}> Web Developer and UI designer</motion.h1>
                <motion.div className="buttons" variants={textVariants}>
                    <motion.button variants={textVariants}>See the Latest Work</motion.button>
                    <motion.button variants={textVariants}>Contact Me</motion.button>
                </motion.div>
                <motion.img animate="scrollButton" src="/scroll.png" alt="" srcset="" variants={textVariants}/>
            </motion.div>

        </div>
        <motion.div variants={SliderVarients} className="slidingContainer" initial="initial" animate="animate">
            Writer Content Creator
        </motion.div>
        <img src="/hero.png" alt=""  className='imageContainer'/>
    </div>
  )
}

export default Hero
