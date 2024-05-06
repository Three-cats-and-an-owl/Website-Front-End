import Header from '../components/Header'
import Footer from '../components/Footer'

import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import pic from '../assets/images/product_page_image2.jpg';
import './About.css'

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0.5 }}
      transition={{ duration: 2 }}
    >
    <div className="About" style={{ backgroundColor: '#D1C3B8', backgroundImage: `url(${pic})`, backgroundSize: 'cover'}}>
      <Header/>
        <Container>
        <br/><br/><br/><br/><br/>
          <Row>
            <Col>
              <div className="about-title">
                About us
                <hr/>
              </div>
              <div className="information" style={{textAlign: 'left'}}>
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
                of products designed to address specific needs, whether it's hydration, anti-aging, acne control, or brightening.
                <hr/>
              </div>
            </Col>
            <Col>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="about-title">
                Find us at
              </div>
              <iframe
                width="100%"
                height="400"
                style={{border:0}}
                loading="lazy"
                allowFullScreen
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDaLkaCo4YsTQmDgNYABNWE5lXAbxovGrw&q=18111+Nordhoff+St,+Northridge,+CA+91330">
              </iframe>
            </Col>
            <Col>
            </Col>
          </Row>
        </Container>
        <br/><br/><br/><br/><br/>
      <Footer />
    </div>
    </motion.div>
  )
}

export default About