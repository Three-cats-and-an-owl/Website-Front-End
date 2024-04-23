import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import pic from '../assets/pictures/home_page_imageoverlay.jpg'

import { Container, Row, Col } from 'react-bootstrap';

import './Account.css';

const AccountLogin = () => {
    return (

        // Login form
        <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh',
            backgroundImage: "url('https://domf5oio6qrcr.cloudfront.net/medialibrary/7544/724cf5e2-e067-445d-9665-2eb9a0a12c86.jpg')"
            }}>
            <Form>
                <Row className="login-container">
                    <Form.Group  controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder=""/>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder=""/>
                    </Form.Group>
                    <Button variant="secondary" type="submit">
                        Submit
                    </Button>

                    {/*Button that redirects to the Account Creation page*/}
                    <Form.Text className="button">
                        Don't have an account?
                        <Link to="/AccountCreation"><Button variant="link">Create one here.</Button></Link>
                    </Form.Text>
                </Row>
            </Form>
        </Container>
    );
}
export default AccountLogin;


