import React, { useState, useEffect } from 'react';
import { getAllGoods, getGoodsById } from '../api/goodsService';
import GoodsForm from '../components/goods/GoodsForm';
import GoodsList from '../components/goods/GoodsList';
import GoodsDetails from '../components/goods/GoodsDetails';
import { Container, Row, Col } from 'react-bootstrap';

const GoodsPage = () => {
    const [goodsList, setGoodsList] = useState([]);
    const [selectedGoods, setSelectedGoods] = useState(null);

    useEffect(() => {
        fetchGoods();
    }, []);

    const fetchGoods = async () => {
        const response = await getAllGoods();
        setGoodsList(response.data);
    };

    const fetchGoodsById = async (id) => {
        const response = await getGoodsById(id);
        setSelectedGoods(response.data);
    };

    const handleFormSubmit = () => {
        fetchGoods();
        setSelectedGoods(null);
    };

    return (
        <Container>
            <Row>
                <Col md={4}>
                    <GoodsForm goods={selectedGoods} onSubmit={handleFormSubmit} />
                </Col>
                <Col md={8}>
                    <GoodsList goodsList={goodsList} onSelect={fetchGoodsById} />
                    {selectedGoods && <GoodsDetails goods={selectedGoods} />}
                </Col>
            </Row>
        </Container>
    );
};

export default GoodsPage;
