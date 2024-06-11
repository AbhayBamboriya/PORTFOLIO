import React from 'react'
import "./Navbar.scss"
function Navbar() {
  return (
    <div className='navbar'>
        <div className="wrapper">
            <span>
                Abhay Bamboriya
            </span>
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
