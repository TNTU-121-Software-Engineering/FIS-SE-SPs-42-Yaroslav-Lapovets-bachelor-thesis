import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import '../css/Form.css';

const RepairmanList = ({ repairmans, onSelect }) => (
    <ListGroup>
        {repairmans.map((repairman) => (
            <ListGroup.Item key={repairman.id}>
                <div>
                    <strong>First Name:</strong> {repairman.firstName} - <strong>Last Name:</strong> {repairman.lastName} - <strong>Phone:</strong> {repairman.phone} - <strong>Email:</strong> {repairman.email}
                </div>
                <Button variant="link" onClick={() => onSelect(repairman.id)} className="float-end">View</Button>
            </ListGroup.Item>
        ))}
    </ListGroup>
);

export default RepairmanList;
