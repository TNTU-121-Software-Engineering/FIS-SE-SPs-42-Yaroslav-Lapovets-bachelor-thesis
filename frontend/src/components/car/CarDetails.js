import React from 'react';
import { Card } from 'react-bootstrap';
import '../css/Form.css';

const CarDetails = ({ car }) => {
    if (!car) {
        return null; // Or render a placeholder/loading state
    }

    return (
        <Card className="mt-3">
            <Card.Header>Car Details</Card.Header>
            <Card.Body>
                <Card.Text>
                    <strong>ID:</strong> {car.id}
                </Card.Text>
                <Card.Text>
                    <strong>Brand:</strong> {car.brand}
                </Card.Text>
                <Card.Text>
                    <strong>Model:</strong> {car.model}
                </Card.Text>
                <Card.Text>
                    <strong>Owner ID:</strong> {car.ownerId}
                </Card.Text>
                <Card.Text>
                    <strong>Serial Number:</strong> {car.serialNumber}
                </Card.Text>
                <Card.Text>
                    <strong>Year:</strong> {car.year}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default CarDetails;
