// import Header from '../components/Header';
// import Footer from '../components/Footer';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import './Account.css';

const AccountLogin = () => {
    return (
        <Form>
            <Form.Group className="login-container" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email"/>
            </Form.Group>
            <Form.Group className="login-container" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password"/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            <Form.Text className="button">
                Don't have an account? <Button variant="link">Create one here.</Button>
            </Form.Text>
        </Form>
    );
}
export default AccountLogin;

