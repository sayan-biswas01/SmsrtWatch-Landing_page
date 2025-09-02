import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";

const Navagation = () => {
  return (
    <Navbar
      expand="lg"
      bg="light"
      variant="light"
      className="shadow-sm py-3 sticky-top"
    >
      <Container>
        {/* Brand Logo */}
        <Navbar.Brand href="#home" className="fw-bold fs-4 text-primary">
          SmartWatch
        </Navbar.Brand>

        {/* Mobile Toggle */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Nav Links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#Hero" className="mx-2 fw-semibold">
              Home
            </Nav.Link>
            <Nav.Link href="#features" className="mx-2 fw-semibold">
              Features
            </Nav.Link>
            <Nav.Link href="#Price" className="mx-2 fw-semibold">
              Price
            </Nav.Link>
            <Nav.Link href="#about" className="mx-2 fw-semibold">
              About
            </Nav.Link>
            <Nav.Link href="#reviews" className="mx-2 fw-semibold">
              Reviews
            </Nav.Link>
          </Nav>

          {/* CTA Button */}
          <Button
            href="#BuyNow"
            className="ms-3 px-4 rounded-pill fw-semibold"
            variant="primary"
          >
            Buy Now
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navagation;
