import React, { useState } from 'react';
import { createFavor, updateFavor } from '../../api/favorService';
import { Form, Button } from 'react-bootstrap';
import '../css/Form.css';

const FavorForm = ({ favor, onSubmit }) => {
    const [form, setForm] = useState(favor || { id: '', orderId: '', favorName: '', repairmanId: '', price: '' });

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
                await updateFavor(form.id, form);
            } else {
                await createFavor(form);
            }
            onSubmit();
            setForm({id: '', orderId: '', favorName: '', repairmanId: '', price: '' });
        } catch (error) {
            console.error('Error submitting form', error);
        }
    };

    return (
        <div className="form-container">
            <div className="form-card">
                <div className="form-header">Favor Form</div>
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

                    <Form.Group controlId="formFavorName" className="form-group">
                        <Form.Label className="form-label">Favor Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="favorName"
                            value={form.favorName}
                            placeholder="Favor Name"
                            onChange={handleChange}
                            className="form-input"
                        />
                    </Form.Group>

                    <Form.Group controlId="formRepairmanId" className="form-group">
                        <Form.Label className="form-label">Repairman ID</Form.Label>
                        <Form.Control
                            type="text"
                            name="repairmanId"
                            value={form.repairmanId}
                            placeholder="Repairman ID (Optional)"
                            onChange={handleChange}
                            className="form-input"
                        />
                    </Form.Group>

                    <Form.Group controlId="formPrice" className="form-group">
                        <Form.Label className="form-label">Price</Form.Label>
                        <Form.Control
                            type="text"
                            name="price"
                            value={form.price}
                            placeholder="Price"
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

export default FavorForm;
