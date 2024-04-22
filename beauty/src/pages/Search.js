import { useState } from 'react';
import axios from 'axios';
import { Container, Form, Button, Card, Row, Col } from 'react-bootstrap';

import Header from '../components/Header';

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
        <Button variant="secondary" type="submit">Search</Button>
        </Form>

        <Row>
        {products.map((product, index) => (
            <Col key={index} sm={12} md={6} lg={4} xl={3}>
            <Card className="my-3 p-3 rounded">
                <Card.Body>
                <Card.Title as="div">
                    <strong>{product.productName}</strong>
                </Card.Title>
                <Card.Text as="div">{product.productType}</Card.Text>
                <Card.Text as="div">${product.price}</Card.Text>
                </Card.Body>
            </Card>
            </Col>
        ))}
        </Row>
    </Container>
    </div>
    // <div className="search">
    //     <Header/>
    //     <form onSubmit={handleSubmit}>
    //     <input
    //       type="text"
    //       placeholder="Search for a product"
    //       value={searchTerm}
    //       onChange={handleInputChange}
    //     />
    //     <button type="submit">Search</button>
    //   </form>

    //   {products.map((product, index) => (
    //     <div key={index}>
    //       <h2>{product.productName}</h2>
    //       <p>{product.productType}</p>
    //       <p>{product.price}</p>
    //     </div>
    //   ))}                
    // </div>
  )
}

export default Search