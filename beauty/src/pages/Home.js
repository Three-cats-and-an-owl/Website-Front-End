import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Header from '../components/Header'
import pic from '../assets/pictures/stock-homepage.jpg'

const Home = () => {
  return (
    <div style={{ backgroundColor: '#D1C3B8', minHeight: '100vh' }}>
      <Header />
      <Container>
        <Row>
          <Col>
          <div className="picture" style={{ padding: '10px', marginTop: '20px' }}>
            <img src={pic} alt="stock-homepage" style={{ borderRadius: '10px', width: '100%', height: 'auto' }} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home