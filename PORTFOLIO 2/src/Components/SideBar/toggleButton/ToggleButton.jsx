import React from 'react'

const ToggleButton = ({setOpen}) => {
    // console.log(setOpen);
    console.log('clickd');
  return (
    <button onClick={()=>setOpen(prev=>!prev)}>Toggle Button
    {/* {console.log(setOpen)} */}
    </button>
    
  )
}

export default ToggleButton
