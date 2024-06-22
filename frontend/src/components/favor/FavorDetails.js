import React from 'react';
import { Card } from 'react-bootstrap';
import '../css/Form.css';

const FavorDetails = ({ favor }) => {
    if (!favor) {
        return null;
    }

    return (
        <Card className="mt-3">
            <Card.Header>Favor Details</Card.Header>
            <Card.Body>
                <Card.Text>
                    <strong>ID:</strong> {favor.id}
                </Card.Text>
                <Card.Text>
                    <strong>Order ID:</strong> {favor.orderId}
                </Card.Text>
                <Card.Text>
                    <strong>Favor Name:</strong> {favor.favorName}
                </Card.Text>
                <Card.Text>
                    <strong>Repairman ID:</strong> {favor.repairmanId}
                </Card.Text>
                <Card.Text>
                    <strong>Price:</strong> {favor.price}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default FavorDetails;
