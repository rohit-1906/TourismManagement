import React from 'react'
import '../App.css';
import img1 from './Images/small-800px.jpeg'
function Desc() {
  return (
    <div>
        <div className = "bg-col">
        <h5 className = "part5">PLAN YOUR TRIP</h5>
        <h2 className = "part6">Itineraries & tours</h2>
        <h3 className ="part7">A Prayer for Travellers </h3>
        <h4 className = "part8">May the road rise up to meet you. </h4>
        <h4 className = "part8">May the wind be always at your back. </h4>
        <h4 className = "part8">May the sun shine warm upon your face; </h4>
        <h4 className = "part8">The rains fall soft upon your fields.  </h4>
        <h4 className = "part8"> And until we meet again, </h4>
        <h4 className = "part8">May God hold you in the palm of His hand.  </h4>
        </div>
    <div className='xx'>
    <div className = "part9">
      <h5>FEEL MORE</h5>
      <h>EVERY JOURNEY TO A PLACE STARTS WITH A FEELING</h>
    </div>
    <div className="part10">
      <img src= {img1}></img>
    </div>
    </div>
    </div>
  )
}

export default Desc