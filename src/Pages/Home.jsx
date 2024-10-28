import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Home = () => {
    return (
        <>
            <Navbar bg="light" expand="lg" className="shadow-sm sticky-top">
                <Container>
                    <Navbar.Brand href="#">My Portfolio</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarNav" className='btn btn-light border border-0' />
                    <Navbar.Collapse id="navbarNav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home" className="active">Home</Nav.Link>
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#Project">Projects</Nav.Link>
                            <Nav.Link href="#Contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Home; 