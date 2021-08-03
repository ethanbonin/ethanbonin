import React from 'react';
import {Container, Navbar, Nav} from "react-bootstrap";

export const Header = () => (
    <Navbar >
        <Container>
            <Navbar.Brand href="/">Ethan Bonin</Navbar.Brand>
            <Nav>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/history">History</Nav.Link>
                <Nav.Link href="/projects">Projects</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
);

Header.propTypes = {};

Header.defaultProps = {};
