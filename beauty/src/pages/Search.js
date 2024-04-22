import { useState } from 'react';
import axios from 'axios';
import { Container, Form, Button, Card, Row, Col } from 'react-bootstrap';

import Header from '../components/Header';
import './Search.css';

const Search = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [products, setProducts] = useState([]);

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.get(`http://localhost:8080/api/v1/products/${searchTerm}`);
            setProducts(response.data);
        } catch (error) {
            console.error(`Sorry! We don't have ${searchTerm} in stock.`);
        }
    };

  return (
    <div className="search">
    <Header/>
    <br></br><br></br>
    <Container>
        <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicSearch">
            <Form.Control 
            type="text" 
            placeholder="Search for a product" 
            value={searchTerm} 
            onChange={handleInputChange} 
            />
        </Form.Group>
        <br></br>
        <Button variant="secondary" className=" btn-lg search-button" style={{backgroundColor: "#e4ddd5", color: "black", fontFamily: "Baskerville"}}type="submit">Search</Button>
        </Form>

        <Row>
        {products.map((product, index) => (
            <Col xs={12} md={4} key={index}>
            <Card>
                <Card.Img variant="top" src={`https://source.unsplash.com/900x1600/?${searchTerm}?sig=${index}`} style={{maxHeight: '60vh', maxWidth: '20wh', objectFit: 'cover'}} />
                <Card.Body>
                <Card.Title as="div">
                    <strong>{product.productName}</strong>
                </Card.Title>
                {/* <Card.Text as="div">{product.productType}</Card.Text> */}
                <Card.Text as="div">${product.price}</Card.Text>
                </Card.Body>
            </Card>
            </Col>
        ))}
        </Row>
    </Container>
    </div>
  )
}

export default Search;