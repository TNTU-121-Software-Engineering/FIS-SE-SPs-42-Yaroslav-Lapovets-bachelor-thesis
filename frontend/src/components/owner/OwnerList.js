// src/components/OwnerList.js
import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';

const OwnerList = ({ owners, onSelect }) => (
    <ListGroup>
        {owners.map((owner) => (
            <ListGroup.Item key={owner.id}>
                {owner.firstName} {owner.lastName} - {owner.email}
                <Button variant="link" onClick={() => onSelect(owner.id)} className="float-end">
                    View
                </Button>
            </ListGroup.Item>
        ))}
    </ListGroup>
);

export default OwnerList;
