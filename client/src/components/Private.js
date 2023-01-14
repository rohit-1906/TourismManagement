import React from 'react'
import { Link } from 'react-router-dom'
import "../App.css"
import img1 from "./Images/download (1).jpg"
import Navbar from './Navbar'
import Slider from './Slider'
function Private() {
  return (
    <div>
      <div >
        
        <Navbar name = 'LOGOUT'/>
       <Slider />
       <div>
      <center>
        <nav class = "part12">
          <ul>
            <li ><a id = "log" href= "/Tour1">India</a></li>
            <li><Link id = "log" to= "/aus">Australia</Link></li>
            <li><a id = "log" href= "/Tour1">UK</a></li>
            <li><a id = "log" href= "/Tour1">USA</a></li>
            <li><a id = "log" href= "/Tour1">Dubai</a></li>
          </ul>
          </nav>
          </center> 
          </div>
        </div>
  </div>
    
  )
}

export default Private