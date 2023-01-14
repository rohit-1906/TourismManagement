import React from 'react'
import '../App.css';
import img1 from './Images/logo.png'
function Navbar(props) {
  return (
    <div>
        <nav className= 'part'> 
            <ul>
                {/* <li className='logo'><img src={img1}></img></li> */}
                <li><a id = "log" href = "/">HOME</a></li>
                <li><a id = "log" href = "/Private">HOLIDAY PACKS</a></li>
                <li><a id = "log" href = "/Hotel">HOTELS</a></li>
                <li> <a id = "log" href = "/Contact">CONTACT</a></li>
                <li className = 'part1'><a id = "log" href="/Login" >{props.name}</a></li>
            </ul>   
        </nav>
    </div>
  )
}

export default Navbar