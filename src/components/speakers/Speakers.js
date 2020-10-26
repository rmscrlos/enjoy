import React from 'react'
import "./Speakers.css"
import Slider from "react-slick"



function Speakers() {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 0,
    cssEase: "linear",
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 376,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          autoplay: true,
          speed: 4000,
          autoplaySpeed: 0,
        }
      }
    ]
  }

  return (
    <div className="speakers" id="speak">
      <h1>Speakers</h1>
        <div className="image__container">
          <Slider {...settings} className="slider">
            <div>
              <img  className="imgs" src="../images/lineup.jpeg" alt=""/>
              </div>
            <div>
              <img  className="imgs" src="../images/raph.jpeg" alt=""/>
            </div>
            <div>
              <img  className="imgs" src="../images/tulio.jpeg" alt=""/>
            </div>
            <div>
              <img  className="imgs" src="../images/ray.jpeg" alt=""/>
            </div>
            <div>
              <img  className="imgs" src="../images/trent.jpeg" alt=""/>
            </div>
            <div>
             <img  className="imgs" src="../images/marco.jpeg" alt=""/>
            </div>
            <div>
             <img  className="imgs" src="../images/dusty.jpeg" alt=""/>
            </div>
          </Slider>
        </div>
    </div>
  )
}

export default Speakers
