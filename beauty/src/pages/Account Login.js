import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Container, Row } from 'react-bootstrap';
import pic from "../assets/pictures/stock-homepage.jpg";
import './Account.css';

const AccountLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.get('http://localhost:8080/api/v1/accounts', { email, password });
            console.log(response.data);

            if (response.data === null) {
                alert("Invalid email or password. Please try again.");
            } else {
                alert("Login successful!");
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Card className="body">
            <Card.Img src={pic} alt="Card image" />
            <Card.ImgOverlay>
                {/*Login form*/}
                <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh'}}>
                    <Form onSubmit={handleSubmit}>
                        <Row className="login-container">
                            <Form.Group  controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="" value={email} onChange={e => setEmail(e.target.value)} />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="" value={password} onChange={e => setPassword(e.target.value)} />
                            </Form.Group>
                            <Button variant="secondary" type="submit">
                                Submit
                            </Button>
                            
                            <Form.Text className="button">
                                Don't have an account?
                                <Link to="/AccountCreation"><Button variant="link">Create one here.</Button></Link>
                            </Form.Text>
                            <Form.Text className="button">
                                <Link to="/AccountDisplay"><Button variant="link">.</Button></Link>
                            </Form.Text>
                        </Row>
                    </Form>
                </Container>
            </Card.ImgOverlay>
        </Card>
    );
}

export default AccountLogin;