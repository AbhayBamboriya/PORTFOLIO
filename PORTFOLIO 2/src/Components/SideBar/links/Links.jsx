import React from 'react'

const Links = () => {
  const items=[
    "HomePage",
    "Services",
    "Portfolio",
    "Contact",
    "About",
    "HomePage"
  ]
  return (
    <div className='links'>
      {
        items.map((i)=>(
          <a href={`#${i}`} key={i}>{i}</a>
        ))
      }
    </div>
  )
}

export default Links
