import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';

import './Account.css';

const AccountLogin = () => {
    return (
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
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>

                    <Form.Text className="button">

                        Don't have an account?
                        <Link to="/AccountCreation"><Button variant="link">Create one here.</Button></Link>
                    </Form.Text>
                </Row>
            </Form>
    );
}
export default AccountLogin;

