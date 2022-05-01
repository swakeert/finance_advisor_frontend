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
        <Navbar.Collapse id="navbarCollapse">
          <Nav>
            <Nav.Item>
              <NavLink to={GlobalRoutes.HOME}>Home</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to={GlobalRoutes.ABOUT}>About Us</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to={GlobalRoutes.CONTACT}>Contact Us</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to={GlobalRoutes.LOGIN}>Login</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to={GlobalRoutes.SIGN_UP}>Sign Up</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to={DashboardRoutes.LOGOUT}>Logout</NavLink>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
