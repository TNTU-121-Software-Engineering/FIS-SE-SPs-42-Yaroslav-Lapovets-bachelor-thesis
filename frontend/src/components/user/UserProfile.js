import React from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import './UserProfile.css';

const UserProfile = ({ user, onEdit }) => {
    return (
        <Container className="user-profile-container">
            <Row className="justify-content-md-center">
                <Col md="6">
                    <Card className="user-profile-card">
                        <Card.Header as="h5">User Profile</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <strong>First Name:</strong> {user.firstName}
                            </Card.Text>
                            <Card.Text>
                                <strong>Last Name:</strong> {user.lastName}
                            </Card.Text>
                            <Card.Text>
                                <strong>Email:</strong> {user.email}
                            </Card.Text>
                            <Card.Text>
                                <strong>Phone:</strong> {user.phone}
                            </Card.Text>
                            <Button variant="primary" onClick={onEdit}>
                                Edit Profile
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default UserProfile;
