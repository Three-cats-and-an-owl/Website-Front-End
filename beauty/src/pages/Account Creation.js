import Header from '../components/Header'
import Footer from '../components/Footer'
import { Container, Row, Col, Stack, Form, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Account.css';

const LoginForm = () => (
    <Form className="left-section">
        <Stack gap={3}>
<<<<<<< Updated upstream
            <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh'}}>
                <div className="custom-1 h2">CREATE ACCOUNT</div>
                <div className="custom-1 p">
                    <Form.Text className="button">
                        Already have an account?
                        <span style={{ marginLeft: '10px'}}>
            {/*<Button style={{fontFamily: 'Baskerville', backgroundColor: 'black'}} as={Link} to='/Account'>Login</Button>*/}
                            <Link to="/Account"><Button variant="link">Login.</Button></Link>
          </span>
=======
            <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
                <div className="custom-1">CREATE ACCOUNT</div>
                <div className="custom-1">
                    <Form.Text className="button">
                        Already have an account?
                        <span style={{ marginLeft: '10px'}}>
                        {/*<Button style={{fontFamily: 'Baskerville', backgroundColor: 'black'}} as={Link} to='/Account'>Login</Button>*/}
                            <Link to="/Account"><Button variant="link">Login.</Button></Link>
                        </span>
>>>>>>> Stashed changes
                    </Form.Text>
                </div>
            </Container>
        </Stack>
    </Form>
);

const RegistrationForm = () => (
    <Form className="right-section d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <Row className="login-container">
<<<<<<< Updated upstream
            <Form.Text className="custom-1">Please fill in the following fields to create your account:</Form.Text>
            <Form.Group controlId="firstName">
                <Form.Label className="custom-1">First Name</Form.Label>
                <Form.Control type="text" placeholder=""/>
            </Form.Group>
            <Form.Group controlId="lastName">
                <Form.Label className="custom-1">Last Name</Form.Label>
                <Form.Control type="text" placeholder=""/>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label className="custom-1">Email address</Form.Label>
                <Form.Control type="email" placeholder=""/>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label className="custom-1">Password</Form.Label>
=======
            <Form.Text>Please fill in the following fields to create your account:</Form.Text>
            <Form.Group controlId="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder=""/>
            </Form.Group>
            <Form.Group controlId="lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder=""/>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder=""/>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
>>>>>>> Stashed changes
                <Form.Control type="password" placeholder=""/>
            </Form.Group>
            <Button style={{fontFamily: 'Baskerville'}} variant="dark" type="submit">Submit</Button>
        </Row>
    </Form>
);

const AccountCreation = () => (
    <div className="Account">
        <Header/>
        <div className="split-page">
            <LoginForm />
            <RegistrationForm />
        </div>
        <Footer />
    </div>
);

export default AccountCreation;