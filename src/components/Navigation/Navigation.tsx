import { DashboardRoutes, GlobalRoutes } from 'core/routes';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './Navigation.scss';

export default (): React.ReactElement => {
  return (
    <Navbar
      collapseOnSelect
      bg="light"
      expand="lg"
      sticky="top"
      className="navbar-custom navbar-default"
    >
      <Container>
        <Navbar.Brand as={Link} to={GlobalRoutes.HOME}>
          <img src="logo512.png" className="logo" alt="Logo" />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="navbarCollapse"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-label="Toggle navigation"
        />
        <Navbar.Collapse id="navbarCollapse" className="justify-content-end">
          <Nav>
            <Nav.Item>
              <Nav.Link as={Link} to={GlobalRoutes.HOME} eventKey="home">
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to={GlobalRoutes.ABOUT} eventKey="about">
                About Us
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to={GlobalRoutes.CONTACT} eventKey="contact">
                Contact Us
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to={GlobalRoutes.LOGIN} eventKey="login">
                Login
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to={GlobalRoutes.SIGN_UP} eventKey="signup">
                Sign Up
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to={DashboardRoutes.LOGOUT} eventKey="logout">
                Logout
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
