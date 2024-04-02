import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Header from '../components/Header'
import pic from '../assets/pictures/home_page_imageoverlay.jpg'

const Home = () => {
  return (
    <div className="home">
        <Header />
        <div className="picture">
          <img src={pic} alt="stock-homepage" style={{ width: '100%', height: 'auto' }} />
        </div>
        <Container fluid>
          <Row>
            <Col>
            </Col>
          </Row>
        </Container>
      </div>
  )
}

export default Home