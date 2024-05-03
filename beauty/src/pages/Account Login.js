import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';
import pic from "../assets/pictures/stock-homepage.jpg";
import './Account.css';

const AccountLogin = () => {
    return (
        <Card className="body">
            <Card.Img src={pic} alt="Card image" />
            <Card.ImgOverlay>
                {/*Login form*/}
                <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh'}}>
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