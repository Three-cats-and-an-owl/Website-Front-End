import { useContext, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Container, Row, Button, Form} from 'react-bootstrap';
import { UserContext } from '../components/UserContext';
import Profile from './Profile';
import './Account.css';

import pic from "../assets/pictures/stock-homepage.jpg";

const AccountLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setUser } = useContext(UserContext);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/api/v1/accounts', { email, password });
            console.log(response.data);

            if (response.data === null) {
                alert("Invalid email or password. Please try again.");
            } else {
                console.log("Login successful!");
                setUser(response.data);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Container className="body" style={{ backgroundImage: `url(${pic})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh', position: 'relative', padding: '0', margin: '0' }}>
            <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh', position: 'absolute', top: '10vh', width: '100%' }}>
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
                            <Link to="/AccountCreation"><Button variant="link" className="custom-2">Create one here.</Button></Link>
                        </Form.Text>
                    </Row>
                </Form>
            </Container>
        </Container>
    );
}

export default AccountLogin;