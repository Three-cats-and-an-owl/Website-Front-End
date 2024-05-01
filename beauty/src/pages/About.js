import Header from '../components/Header'
import { Container, Row, Col } from 'react-bootstrap'
import './About.css';

const About = () => {
  return (
    <div className="About">
      <Header/>
      <Container fluid>
        <Row>
        </Row>
        <div className="custom-1">
         <strong>Welcome to A.A.B.B Skin!<br/><br/></strong>
          At A.A.B.B. Skin, we are dedicated to crafting skincare solutions that nourish, protect, and enhance your natural beauty, inside and out. Founded on the principles of innovation, integrity, and inclusivity, A.A.B.B. Skin is committed to delivering high-quality products that cater to diverse skin types and concerns. <br/><br/>
          Our formulations are meticulously curated, blending cutting-edge scientific research with time-tested botanical ingredients to create effective, results-driven skincare solutions. We understand that skincare is not one-size-fits-all, which is why we offer a diverse range of products designed to address specific needs, whether it's hydration, anti-aging, acne control, or brightening. <br/><br/>
          Transparency and sustainability are core values that guide everything we do. We believe in transparency not only in our ingredients but also in our processes, ensuring that our customers can trust the products they use on their skin. Additionally, we are committed to minimizing our environmental footprint by using eco-friendly packaging and sourcing responsibly sourced ingredients whenever possible. <br/>
        </div>
      </Container>
    </div>
  );
}

export default About;
