import "../styles.css";
import { Navbar, Nav } from "react-bootstrap";
import React from "react";
import { NavHashLink as Link } from "react-router-hash-link";

export default function NavbarDefault() {
  const scrollWithOffset = (el, offset) => {
    window.scroll({
      top: el.offsetTop - offset,
      left: 0,
      behavior: "smooth"
    });
  };

  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="sm"
        className="navbar"
        bg="navbar"
        variant="dark"
      >
        {/* <LinkContainer to="/"> */}
        <Navbar.Brand id="brand">A P</Navbar.Brand>
        {/* </LinkContainer> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Link
              activeClass="active"
              to="/#home"
              spy={true}
              smooth={true}
              scroll={(el) => scrollWithOffset(el, 75)}
              exact
              className="nav-link"
            >
              Home
            </Link>

            <Link
              activeClass="active"
              to="/#experience"
              spy={true}
              smooth={true}
              duration={500}
              scroll={(el) => scrollWithOffset(el, 75)}
              exact
              className="nav-link"
            >
              Experience
            </Link>
            <Link
              activeClass="active"
              to="/#contact"
              spy={true}
              smooth={true}
              duration={500}
              scroll={(el) => scrollWithOffset(el, -75)}
              exact
              className="nav-link"
            >
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
