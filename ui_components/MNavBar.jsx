import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import mylogo from "../logo/myLogo.png";
import Image from "next/image";

function MNavBar() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Image
            alt="Logo"
            src={mylogo}
            width="50"
            height="50"
            // className="d-inline-block align-top"
          />{" "}
          <Navbar.Brand href="/" style={{marginLeft: "0.4rem"}}>CryptoFunding</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Item>
              <Nav.Link href="/discover">Discover</Nav.Link>
            </Nav.Item>
            <Nav.Link href="/projects/initiate">Create Project</Nav.Link>
          </Nav>
        </Container>
      </Navbar>{" "}
    </div>
  );
}

export default MNavBar;
