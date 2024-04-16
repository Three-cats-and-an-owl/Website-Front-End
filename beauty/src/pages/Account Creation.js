import Header from '../components/Header'
import Footer from '../components/Footer'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Account.css';
import {Link} from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const AccountCreation = () => {
        return (
            <Form>
                <Row className="login-container">
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

                    <Form.Text className="button">

                        Don't have an account?
                        <Link to="/AccountCreation"><Button variant="link">Create one here.</Button></Link>
                    </Form.Text>
                </Row>
            </Form>
            // <div className="split-page">
            // <Container>
            //     <Row>
            //         <Col>
            //             <div className="left-section">
            //                 <h2>CREATE ACCOUNT</h2>
            //                 <br>
            //                     <Form.Text className="button">Already have an account?
            //                         <Link to: "/AccountLogin"><Button variant="link">Login here.</Button></Link>
            //             </div>
            //         </Col>
            //
            //         <Col>2 of 2</Col>
            //
            //     </Row>
            //
            // </Container>
            // </div>
);

}

export default AccountCreation;