import React from "react";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import "./style.css";

const NavBar = () => {
  return (
    <Navbar className="navigation">
      <h1 className="sitename" href="#home">
        Best Of Movies
      </h1>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link
            href="#home"
            style={{ color: "rgba(204, 164, 99, 0.753)", fontSize: 16 }}
          >
            Home
          </Nav.Link>
          <Nav.Link
            href="#ListOfMovies"
            style={{ color: "rgba(204, 164, 99, 0.753)", fontSize: 16 }}
          >
            ListOfMovies
          </Nav.Link>
          <Nav.Link
            href="#Add"
            style={{ color: "rgba(204, 164, 99, 0.753)", fontSize: 16 }}
          >
            Add a movie
          </Nav.Link>
          <Nav.Link
            href="#SignIn"
            style={{ color: "rgba(204, 164, 99, 0.753)", fontSize: 16 }}
          >
            SignIn
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
