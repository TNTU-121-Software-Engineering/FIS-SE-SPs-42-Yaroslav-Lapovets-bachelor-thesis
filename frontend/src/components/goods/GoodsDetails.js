import React from 'react';
import { Card } from 'react-bootstrap';
import '../css/Form.css';

const GoodsDetails = ({ goods }) => {
    if (!goods) {
        return null;
    }

    return (
        <Card className="mt-3">
            <Card.Header>Goods Details</Card.Header>
            <Card.Body>
                <Card.Text><strong>ID:</strong> {goods.id}</Card.Text>
                <Card.Text><strong>OrderId:</strong> {goods.orderId}</Card.Text>
                <Card.Text><strong>Name:</strong> {goods.name}</Card.Text>
                <Card.Text><strong>Price:</strong> {goods.price}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default GoodsDetails;
