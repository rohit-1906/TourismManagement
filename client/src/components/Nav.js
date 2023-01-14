import React from 'react';
import '../App.css';
import Slider from './Slider';
import Navbar from './Navbar';
import Desc from './Desc';
function Nav() {
  return (
    <>
    
    <div>
    <div className='bg-img'>
         <Navbar name = "LOGIN"/>
         <Slider /> 
         <Desc />
         </div>
    </div>

    </> 
  );
}

export default Nav;