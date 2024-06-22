import React, { useState, useEffect } from 'react';
import { getUserCars, getUserOrders } from '../api/profileService';
import { Card, ListGroup, Container, Row, Col } from 'react-bootstrap';

const ProfilePage = () => {
    const [cars, setCars] = useState([]);
    const [orders, setOrders] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchUserCars();
        fetchUserOrders();
    }, []);

    const fetchUserCars = async () => {
        try {
            const data = await getUserCars();
            if (data) {
                setCars(data);
            } else {
                setError('Failed to fetch cars');
            }
        } catch (error) {
            console.error('Error fetching cars:', error);
            setError(error.message || 'An error occurred while fetching cars');
        }
    };

    const fetchUserOrders = async () => {
        try {
            const data = await getUserOrders();
            if (data) {
                setOrders(data);
            } else {
                setError('Failed to fetch orders');
            }
        } catch (error) {
            console.error('Error fetching orders:', error);
            setError(error.message || 'An error occurred while fetching orders');
        }
    };

    return (
        <Container>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <Row>
                <Col md={6}>
                    <Card>
                        <Card.Header>Мої Автомобілі</Card.Header>
                        <ListGroup variant="flush">
                            {cars.map(car => (
                                <ListGroup.Item key={car.id}>
                                    {car.brand} {car.model} - {car.year}
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Header>Мої Замовлення</Card.Header>
                        <ListGroup variant="flush">
                            {orders.map(order => (
                                <ListGroup.Item key={order.id}>
                                    Замовлення {order.id} - {order.status} - {order.finalPrice}
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default ProfilePage;
