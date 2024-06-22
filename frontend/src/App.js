import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar, Container, Row, Col } from 'react-bootstrap';
import Sidebar from './components/Sidebar';
import CarPage from './pages/CarPage';
import OwnerPage from './pages/OwnerPage';
import FavorPage from './pages/FavorPage';
import GoodsPage from './pages/GoodsPage';
import OrderPage from './pages/OrderPage';
import RepairmanPage from './pages/RepairmanPage';
import Login from './components/Login';
import Register from './components/Register';
import ProfilePage from './pages/ProfilePage';

const App = () => {
    console.log(localStorage.getItem('token'))
    console.log(!!localStorage.getItem('token'))
    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));

    const handleLogin = () => {
        setIsAuthenticated(true);
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem('token');
    };

    return (
        <Router>
            <div className="App">
                <Navbar bg="dark" variant="dark" className="mb-3">
                    <Container>
                        <Navbar.Brand href="/">Auto Service</Navbar.Brand>
                        {isAuthenticated && (
                            <Navbar.Collapse className="justify-content-end">
                                <Navbar.Text>
                                    <a href="/" onClick={handleLogout}>Logout</a>
                                </Navbar.Text>
                            </Navbar.Collapse>
                        )}
                    </Container>
                </Navbar>
                <Container fluid>
                    <Row>
                        <Col md={2}>
                            {isAuthenticated && <Sidebar />}
                        </Col>
                        <Col md={10}>
                            <Routes>
                                {!isAuthenticated ? (
                                    <>
                                        <Route path="/login" element={<Login onLogin={handleLogin} />} />
                                        <Route path="/register" element={<Register onRegister={handleLogin} />} />
                                        <Route path="*" element={<Login onLogin={handleLogin} />} />
                                    </>
                                ) : (
                                    <>
                                        <Route path="/cars" element={<CarPage />} />
                                        <Route path="/owners" element={<OwnerPage />} />
                                        <Route path="/favors" element={<FavorPage />} />
                                        <Route path="/goods" element={<GoodsPage />} />
                                        <Route path="/orders" element={<OrderPage />} />
                                        <Route path="/repairmans" element={<RepairmanPage />} />
                                        <Route path="/profile" element={<ProfilePage />} />
                                        <Route path="/" element={<ProfilePage />} />
                                    </>
                                )}
                            </Routes>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Router>
    );
};

export default App;
