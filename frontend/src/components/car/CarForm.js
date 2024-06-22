import React, { useState } from 'react';
import { createCar, updateCar } from '../../api/carService';
import { Form, Button} from 'react-bootstrap';
import '../css/Form.css';

const CarForm = ({ car, onSubmit }) => {
    const [form, setForm] = useState(car || { id: '', brand: '', model: '', ownerId: '', serialNumber: '', year: '' });

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
                await updateCar(form.id, form);
            } else {
                await createCar(form);
            }
            onSubmit();
            setForm({ id: '', brand: '', model: '', ownerId: '', serialNumber: '', year: '' });
        } catch (error) {
            console.error('Error submitting form', error);
        }
    };

    return (
        <div className="form-container">
            <div className="form-card">
                <div className="form-header">Car Form</div>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBrand" className="form-group">
                        <Form.Label className="form-label">Brand</Form.Label>
                        <Form.Control
                            type="text"
                            name="brand"
                            value={form.brand}
                            placeholder="Brand"
                            onChange={handleChange}
                            className="form-input"
                        />
                    </Form.Group>

                    <Form.Group controlId="formModel" className="form-group">
                        <Form.Label className="form-label">Model</Form.Label>
                        <Form.Control
                            type="text"
                            name="model"
                            value={form.model}
                            placeholder="Model"
                            onChange={handleChange}
                            className="form-input"
                        />
                    </Form.Group>

                    <Form.Group controlId="formOwnerId" className="form-group">
                        <Form.Label className="form-label">Owner ID</Form.Label>
                        <Form.Control
                            type="text"
                            name="ownerId"
                            value={form.ownerId}
                            placeholder="Owner ID"
                            onChange={handleChange}
                            className="form-input"
                        />
                    </Form.Group>

                    <Form.Group controlId="formSerialNumber" className="form-group">
                        <Form.Label className="form-label">Serial Number</Form.Label>
                        <Form.Control
                            type="text"
                            name="serialNumber"
                            value={form.serialNumber}
                            placeholder="Serial Number"
                            onChange={handleChange}
                            className="form-input"
                        />
                    </Form.Group>

                    <Form.Group controlId="formYear" className="form-group">
                        <Form.Label className="form-label">Year</Form.Label>
                        <Form.Control
                            type="number"
                            name="year"
                            value={form.year}
                            placeholder="Year"
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
)
    ;
};

export default CarForm;
