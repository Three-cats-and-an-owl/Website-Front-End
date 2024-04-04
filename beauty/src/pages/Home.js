import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
import Header from '../components/Header'
import pic from '../assets/pictures/home_page_imageoverlay.jpg'
import pic2 from '../assets/pictures/stock-homepage.jpg'
import pic3 from '../assets/pictures/coconut.jpg'

import './Home.css'

const Home = () => {
  return (
    <div className="home">
        <Header />
        <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={pic}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <div className="t1">Skincare at its finest</div>
                  <div className="t2">For all skin types and situations, we got you covered.</div>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={pic2}
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <div className="t1">Natural, genuine, and real.</div>
                  <div className="t2">Made with only the best materials and ingredients vetted by top researchers and mother nature.</div>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 carousel"
                  src={pic3}
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <div className="t1">Third slide label</div>
                  <div className="t2">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</div>
                </Carousel.Caption>
              </Carousel.Item>x``
            </Carousel>
      </div>
  )
}

export default Home