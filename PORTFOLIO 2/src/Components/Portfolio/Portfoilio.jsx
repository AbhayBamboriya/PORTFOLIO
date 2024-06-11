import React from 'react'
import "./portfolio.scss"
import { useScroll, useSpring ,motion, useTransform} from 'framer-motion'
import { useRef } from 'react'


const items=[
    {
        id:1,
        title:"React",
        img:"https://images.pexels.com/photos/13172901/pexels-photo-13172901.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est quaerat eligendi veritatis inventore, laboriosam temporibus maxime molestiae. Aut numquam ullam in laborum, deserunt quis repudiandae voluptatem optio et reprehenderit temporibus?",

        
    },
    {
        id:2,
        title:"Node Js",
        img:"https://images.pexels.com/photos/25792980/pexels-photo-25792980/free-photo-of-a-close-up-of-a-pyramid-with-a-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",

        description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est quaerat eligendi veritatis inventore, laboriosam temporibus maxime molestiae. Aut numquam ullam in laborum, deserunt quis repudiandae voluptatem optio et reprehenderit temporibus?",
        
        
    },
    {
        id:3,
        title:"Mongo",
        img:"https://images.pexels.com/photos/18925511/pexels-photo-18925511/free-photo-of-petit-minou-lighthouse-in-evening.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",

        description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est quaerat eligendi veritatis inventore, laboriosam temporibus maxime molestiae. Aut numquam ullam in laborum, deserunt quis repudiandae voluptatem optio et reprehenderit temporibus?",
        
        
    },
    {
        id:4,
        title:"SQL",
        img:"https://images.pexels.com/photos/18664364/pexels-photo-18664364/free-photo-of-rock-formation-on-sea-shore-in-greece.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",

        description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est quaerat eligendi veritatis inventore, laboriosam temporibus maxime molestiae. Aut numquam ullam in laborum, deserunt quis repudiandae voluptatem optio et reprehenderit temporibus?",
        
        
    }
]


const Single=({items})=>{
    const ref=useRef()
    const {scrollYProgress}=useScroll({target:ref , offset:["start start","end start"]})
    const y=useTransform(scrollYProgress,[0,1],["0%","-300%"])
    return(
        <section ref={ref}>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer">
                         <img src={items.img} alt="" srcset="" />
                    </div>
                    
                    <motion.div className="textContainer" style={{y:y}}>
                        <h2 > {items.title}   </h2>
                        <p>{items.description}</p>
                        <button>See Demo</button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
const Portfoilio = () => {
    const ref=useRef()
    const {scrollYProgress}=useScroll({target:ref,offset:["end end","start start"]})
    const scaleX=useSpring(scrollYProgress,{
        stiffness:100,
        damping:30,
    })
  return (
    <div className='portfolio' ref={ref}>
        <div className="progress">
            <h1>Featured Works</h1>
            <motion.div style={{scaleX:scaleX}} className="progressBar">

            </motion.div>
        </div>
        {
            items.map((item)=>(
                <Single items={item} key={item.id}/>
            ))
        }
    </div>
  )
}

export default Portfoilio
