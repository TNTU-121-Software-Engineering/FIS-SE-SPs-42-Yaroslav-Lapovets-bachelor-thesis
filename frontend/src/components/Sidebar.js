import React from 'react';
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Sidebar = () => (
    <Nav className="col-md-12 d-none d-md-block bg-light sidebar">
        <div className="sidebar-menu"></div>
        <Nav.Item>
            <LinkContainer to="/profile" >
                <Nav.Link>Профіль</Nav.Link>
            </LinkContainer>
        </Nav.Item>
        <Nav.Item>
            <LinkContainer to="/repairmans">
                <Nav.Link>Майстри</Nav.Link>
            </LinkContainer>
        </Nav.Item>
        <Nav.Item>
            <LinkContainer to="/owners">
                <Nav.Link>Власники</Nav.Link>
            </LinkContainer>
        </Nav.Item>
        <Nav.Item>
            <LinkContainer to="/cars">
                <Nav.Link>Автомобілі</Nav.Link>
            </LinkContainer>
        </Nav.Item>
        <Nav.Item>
            <LinkContainer to="/orders">
                <Nav.Link>Замовлення</Nav.Link>
            </LinkContainer>
        </Nav.Item>
        <Nav.Item>
            <LinkContainer to="/favors">
                <Nav.Link>Послуги</Nav.Link>
            </LinkContainer>
        </Nav.Item>
        <Nav.Item>
            <LinkContainer to="/goods">
                <Nav.Link>Товари</Nav.Link>
            </LinkContainer>
        </Nav.Item>
    </Nav>
);

export default Sidebar;
