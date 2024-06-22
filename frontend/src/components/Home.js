import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Home = ({ onLogout }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        onLogout();
        navigate('/login');
    };

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md="8" className="text-center">
                    <h2>Welcome to the Auto Service Home Page</h2>
                    <Button variant="primary" onClick={handleLogout}>
                        Logout
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;
