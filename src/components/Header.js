import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './header.css';

function Header() {
  return (
    <Navbar className="header" variant="dark" expand="lg">
      <Navbar.Brand href="/">MY PORTFOLIO</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Link to="/" className="nav-link">Home</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/about" className="nav-link">About</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/gallery" className="nav-link">Gallery</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/contact" className="nav-link">Contact</Link>
          </Nav.Item>

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
