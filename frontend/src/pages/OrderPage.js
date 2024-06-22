// src/pages/OrderPage.js
import React, { useState, useEffect } from 'react';
import { getAllOrders, getOrderById, updateOrderStatus } from '../api/orderService';
import OrderForm from '../components/order/OrderForm';
import OrderList from '../components/order/OrderList';
import OrderDetails from '../components/order/OrderDetails';
import OrderStatusForm from '../components/order/OrderStatusForm';
import { Container, Row, Col } from 'react-bootstrap';

const OrderPage = () => {
    const [orders, setOrders] = useState([]);
    const [selectedOrder, setSelectedOrder] = useState(null);

    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = async () => {
        const response = await getAllOrders();
        setOrders(response.data);
    };

    const fetchOrderById = async (id) => {
        const response = await getOrderById(id);
        setSelectedOrder(response.data);
    };

    const handleFormSubmit = () => {
        fetchOrders();
        setSelectedOrder(null);
    };

    const handleUpdateOrderStatus = async (orderId, newStatus) => {
        try {
            await fetchOrders();
            const updatedOrder = await updateOrderStatus(orderId, newStatus);
            console.log('Updated Order:', updatedOrder); // Debugging log
            if (updatedOrder) {
                setSelectedOrder(updatedOrder);
                await fetchOrders(); // Refresh the order list to reflect the status change
            } else {
                console.error('No data returned from updateOrderStatus');
            }
        } catch (error) {
            console.error('There was an error updating the order status!', error);
        }
        await fetchOrders();
    };

    return (
        <Container>
            <Row>
                <Col md={4}>
                    <OrderForm order={selectedOrder} onSubmit={handleFormSubmit} />
                    {selectedOrder && (
                        <OrderStatusForm order={selectedOrder} updateOrderStatus={handleUpdateOrderStatus} />
                    )}
                </Col>
                <Col md={8}>
                    <OrderList orders={orders} onSelect={fetchOrderById} />
                    {selectedOrder && (
                        <OrderDetails
                            order={selectedOrder}
                            updateOrderStatus={handleUpdateOrderStatus}
                        />
                    )}
                </Col>
            </Row>
        </Container>
    );
};

export default OrderPage;
