import React, { useState } from 'react';
import { createOrder, updateOrder } from '../../api/orderService';
import { Form, Button } from 'react-bootstrap';
import '../css/Form.css';

const OrderForm = ({ order, onSubmit }) => {
    const [form, setForm] = useState(order || { id: '', carId: '',description: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (form.id) {
                await updateOrder(form.id, form);
            } else {
                await createOrder(form);
            }
            onSubmit();
            setForm({ id: '', carId: '', description: '' });
        } catch (error) {
            console.error('Error submitting form', error);
        }
    };

    return (
        <div className="form-container">
            <div className="form-card">
                <div className="form-header">Order Form</div>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formCarId" className="form-group">
                        <Form.Label className="form-label">Car ID</Form.Label>
                        <Form.Control
                            type="text"
                            name="carId"
                            value={form.carId}
                            placeholder="Car ID"
                            onChange={handleChange}
                            className="form-input"
                        />
                    </Form.Group>

                    <Form.Group controlId="formDescription" className="form-group">
                        <Form.Label className="form-label">Description</Form.Label>
                        <Form.Control
                            type="text"
                            name="problemDescription"
                            value={form.problemDescription}
                            placeholder="Problem Description"
                            onChange={handleChange}
                            className="form-input"
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit" className="form-button">Submit</Button>
                </Form>
            </div>
        </div>
    );
};

export default OrderForm;
