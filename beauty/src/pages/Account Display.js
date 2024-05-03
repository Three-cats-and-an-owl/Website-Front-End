import Header from '../components/Header'
import Footer from '../components/Footer'
<<<<<<< Updated upstream
import {Container, Row, Col, Form, Button, Stack} from 'react-bootstrap'
import {Link} from "react-router-dom";

const AccountOptions = () => (
    <Container>
        <Row className="account-container">
        <Row sm>Account</Row>

        <Row sm>Profile</Row>
        <Row sm>Orders</Row>
        <Row sm>Addresses</Row>
        <Row sm>Payment</Row>
        <Row><Link to="/Home"><Button variant="outline-dark">Sign out</Button></Link></Row>
        </Row>
    </Container>
);
const AccountInfo = () => (
    <Stack gap ={5}>
        <div className="account-container">
        <div>
        <Row>
            <Col sm={4}>Profile</Col>
            <Col sm={8}><Link to="/ProfileEdit"><Button variant="link">Edit</Button></Link></Col>
        </Row>
        <Row sm>First Name</Row>
        <Row sm>Last Name</Row>
        <Row sm>Email</Row>
        <Row sm>Password</Row>
            </div>

        <div>
            <Row>Orders</Row>
            <Row>No orders have been placed.</Row>
        </div>

        <div>
            <Row>Addresses</Row>
            <Row><Link to="/ProfileEdit"><Button variant="outline-dark">+Add New Address</Button></Link></Row>
        </div>

        <div>
            <Row>Payment</Row>
            <Row><Link to="/ProfileEdit"><Button variant="outline-dark">+Add New Payment</Button></Link></Row>
        </div>
=======
import {Container, Row, Col, Form, Button, Stack, ListGroup} from 'react-bootstrap'
import {Link} from "react-router-dom";

const AccountOptions = () => (

        <ListGroup>
            <ListGroup.Item disabled>Account</ListGroup.Item>
            <ListGroup.Item>Profile</ListGroup.Item>
            <ListGroup.Item>Orders</ListGroup.Item>
            <ListGroup.Item>Payment</ListGroup.Item>
            <ListGroup.Item action onClick=<Link to="/Home"><Button variant="outline-dark">Sign out</Button></Link>>
            </ListGroup.Item>
        </ListGroup>

        // <Row className="left-section">
        //     <Row sm>Account</Row>
        //
        //     <Row sm>Profile</Row>
        //     <Row sm>Orders</Row>
        //     <Row sm>Addresses</Row>
        //     <Row sm>Payment</Row>
        //     <Row><Link to="/Home"><Button variant="outline-dark">Sign out</Button></Link></Row>
        // </Row>

);
const AccountInfo = () => (
    <Stack gap ={5}>
        <div className="right-section">
            <div>
                <Row>
                    <Col sm={4}>Profile</Col>
                    <Col sm={8}><Link to="/ProfileEdit"><Button variant="link">Edit</Button></Link></Col>
                </Row>
                <Row sm>First Name</Row>
                <Row sm>Last Name</Row>
                <Row sm>Email</Row>
                <Row sm>Password</Row>
            </div>

            <div>
                <Row>Orders</Row>
                <Row>No orders have been placed.</Row>
            </div>

            <div>
                <Row>Addresses</Row>
                <Row><Link to="/ProfileEdit"><Button variant="outline-dark">+Add New Address</Button></Link></Row>
            </div>

            <div>
                <Row>Payment</Row>
                <Row><Link to="/ProfileEdit"><Button variant="outline-dark">+Add New Payment</Button></Link></Row>
            </div>
>>>>>>> Stashed changes
        </div>
    </Stack>
);


const AccountDisplay = () => {
    return (
        <div className="Account">
            <Header/>
            <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh'}}>
<<<<<<< Updated upstream
            <Stack direction="horizontal" gap={3}>
            <Col>
                <AccountOptions />
            </Col>
            <Col>
                <AccountInfo />
            </Col>
            </Stack>
=======
                <Stack direction="horizontal" gap={3}>
                    <Col>
                        <AccountOptions />
                    </Col>
                    <Col>
                        <AccountInfo />
                    </Col>
                </Stack>
>>>>>>> Stashed changes
            </Container>
            <Footer />
        </div>

    );
}

export default AccountDisplay