import Header from '../components/Header'
import Footer from '../components/Footer'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Account.css';
import {Link} from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {Stack} from "react-bootstrap";

const AccountCreation = () => {
        return (
            <div className="Account">
                <Header/>
                <div className="split-page">
                <Form className="left-section">
                    <Stack gap={3}>
                        <div className="h2">
                            CREATE ACCOUNT
                        </div>
                        <div className="p">
                            <Form.Text className="button">
                                Have an account?
                                <Link to="/Account"><Button variant="link">Login here.</Button></Link>
                            </Form.Text>
                        </div>
                    </Stack>
                </Form>
                <Form className="right-section">
                    <Row className="login-container">
                        <Form.Text>
                            Please fill in the following fields to create your account:
                        </Form.Text>
                        <Form.Group  controlId="firstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="firstName" placeholder=""/>
                        </Form.Group>
                        <Form.Group  controlId="lasName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="lastName" placeholder=""/>
                        </Form.Group>
                        <Form.Group  controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder=""/>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder=""/>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Row>
                </Form>
                </div>
            </div>
        );

}

export default AccountCreation;