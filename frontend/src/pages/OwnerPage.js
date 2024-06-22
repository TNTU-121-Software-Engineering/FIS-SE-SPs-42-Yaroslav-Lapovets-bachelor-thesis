// src/pages/OwnerPage.js
import React, { useState, useEffect } from 'react';
import { getAllOwners, getOwnerById } from '../api/ownerService';
import OwnerForm from '../components/owner/OwnerForm';
import OwnerList from '../components/owner/OwnerList';
import OwnerDetails from '../components/owner/OwnerDetails';
import { Container, Row, Col } from 'react-bootstrap';

const OwnerPage = () => {
    const [owners, setOwners] = useState([]);
    const [selectedOwner, setSelectedOwner] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchOwners();
    }, []);

    const fetchOwners = async () => {
        try {
            const response = await getAllOwners();
            if (response && response.data) {
                setOwners(response.data);
            } else {
                setError('Failed to fetch owners');
            }
        } catch (error) {
            setError(error.message || 'An error occurred while fetching owners');
        }
    };

    const fetchOwnerById = async (id) => {
        try {
            const response = await getOwnerById(id);
            if (response && response.data) {
                setSelectedOwner(response.data);
            } else {
                setError('Failed to fetch owner details');
            }
        } catch (error) {
            setError(error.message || 'An error occurred while fetching owner details');
        }
    };

    const handleFormSubmit = () => {
        fetchOwners();
        setSelectedOwner(null);
    };

    return (
        <Container>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <Row>
                <Col md={4}>
                    <OwnerForm owner={selectedOwner} onSubmit={handleFormSubmit} />
                </Col>
                <Col md={8}>
                    <OwnerList owners={owners} onSelect={fetchOwnerById} />
                    {selectedOwner && <OwnerDetails owner={selectedOwner} />}
                </Col>
            </Row>
        </Container>
    );
};

export default OwnerPage;
