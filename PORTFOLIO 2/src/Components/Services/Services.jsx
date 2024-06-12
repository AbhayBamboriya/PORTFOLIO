import React, { useRef } from 'react'
import {  motion, useInView } from 'framer-motion'
import './Services.scss'
const Services = () => {
    const variants={
        initial:{
            x:-500,
            opacity:0,
            y:100
        },

        animate:{
            x:0,
            opacity:1,
            y:0,
            transition:{
                duration:1,
                staggerChildren:0.1
            }
        }
    }

    const ref=useRef()
    const isInview=useInView(ref,{margin:"100px"})

  return (
    <motion.div className='Services' variants={variants} initial="initial" ref={ref} animate={"animate"}>
        <motion.div className="textContainer" variants={variants}>
            <motion.p>
                I focus on helping your brand grow<br/> and more forward
            </motion.p>
            <hr/>
        </motion.div>
        <motion.div className="titleContainer" variants={variants}>
            <div className="title">
                {/* <image src="./people.webp"/> */}
                <img src="./people.webp" alt="" srcset="" />
                <h1>
                    <motion.b whileHover={{color:"orange"}}>Unique </motion.b>
                    Ideas
                </h1>
            </div>
            <div className="title">
                <h1>
                    <motion.b whileHover={{color:"orange"}}>For Your </motion.b>
                    Business.
                </h1>
                <button> WHAT WE DO?</button>
            </div>
        </motion.div>
        <motion.div className="listContainer" variants={variants}>
            <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
                <h2>Branding</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ut possimus aliquid explicabo quis labore soluta. Molestias nisi iste perferendis tenetur, repudiandae obcaecati veniam rerum quas inventore voluptatum. Sapiente voluptate illum rerum repellendus vero laborum fugit reprehenderit dicta nam, et unde sunt. Placeat sequi esse iusto fugiat explicabo ut id!</p>
                <button>Go</button>
            </motion.div>
            <motion.div className="box"  whileHover={{background:"lightgray",color:"black"}}>
                <h2>Branding</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ut possimus aliquid explicabo quis labore soluta. Molestias nisi iste perferendis tenetur, repudiandae obcaecati veniam rerum quas inventore voluptatum. Sapiente voluptate illum rerum repellendus vero laborum fugit reprehenderit dicta nam, et unde sunt. Placeat sequi esse iusto fugiat explicabo ut id!</p>
                <button>Go</button>
            </motion.div>
            <motion.div className="box"  whileHover={{background:"lightgray",color:"black"}}>
                <h2>Branding</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ut possimus aliquid explicabo quis labore soluta. Molestias nisi iste perferendis tenetur, repudiandae obcaecati veniam rerum quas inventore voluptatum. Sapiente voluptate illum rerum repellendus vero laborum fugit reprehenderit dicta nam, et unde sunt. Placeat sequi esse iusto fugiat explicabo ut id!</p>
                <button>Go</button>
            </motion.div>
            <motion.div className="box"  whileHover={{background:"lightgray",color:"black"}}>
                <h2>Branding</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ut possimus aliquid explicabo quis labore soluta. Molestias nisi iste perferendis tenetur, repudiandae obcaecati veniam rerum quas inventore voluptatum. Sapiente voluptate illum rerum repellendus vero laborum fugit reprehenderit dicta nam, et unde sunt. Placeat sequi esse iusto fugiat explicabo ut id!</p>
                <button>Go</button>
            </motion.div    >
        </motion.div>
    </motion.div>
  )
}

export default Services
