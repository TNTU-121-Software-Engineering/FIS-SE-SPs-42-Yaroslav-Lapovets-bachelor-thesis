import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import '../css/Form.css';

const CarList = ({ cars, onSelect }) => (
    <ListGroup>
        {cars.map((car) => (
            <ListGroup.Item key={car.id}>
                <div>
                    <strong>Brand:</strong> {car.brand} - <strong>Model:</strong> {car.model} - <strong>Owner ID:</strong> {car.ownerId} - <strong>Serial Number:</strong> {car.serialNumber} - <strong>Year:</strong> {car.year}
                </div>
                <Button variant="link" onClick={() => onSelect(car.id)} className="float-end">
                    View
                </Button>
            </ListGroup.Item>
        ))}
    </ListGroup>
);

export default CarList;
