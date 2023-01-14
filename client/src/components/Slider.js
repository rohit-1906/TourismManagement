import React from 'react'
import img1 from './Images/large-1920px.jpeg'
// import img2 from './Images/mountains-4671122__340.jpg'
// import img3 from  './Images/regensburg-3023439__340.jpg'
import  '../App.css'
function Slider() {
  return (

    <div><div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
    <div >
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div class = "position-relative">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img class="d-block w-100" src={img1} alt="First slide"  />
      </div>
      <div class="carousel-item ">
        <img class="d-block w-100" src='https://visitqatar.com/content/dam/visitqatar/campaigns/feel-more/Kayak-min.jpg/jcr:content/renditions/large-1920px.jpeg' alt="Second slide" />
      </div>
      <div class="carousel-item">

        <img class="d-block w-100" src='https://visitqatar.com/content/dam/visitqatar/campaigns/feel-more/family-camel.jpg/jcr:content/renditions/large-1920px.jpeg' alt="Third slide" />
      </div>
    </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
      {/* <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span> */}
    </a>
    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
      {/* <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span> */}
    </a>
    </div>
  </div></div>
  )
}

export default Slider