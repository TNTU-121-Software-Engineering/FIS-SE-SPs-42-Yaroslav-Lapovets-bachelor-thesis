import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import '../css/Form.css';

const GoodsList = ({ goodsList, onSelect }) => {
    if (!goodsList || goodsList.length === 0) {
        return <div>No goods available</div>;
    }

    return (
        <ListGroup>
            {goodsList.map((goods) => (
                <ListGroup.Item key={goods.id}>
                    <div>
                        <strong>OrderId:</strong> {goods.orderId} - <strong>Name:</strong> {goods.name} - <strong>Price:</strong> {goods.price}
                    </div>
                    <Button variant="link" onClick={() => onSelect(goods.id)} className="float-end">View</Button>
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
};

export default GoodsList;
