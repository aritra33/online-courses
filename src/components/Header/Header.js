import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import './Header.css'

const Header = () => {
    return (
        
    <Navbar expand="lg" className="navBar">
    <Navbar.Brand href="/home">E-learning</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/contract">Contract</Nav.Link>
        </Nav>
    </Navbar.Collapse>
    </Navbar>
        
    );
};

export default Header;