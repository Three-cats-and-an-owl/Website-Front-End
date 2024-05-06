import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => (
  <Container fluid className="footer" style={{position: 'fixed', bottom: '0', width: '100%'}}>
    <Row>
      <Col className="text-center py-3" style={{backgroundColor: "#E4DDD5", opacity: '80%'}}>
        Copyright © 2024 AABB Beauty
      </Col>
    </Row>
  </Container>
);

export default Footer;