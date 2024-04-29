import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Inventory = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios('http://localhost:8080/api/v1/products');
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
          {items.map((item, index) => (
            <Col xs={12} md={4} key={index}>
              <br></br>
              <Card>
                <Card.Img variant="top" src={`https://source.unsplash.com/2800x2000/?skincare-products?sig=${index}`} style={{maxHeight: '60vh', maxWidth: '20wh', objectFit: 'cover'}} />
                <Card.Body>
                  <Card.Title>{item.productName}</Card.Title>
                  <Card.Text>
                    {/* Type: {item.productType}<br/> */}
                    Price: {item.price}
                  </Card.Text>
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