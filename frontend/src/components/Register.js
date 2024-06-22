import React, { useState } from 'react';
import axiosInstance from '../api/interceptor';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Register = ({ onRegister }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }
        try {
            const response = await axiosInstance.post('/register', { username, password });
            if (response.status === 200) {
                onRegister();
                navigate('/login');
            }
        } catch (error) {
            if (error.response && error.response.status === 409) {
                setError('Username already exists. Redirecting to login...');
                setTimeout(() => {
                    navigate('/login');
                }, 2000); // 2 seconds delay before redirecting
            } else {
                console.error('Error registering', error);
                setError('Error registering');
            }
        }
    };

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md="4">
                    <h2>Реєстрація</h2>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <Form onSubmit={handleRegister}>
                        <Form.Group controlId="formBasicUsername">
                            <Form.Label>Логін</Form.Label>
                            <Form.Control
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Введіть логін"
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Пароль</Form.Label>
                            <Form.Control
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Пароль"
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicConfirmPassword">
                            <Form.Label>Підтвердіть пароль</Form.Label>
                            <Form.Control
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                placeholder="Пароль"
                                required
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Register
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Register;
