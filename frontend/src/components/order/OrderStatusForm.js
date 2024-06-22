// src/components/order/OrderStatusForm.js
import React, { useState } from 'react';
import { Button, Form } from "react-bootstrap";

const OrderStatusForm = ({ order, updateOrderStatus }) => {
    const [form, setForm] = useState(order ? { orderId: order.id, status: '' } : { orderId: '', status: '' });

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
            console.log(form)
            await updateOrderStatus(form.orderId, form.status);
            setForm({ orderId: '', status: '' });
        } catch (error) {
            console.error('Error submitting form', error);
        }
    };

    return (
        <div className="form-container">
            <div className="form-card">
                <div className="form-header">Order Status Form</div>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formOrderId" className="form-group">
                        <Form.Label className="form-label">Order ID</Form.Label>
                        <Form.Control
                            type="text"
                            name="orderId"
                            value={form.orderId}
                            placeholder="Order ID"
                            onChange={handleChange}
                            className="form-input"
                        />
                    </Form.Group>
                    <Form.Group controlId="formStatus" className="form-group">
                        <Form.Label className="form-label">Status</Form.Label>
                        <Form.Control
                            as="select"
                            name="status"
                            value={form.status}
                            onChange={handleChange}
                            className="form-input"
                        >
                            <option value="">Select Status</option>
                            <option value="FAILURE">FAILURE</option>
                            <option value="COMPLETED">COMPLETE</option>
                            <option value="IN_PROCESS">IN_PROGRESS</option>
                        </Form.Control>
                    </Form.Group>

                    <Button variant="primary" type="submit" className="form-button">Submit</Button>
                </Form>
            </div>
        </div>
    );
};

export default OrderStatusForm;
