import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import '../css/Form.css';

const FavorList = ({ favors, onSelect }) => {
    if (!favors || favors.length === 0) {
        return <div>Need refresh</div>;
    }

    return (
        <ListGroup>
            {favors.map((favor) => (
                <ListGroup.Item key={favor.id}>
                    <div>
                        <strong>Favor Name:</strong> {favor.favorName} - <strong>Price:</strong> {favor.price} - <strong>Order ID:</strong> {favor.orderId} - <strong>Repairman ID:</strong> {favor.repairmanId}
                    </div>
                    <Button variant="link" onClick={() => onSelect(favor.id)} className="float-end">View</Button>
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
};

export default FavorList;
