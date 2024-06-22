import React from 'react';
import { Card} from 'react-bootstrap';
import '../css/Form.css';
import FavorList from '../favor/FavorList';
import GoodsList from '../goods/GoodsList';

const OrderDetails = ({ order }) => {
    if (!order) {
        return null;
    }

    const handleFavorSelect = (favorId) => {
        console.log(`Favor selected: ${favorId}`);
    };

    const handleGoodsSelect = (goodsId) => {
        console.log(`Goods selected: ${goodsId}`);
    };

    return (
        <Card className="mt-3">
            <Card.Header>Order Details</Card.Header>
            <Card.Body>
                <Card.Text><strong>ID:</strong> {order.id}</Card.Text>
                <Card.Text><strong>Car ID:</strong> {order.carId}</Card.Text>
                <Card.Text><strong>Problem Description:</strong> {order.problemDescription}</Card.Text>
                <Card.Text><strong>Acceptance Date:</strong> {order.acceptanceDate}</Card.Text>
                <Card.Text><strong>Status:</strong> {order.status}</Card.Text>
                <Card.Text><strong>Final Price:</strong> {order.finalPrice}</Card.Text>
                <Card.Text><strong>End Date:</strong> {order.endDate}</Card.Text>
            </Card.Body>
            <Card.Body>
                <h5>Favors</h5>
                <FavorList favors={order.favors} onSelect={handleFavorSelect} />
            </Card.Body>
            <Card.Body>
                <h5>Goods</h5>
                <GoodsList goodsList={order.goods} onSelect={handleGoodsSelect} />
            </Card.Body>
        </Card>
    );
};

export default OrderDetails;
