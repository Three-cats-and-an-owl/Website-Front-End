import Header from '../components/Header'
import { Col, Container, Row } from 'react-bootstrap'
import ProgressBar from 'react-bootstrap/ProgressBar';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

import './Cart.css'

  function SideTab() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <Header/>
      <Button variant="secondary" onClick={handleShow}>
        Cart
      </Button>

      <Offcanvas className="txt" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Container>
                  <ProgressBar variant ="color" now={33} />
        </Container>
                <br></br>
                <Row><h6>There are <strong>0</strong> items in your cart.</h6></Row>
                <hr></hr>
                <br></br>
                <Row>
                  <Col>Merchandise Subtotal</Col>
                  <Col align="right">$0.00</Col>
                </Row>
                <br></br>
                <Row>
                  <Col>Shipping & Handling</Col>
                  <Col align="right">$0.00</Col>
                </Row> 
                <br></br>
                <Row>
                  <Col>Sales Tax</Col>
                  <Col align="right">$0.00</Col>
                </Row>
                <br></br>
                <hr></hr>
                <Row>
                  <Col><strong>Estimated Total</strong></Col>
                  <Col align="right"><strong>$0.00</strong></Col>
                </Row>
                <br></br>
                <Button variant="dark" size="md">
                  Checkout
                </Button>
        </Offcanvas.Body>

      </Offcanvas>
    </>
  );
}

export default SideTab;
