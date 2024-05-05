import Header from '../components/Header'
import Footer from '../components/Footer'

import { Container, Row, Col } from 'react-bootstrap';
import pic from '../assets/images/product_page_image2.jpg';
import './About.css'

const About = () => {
  return (
    <div className="About" style={{ backgroundColor: '#D1C3B8', backgroundImage: `url(${pic})`, backgroundSize: 'cover'}}>
        <Header/>
        <br></br><br></br><br></br><br></br>
        <Container>
          <Row>
            <div className="about-title">
              About Us
            </div>
            <Col>
            <div className="information">
              At AABB Skin, we are dedicated to crafting skincare solutions that nourish, protect, and 
              enhance your natural beauty, inside and out. 
              <br></br>
              <br></br>
              Founded on the principles of innovation, integrity, and inclusivity, AABB Skin is committed to
              delivering high quality products that cater to diverse skin types and concerns. Our formulations
              are meticulously curated, blending cutting-edge scientific research with time-tested botanical
              ingredients to create effective, results-driven skincare solutions.

              <br></br>
              <br></br>
              We understand that skincare is not a one size fits all, which is why we offer a diverse range
              of productsdesigned to address specific needs, whether it's hydration, anti-aging, acne control, or brightening.
            </div>
            </Col>
            <Col></Col>
            <Col></Col>
          </Row>
        </Container>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <Footer />
    </div>
  )
}

export default About