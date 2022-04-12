import React from 'react'

import { Carousel } from 'react-bootstrap'
import shop1 from './images/shop1.jpeg'
import shop2 from './images/shop2.jpeg'
import poster2 from './images/poster2.jpg'
import shop4 from './images/shop4.jpeg'

function Corousel() {
  return (
    <div >
            <Carousel className="">
  
  <Carousel.Item>
    <img
      className="d-block w-100 h-full"
      src={shop1}
      alt="Second slide"
    />

    <Carousel.Caption>
      {/* <h3 className="font-bold text-xl text-purple-800 ">Kothari Mobile Zone</h3> */}
      {/* <p>All mobile related facilities are available.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={shop2}
      alt="Third slide"
    />
  </Carousel.Item>


  <Carousel.Item>
    <img
      className="d-block w-100"
      src={poster2}
      alt="Third slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={shop4}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
        </div>
  )
}

export default Corousel