import React, { useState, useEffect } from 'react';
import { getAllRepairmans, getRepairmanById } from '../api/repairmanService';
import RepairmanForm from '../components/repairman/RepairmanForm';
import RepairmanList from '../components/repairman/RepairmanList';
import RepairmanDetails from '../components/repairman/RepairmanDetails';
import { Container, Row, Col } from 'react-bootstrap';

const RepairmanPage = () => {
    const [repairmans, setRepairmans] = useState([]);
    const [selectedRepairman, setSelectedRepairman] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchRepairmans();
    }, []);

    const fetchRepairmans = async () => {
        try {
            const response = await getAllRepairmans();
            if (response && response.data) {
                setRepairmans(response.data);
            } else {
                setError('Failed to fetch repairmans');
            }
        } catch (error) {
            console.error('Error fetching repairmans:', error);
            setError(error.message || 'An error occurred while fetching repairmans');
        }
    };

    const fetchRepairmanById = async (id) => {
        try {
            const response = await getRepairmanById(id);
            if (response && response.data) {
                setSelectedRepairman(response.data);
            } else {
                setError('Failed to fetch repairman details');
            }
        } catch (error) {
            console.error('Error fetching repairman details:', error);
            setError(error.message || 'An error occurred while fetching repairman details');
        }
    };

    const handleFormSubmit = () => {
        fetchRepairmans();
        setSelectedRepairman(null);
    };

    return (
        <Container>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <Row>
                <Col md={4}>
                    <RepairmanForm repairman={selectedRepairman} onSubmit={handleFormSubmit} />
                </Col>
                <Col md={8}>
                    <RepairmanList repairmans={repairmans} onSelect={fetchRepairmanById} />
                    {selectedRepairman && <RepairmanDetails repairman={selectedRepairman} />}
                </Col>
            </Row>
        </Container>
    );
};

export default RepairmanPage;
