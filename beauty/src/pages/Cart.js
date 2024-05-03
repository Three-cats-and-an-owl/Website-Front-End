import Header from '../components/Header'
import { Container, Row } from 'react-bootstrap'
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

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Container>
                  <ProgressBar variant ="color" now={33} />
        </Container>
                <Row>There are 0 items in your cart.</Row>
                <Row>Merchandise Subtotal</Row>
                <Row>Shipping & Handling</Row> 
                <Row>Sales Tax</Row>
                <Row><strong>Estimated Total</strong></Row>
                <Button variant="dark" size="md">
                  Checkout
                </Button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default SideTab;
