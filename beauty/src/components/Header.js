import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Container, Row, Col } from 'react-bootstrap'
import ProgressBar from 'react-bootstrap/ProgressBar';
import { useState } from 'react';

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar expand="lg" style={{ backgroundColor: '#E4DDD5', height: '9em' }}>
      <div className="d-flex justify-content-between align-items-center w-50 mx-auto">
        <Nav.Link as={Link} to="/" className="text-center" style={{ fontFamily: 'Baskerville' }}>
          <Button variant="outline-tertiary" style={{ fontFamily: 'Baskerville', fontSize: '1.5em' }}>HOME</Button>
        </Nav.Link>
        <Nav.Link as={Link} to="/About" className="text-center" style={{ fontFamily: 'Baskerville' }}>
          <Button variant="outline-tertiary" style={{ fontFamily: 'Baskerville', fontSize: '1.5em' }}>ABOUT</Button>
        </Nav.Link>
        <Nav.Link as={Link} to="/Inventory" className="text-center" style={{ fontFamily: 'Baskerville' }}>
          <Button variant="outline-tertiary" style={{ fontFamily: 'Baskerville', fontSize: '1.5em' }}>SHOP</Button>
        </Nav.Link>
        <Navbar.Brand as={Link} to="/" className="text-center" style={{ fontFamily: 'Baskerville', fontSize: '2.5em' }}> A.A.B.B Skin   </Navbar.Brand>
        <Nav.Link as={Link} to="/Search" className="text-center" style={{ fontFamily: 'Baskerville' }}>
          <Button variant="outline-tertiary" style={{ fontFamily: 'Baskerville', fontSize: '1.5em' }}>SEARCH</Button>
        </Nav.Link>
        <Nav.Link as={Link} to="/Account"className="text-center" style={{ fontFamily: 'Baskerville' }}>
          <Button variant="outline-tertiary" style={{ fontFamily: 'Baskerville', fontSize: '1.5em' }}>ACCOUNT</Button>
        </Nav.Link>
        <div className="text-center" style={{ fontFamily: 'Baskerville' }}>
  <Button variant="outline-tertiary" style={{ fontFamily: 'Baskerville', fontSize: '1.5em' }} onClick={handleShow}>CART</Button>
</div>
      </div>
      </Navbar>

      <Offcanvas show={show} onHide={handleClose}>
  <Offcanvas.Header closeButton>
    <Offcanvas.Title style={{fontSize: '180%', fontFamily: 'Baskerville'}}>Cart</Offcanvas.Title>
  </Offcanvas.Header>
  <Offcanvas.Body>
    <Container>
      <ProgressBar variant="secondary" now={33} />
    </Container>
    <br></br>
    <Row>
      <Col style={{ padding: '0px 0px 0px 4%', fontFamily: 'Baskerville'}}>There are 0 items in your cart.</Col>
    </Row>
    <hr></hr>
    <br></br>
    <br></br>
    <Row>
    <Col style={{ padding: '0px 0px 0px 4%', fontFamily: 'Baskerville'}}>Merchandise Subtotal</Col>
    <Col align="right">$0.00</Col>
    </Row>
    <br></br>
    <Row>
      <Col style={{ padding: '0px 0px 0px 4%', fontFamily: 'Baskerville'}}>Shipping & Handling</Col>
      <Col align="right">$0.00</Col>
    </Row>
    <br></br>
    <Row>
      <Col style={{ padding: '0px 0px 0px 4%', fontFamily: 'Baskerville'}}>Sales Tax</Col>
      <Col align="right">$0.00</Col>
    </Row>
    <br></br>
    <hr></hr>
    <Row>
      <Col style={{ padding: '0px 0px 0px 4%', fontFamily: 'Baskerville'}}><strong>Estimated Total</strong></Col>
      <Col align="right">$0.00</Col>
    </Row>
    <br></br>
    <Button variant="dark" size="md">
      Checkout
    </Button>
  </Offcanvas.Body>
</Offcanvas>
    </>
  )
}

export default Header
