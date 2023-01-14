import React from 'react'
import "./Tours/india/Tour1.css"
import img1 from "./Images/hotel1.webp"
import Navbar from './Navbar'
import Pay from './../pages/Pay'

function Hotel() {
  return (
    <>
    <div class = "part17">
    <Navbar/>
    </div>
<div class="part18">

<div class="content-part-3">
	<div class="content-part-2-h3">Hotels &amp; Restaurants</div>
    <div class="border-bottom"></div>
    
	<div class="content-part-3-left"><img src={img1} width="300" height="180" /></div>
    <div class="content-part-3-right">
    	<div class="content-part-3-right-h4">HOTEL 1 </div>
        <div class="content-part-3-right-p">Enjoy hotel experience</div>
        <div class="content-part-3-right-price">1 Day : <span class="fa fa-inr"></span>15000.00/-</div>
        <div><a href="https://form.jotform.com/223500546382451" class="content-part-3-right-btn">Book Now</a></div>
    </div>
    <div class="content-part-3-left"><img src="https://r1imghtlak.mmtcdn.com/61574d5e8e0411e98c770242ac110004.jpg?&output-quality=75&downsize=583:388&crop=583:388;41,0&output-format=jpg" width="300" height="180"/></div>
    <div class="content-part-3-right">
    	<div class="content-part-3-right-h4">LIVE IN</div>
        <div class="content-part-3-right-p">Enjoy hotel experience</div>
        <div class="content-part-3-right-price">1 Day : <span class="fa fa-inr"></span>14500.00/-</div>
        <div><a href="/Pay" class="content-part-3-right-btn">Book Now</a></div>
    </div>
    <div class="clearfix"></div>
    <div class="content-part-3-left"><img src="https://r1imghtlak.mmtcdn.com/d924f044e4a811e39a86baaf629e9523.jpeg?&output-quality=75&downsize=583:388&output-format=jpg" width="300" height="180"/></div>
    <div class="content-part-3-right">
    	<div class="content-part-3-right-h4">Best Hotels</div>
        <div class="content-part-3-right-p">Enjoy hotel experience.</div>
        <div class="content-part-3-right-price">1 Day : <span class="fa fa-inr"></span>13000.00/-</div>
        <div><a href="/Pay" class="content-part-3-right-btn">Book Now</a></div>
    </div>
    <div class="content-part-3-left"><img src="https://r1imghtlak.mmtcdn.com/0c18386e6e8311e7b07f025f77df004f.jpg?&output-quality=75&downsize=583:388&output-format=jpg" width="300" height="180"/></div>
    <div class="content-part-3-right">
    	<div class="content-part-3-right-h4">Top Hotels </div>
        <div class="content-part-3-right-p">Enjoy hotel experience.</div>
        <div class="content-part-3-right-price">1 Day : <span class="fa fa-inr"></span>12500.00/-</div>
        <div><a href="/Pay" class="content-part-3-right-btn">Book Now</a></div>
    </div>
</div>
    </div>
    </>
  )
}

export default Hotel