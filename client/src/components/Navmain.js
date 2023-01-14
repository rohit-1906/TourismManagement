import React from 'react'
import Navbar from './Navbar'
import Slider from './Slider'
import Desc from './Desc'
function Navmain() {
  return (
    <div>
    <div className='bg-img'>
         <Navbar name = "LOGOUT"/>
         <Slider /> 
         <Desc />
         </div>
    </div>
  )
}

export default Navmain