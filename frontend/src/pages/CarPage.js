import React, { useState, useEffect } from 'react';
import { getAllCars, getCarById } from '../api/carService';
import CarForm from '../components/car/CarForm';
import CarList from '../components/car/CarList';
import CarDetails from '../components/car/CarDetails';
import { Container, Row, Col } from 'react-bootstrap';

const CarPage = () => {
    const [cars, setCars] = useState([]);
    const [selectedCar, setSelectedCar] = useState(null);

    useEffect(() => {
        fetchCars();
    }, []);

    const fetchCars = async () => {
        const response = await getAllCars();
        setCars(response.data);
    };

    const fetchCarById = async (id) => {
        const response = await getCarById(id);
        setSelectedCar(response.data);
    };

    const handleFormSubmit = () => {
        fetchCars();
        setSelectedCar(null);
    };

    return (
        <Container>
            <Row>
                <Col md={4}>
                    <CarForm car={selectedCar} onSubmit={handleFormSubmit} />
                </Col>
                <Col md={8}>
                    <CarList cars={cars} onSelect={fetchCarById} />
                    {selectedCar && <CarDetails car={selectedCar} />}
                </Col>
            </Row>
        </Container>
    );
};

export default CarPage;
