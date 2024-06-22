import React, { useState } from 'react';
import { createGoods, updateGoods } from '../../api/goodsService';
import { Form, Button } from 'react-bootstrap';
import '../css/Form.css';

const GoodsForm = ({ goods, onSubmit }) => {
    const [form, setForm] = useState(goods || { id: '', orderId: '',name: '', price: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(form)
        try {
            if (form.id) {
                await updateGoods(form.id, form);
            } else {
                await createGoods(form);
            }
            onSubmit();
            setForm({ id: '',orderId:'', name: '', price: '' });
        } catch (error) {
            console.error('Error submitting form', error);
        }
    };

    return (
        <div className="form-container">
            <div className="form-card">
                <div className="form-header">Goods Form</div>
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
                    <Form.Group controlId="formName" className="form-group">
                        <Form.Label className="form-label">Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            value={form.name}
                            placeholder="Name"
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

export default GoodsForm;
