import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import { Container, Row, Col } from 'react-bootstrap';

const Inventory = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('http://localhost:8080/api/v1/products');
      setItems(result.data);
    };

    fetchData();
  }, []);

  return (
    <div className="Inventory">
      <Header/>
      <Container>
        {items.map((item, index) => (
          <Row key={index}>
            <Col>{item.product_name}</Col>
            <Col>{item.product_type}</Col>
            <Col>{item.price}</Col>
          </Row>
        ))}
      </Container>
    </div>
  );
};

export default Inventory;