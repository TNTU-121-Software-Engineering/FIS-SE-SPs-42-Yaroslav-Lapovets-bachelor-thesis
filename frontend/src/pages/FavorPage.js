import React, { useState, useEffect } from 'react';
import { getAllFavors, getFavorById } from '../api/favorService';
import FavorForm from '../components/favor/FavorForm';
import FavorList from '../components/favor/FavorList';
import FavorDetails from '../components/favor/FavorDetails';
import { Container, Row, Col } from 'react-bootstrap';

const FavorPage = () => {
    const [favors, setFavors] = useState([]);
    const [selectedFavor, setSelectedFavor] = useState(null);

    useEffect(() => {
        fetchFavors();
    }, []);

    const fetchFavors = async () => {
        const response = await getAllFavors();
        console.log(response.data);
        setFavors(response.data);
    };

    const fetchFavorById = async (id) => {
        const response = await getFavorById(id);
        console.log(response.data);
        setSelectedFavor(response.data);
    };

    const handleFormSubmit = () => {
        fetchFavors();
        setSelectedFavor(null);
    };

    return (
        <Container>
            <Row>
                <Col md={4}>
                    <FavorForm favor={selectedFavor} onSubmit={handleFormSubmit} />
                </Col>
                <Col md={8}>
                    <FavorList favors={favors} onSelect={fetchFavorById} />
                    {selectedFavor && <FavorDetails favor={selectedFavor} />}
                </Col>
            </Row>
        </Container>
    );
};

export default FavorPage;
