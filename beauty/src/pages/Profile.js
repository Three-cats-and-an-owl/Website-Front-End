// import React, { useContext } from 'react';
// import { UserContext } from '../components/UserContext';
// import { Container, Row, Col } from 'react-bootstrap';

// import Header from '../components/Header';

// const Profile = () => {
//   const { user } = useContext(UserContext);

//   if (!user) {
//     return <p>Please log in to view your profile.</p>;
//   }

//   return (
//     <div className="Profile">
//       <Header />
//         <Container>
//           <Row>
//             <Col>
//               <h2>Your Profile</h2>
//               <p><strong>Name:</strong> {user.name}</p>
//               <p><strong>Email:</strong> {user.email}</p>
//               <p><strong>ID:</strong> {user.id}</p>
//             </Col>
//           </Row>
//         </Container>
//     </div>
//   );
// };

// export default Profile;

import React, { useContext } from 'react';
import { UserContext } from '../components/UserContext';
import { Container, Row, Col, ListGroup, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Profile = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/v1/accounts/getByEmail/${user.email}`);
      const data = response.data;

      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  // fetchData();

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8080/api/v1/accounts/${user.id}`);
      setUser(null); // remove user from UserContext
      navigate('/AccountCreation');
    } catch (error) {
      console.error(error);
    }
  };

  const handleSignOut = () => {
    setUser(null); // remove user from UserContext
    navigate('/Account');
  };

  const handleEdit = async () => {
    try {
      await axios.post(`http://localhost:8080/api/v1/accounts/${user.id}`);
    } catch (error) {
      console.error(error);
    }
  };

  if (!user) {
    return (
    <div>
      <Header />
        <Container>
          <div style={{fontFamily: 'Baskerville', fontSize: '4rem', textAlign: 'center', marginTop: '40%'
            , borderColor: 'black', borderRadius: '10px', padding: '20px', backgroundColor: '#E4DDD575', color: 'black'
          }}> Please log in to view your profile. </div>
        </Container>
      <Footer />
    </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0.5 }}
      transition={{ duration: 2 }}
    >
    <div className="Profile">
      <Header />
        <Container>
          <Row>
            <Col xs={4}>
              <br/><br/><br/>
              <h2>Quick Links</h2>
              <ListGroup className="beautify">
                <ListGroup.Item action onClick={handleSignOut}>Sign Out</ListGroup.Item>
                <ListGroup.Item action onClick={handleDelete}>Delete Account</ListGroup.Item>
                <ListGroup.Item action onClick={handleEdit}>Edit Information</ListGroup.Item>
              </ListGroup>

            </Col>
            <Col xs={8} style={{justifyContent: 'left'}}>
              <br/><br/><br/>
              <hr />
              <h2 style={{textAlign: 'left'}}>Profile</h2>
              <p style={{textAlign: 'left', fontSize: '1.2rem'}}><strong>Name:</strong>{user.firstName}{" "}{user.lastName}</p>
              <p style={{textAlign: 'left', fontSize: '1.2rem'}}><strong>Email:</strong> {user.email}</p>
              <p style={{textAlign: 'left', fontSize: '1.2rem'}}><strong>Phone:</strong> {user.phone}</p>
              <p style={{textAlign: 'left', fontSize: '1.2rem'}}><strong>Birthdate:</strong> {user.birthday}</p>
              <p style={{textAlign: 'left', fontSize: '1.2rem'}}><strong>ID:</strong> {user.id}</p>

              <hr />
              <h2 style={{textAlign: 'left'}}>Orders</h2>
              <p style={{textAlign: 'left', fontSize: '1.2rem'}}>No Orders. Order history will be displayed here.</p>

              <hr/>
              <h2 style={{textAlign: 'left'}}>Addresses</h2>

              {user.address ? <p style={{textAlign: 'left', fontSize: '1.2rem'}}><li>{user.address}</li></p> : <p style={{textAlign: 'left', fontSize: '1.2rem'}}>No Addresses. Address information will be displayed here.</p>}
              <Button variant='light' style={{backgroundColor: '#E4DDD580', borderRadius: '.7rem'}}>Add new address</Button>

              <hr/>
              <h2 style={{textAlign: 'left'}}>Payments</h2>
              <p style={{textAlign: 'left', fontSize: '1.2rem'}}>No Payments. Payment information will be displayed here.</p>
              <Button variant='light' style={{backgroundColor: '#E4DDD580', borderRadius: '.7rem'}}>Add new payment method</Button>
            </Col>
          </Row>
        </Container>
        <br/><br/><br/><br/><br/>
        <Footer />
    </div>
    </motion.div>
  );
};

export default Profile;