import React from 'react';
import {Container, Navbar, Nav} from "react-bootstrap";
import routes from '../routes/index'

export const Header = () => (
    <Navbar >
        <Container>
            <Navbar.Brand href={routes.index}>Ethan Bonin</Navbar.Brand>
            <Nav>
                <Nav.Link href={routes.index}>Home</Nav.Link>
                <Nav.Link href={routes.history}>History</Nav.Link>
                <Nav.Link href={routes.projects}>Projects</Nav.Link>
                <Nav.Link href={routes.about}>About</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
);

Header.propTypes = {};

Header.defaultProps = {};
