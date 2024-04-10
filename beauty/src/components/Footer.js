import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => (
  <Container fluid className="footer">
    <Row>
      <Col className="text-center py-3" style={{backgroundColor: "#E4DDD5"}}>
        Copyright © 2024 AABB Beauty
      </Col>
    </Row>
  </Container>
);

export default Footer;