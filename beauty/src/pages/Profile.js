import React, { useContext } from 'react';
import { UserContext } from '../components/UserContext';
import { Container, Row, Col } from 'react-bootstrap';

const Profile = () => {
  const { user } = useContext(UserContext);

  if (!user) {
    return <p>Please log in to view your profile.</p>;
  }

  return (
    <Container>
      <Row>
        <Col>
          <h2>Your Profile</h2>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>ID:</strong> {user.id}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;