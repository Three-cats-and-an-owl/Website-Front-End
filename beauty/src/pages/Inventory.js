import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import './Search.css'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Inventory = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const perPage = 50;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(`http://localhost:8080/api/v1/products?limit=${perPage}`);
        setItems(result.data);
      } catch (err) {
        setError(err);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="Inventory">
      <Header/>
      <br></br>
      <Container>
        <Row>
          <Col></Col>
          <Col>
          <br></br>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          {/* Featured section */}
          {items.slice(0, 2).map((item, index) => (
            <Col xs={12} md={6} key={index}>
              <Card>
                <Card.Img variant="top" src={`https://source.unsplash.com/1920x1080/?skincare-products?sig=${index}`} style={{maxHeight: '60vh', maxWidth: '20wh', objectFit: 'cover'}} />
                <Card.Body>
                  <Card.Title>{item.productName}</Card.Title>
                  <Card.Text>
                    Price: {item.price}
                  </Card.Text>
                  <Button variant="secondary" className="cart-button">Add to cart</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <br></br>
        <Row>
          {/* Rest of the items */}
          {items.slice(2).map((item, index) => (
            <Col xs={12} md={4} key={index + 2}>
              <br></br>
              <Card>
                <Card.Img variant="top" src={`https://source.unsplash.com/2800x2000/?skincare-products?sig=${index + 2}`} style={{maxHeight: '60vh', maxWidth: '20wh', objectFit: 'cover'}} />
                <Card.Body>
                  <Card.Title>{item.productName}</Card.Title>
                  <Card.Text>
                    Price: {item.price}
                  </Card.Text>
                  <Button variant="secondary" className="cart-button">Add to cart</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Inventory;