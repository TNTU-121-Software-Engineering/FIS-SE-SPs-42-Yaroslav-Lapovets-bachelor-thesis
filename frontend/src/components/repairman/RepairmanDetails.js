import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import '../css/Form.css';

const RepairmanDetails = ({ repairman }) => {
    if (!repairman) {
        return null;
    }

    return (
        <Card className="mt-3">
            <Card.Header>Repairman Details</Card.Header>
            <Card.Body>
                <Card.Text><strong>ID:</strong> {repairman.id}</Card.Text>
                <Card.Text><strong>First Name:</strong> {repairman.firstName}</Card.Text>
                <Card.Text><strong>Last Name:</strong> {repairman.lastName}</Card.Text>
                <Card.Text><strong>Phone:</strong> {repairman.phone}</Card.Text>
                <Card.Text><strong>Email:</strong> {repairman.email}</Card.Text>
            </Card.Body>
            <ListGroup variant="flush">
                <ListGroup.Item>
                    <h5>Completed Orders</h5>
                </ListGroup.Item>
                {repairman.completedOrders.map((order) => (
                    <ListGroup.Item key={order.id}>
                        Order ID: {order.id} - Total Price: {order.totalPrice}
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </Card>
    );
};

export default RepairmanDetails;
