import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import { Container, Row, Col } from 'react-bootstrap';

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
      <Container>
        {items.map((item, index) => (
          <Row key={index}>
            <Col>{item.productName}</Col>
            <Col>{item.productType}</Col>
            <Col>{item.price}</Col>
          </Row>
        ))}
      </Container>
    </div>
  );
};

export default Inventory;