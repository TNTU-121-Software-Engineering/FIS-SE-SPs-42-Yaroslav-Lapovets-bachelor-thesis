import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import '../css/Form.css';

const OrderList = ({ orders, onSelect }) => (
    <ListGroup>
        {orders.map((order) => (
            <ListGroup.Item key={order.id}>
                <div>
                    <strong>Car ID:</strong> {order.carId} - <strong>Problem Description:</strong> {order.problemDescription} - <strong>Status:</strong> {order.status} - <strong>Final Price:</strong> {order.finalPrice}
                </div>
                <Button variant="link" onClick={() => onSelect(order.id)} className="float-end">View</Button>
            </ListGroup.Item>
        ))}
    </ListGroup>
);

export default OrderList;
