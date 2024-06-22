import React, { useState } from 'react';
import { createOwner, updateOwner } from '../../api/ownerService';
import { Form, Button } from 'react-bootstrap';
import '../css/Form.css';

const OwnerForm = ({ owner, onSubmit }) => {
    const [form, setForm] = useState(owner || { id: '', firstName: '', lastName: '', phone: '', email: '' });

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
                await updateOwner(form.id, form);
            } else {
                await createOwner(form);
            }
            onSubmit();
            setForm({ id: '', firstName: '', lastName: '', phone: '', email: '' });
        } catch (error) {
            console.error('Error submitting form', error);
        }
    };

    return (
        <div className="form-container">
            <div className="form-card">
                <div className="form-header">Owner Form</div>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formFirstName" className="form-group">
                        <Form.Label className="form-label">First Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="firstName"
                            value={form.firstName}
                            placeholder="First Name"
                            onChange={handleChange}
                            className="form-input"
                        />
                    </Form.Group>

                    <Form.Group controlId="formLastName" className="form-group">
                        <Form.Label className="form-label">Last Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="lastName"
                            value={form.lastName}
                            placeholder="Last Name"
                            onChange={handleChange}
                            className="form-input"
                        />
                    </Form.Group>

                    <Form.Group controlId="formPhone" className="form-group">
                        <Form.Label className="form-label">Phone</Form.Label>
                        <Form.Control
                            type="text"
                            name="phone"
                            value={form.phone}
                            placeholder="Phone"
                            onChange={handleChange}
                            className="form-input"
                        />
                    </Form.Group>

                    <Form.Group controlId="formEmail" className="form-group">
                        <Form.Label className="form-label">Email</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            value={form.email}
                            placeholder="Email"
                            onChange={handleChange}
                            className="form-input"
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit" className="form-button">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default OwnerForm;
