import React from 'react'
import "./Contact.scss"
import { motion } from 'framer-motion'
const Contact = () => {


    // const variants={
    //     // initial:{
    //     //     y:500,
    //     //     opacity:0
    //     // },
    //     // animate:{
    //     //     // y:0,
    //     //     // animate:1,
    //     //     transition:{
    //     //         duration:0.5,
    //     //         // staggerChildren:0.1,

    //     //     }
    //     // }
    // }
    const variants={
        initial:{
            // x:-500,
            opacity:0,
            y:500
        },

        animate:{
            // x:0,
            opacity:1,
            y:0,
            transition:{
                duration:1,
                staggerChildren:0.1
            }
        }
    }
  return (
    <motion.div className='contact' variants={variants} initial="initial" whileInView="animate">
      <motion.div className="textContainer">
            <motion.h1  variants={variants}>
                Let's Work <br/>Together
            </motion.h1>
            <motion.div className="item"  variants={variants}>
                <h2>Mail</h2>
                <span>
                    Bamboriya09@gmail.com
                </span>

            </motion.div>
            <motion.div className="item"  variants={variants}>
                <h2>Address</h2>
                <span>
                    Indore
                </span>
                
            </motion.div>
            <motion.div className="item"  variants={variants}>
                <h2>Phone</h2>
                <span>
                    9770757268
                </span>
                
            </motion.div>
      </motion.div>
      <div className="fromContainer">

        <motion.div className="phone" initial={{opacity:1}} whileInView={{opacity:0}} transition={{delay:3,duration:1}}>
        <svg version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xml:space="preserve" width="247px" height="247px" fill="#000000" transform="matrix(1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <motion.path initial={{pathLength:0}} whileInView={{pathLength:1}} transition={{duration:3}}class="st0" d="M17.6,18.8c-0.4,0.4-0.8,1-1.1,1.5c-1.8-1.4-3.4-3.1-4.8-4.8c0.6-0.3,1.1-0.7,1.5-1.1c2-2,1.3-4.6-0.7-6.6 S8,5,5.9,7.1s-2.3,5.7-0.7,8c2.9,4.4,7.3,8.8,11.7,11.7c2.4,1.6,6,1.3,8-0.7s1.3-4.6-0.7-6.6S19.6,16.7,17.6,18.8z"></motion.path> <motion.path initial={{pathLength:0}} whileInView={{pathLength:1}} transition={{duration:3}} class="st1" d="M27.9,13.9c0-5.5-4.4-9.9-9.9-9.9"></motion.path> <motion.path initial={{pathLength:0}} whileInView={{pathLength:1}} transition={{duration:3}} class="st1" d="M23,13.7c0-2.6-2.2-4.7-4.9-4.7"></motion.path> </g></svg>
        </motion.div>

            <motion.form initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:3,duration:1}}>
                <input type="text" placeholder='Enter Name' />
                <input type="email" required placeholder='Enter Email' />
                <textarea row={8} placeholder='Messaage'></textarea>
                <button>Submit</button>
            </motion.form>
      </div>
    </motion.div>
  )
}

export default Contact
