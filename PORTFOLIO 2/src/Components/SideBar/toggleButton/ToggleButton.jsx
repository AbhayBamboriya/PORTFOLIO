import React from 'react'
// import './ToggleButton.scss'
const ToggleButton = ({setOpen}) => {
    // console.log(setOpen);
    console.log('clickd');
  return (
    <button onClick={()=>setOpen(prev=>!prev)}>
     <div>
        <svg width="20" height="1" viewBox="0 0 20 1" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="20" height="1" fill="#1E1E1E"/>
            <line y1="0.5" x2="20" y2="0.5" stroke="white"/>
        </svg>
        <svg width="20" height="1" viewBox="0 0 20 1" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="20" height="1" fill="#1E1E1E"/>
            <line y1="0.5" x2="20" y2="0.5" stroke="white"/>
        </svg>
        <svg width="20" height="1" viewBox="0 0 20 1" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="20" height="1" fill="#1E1E1E"/>
            <line y1="0.5" x2="20" y2="0.5" stroke="white"/>
        </svg>
     </div>



      
    </button>
    
  )
}

export default ToggleButton
