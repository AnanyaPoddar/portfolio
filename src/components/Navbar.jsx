import "../styles.css";
import { Navbar, Nav } from "react-bootstrap";
import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import resume from "../images/CVAnanyaPoddar.pdf";

export default function NavbarDefault() {
  const scrollWithOffset = (el, offset) => {
    window.scroll({
      top: el.offsetTop - offset,
      left: 0,
      behavior: "smooth"
    });
  };

  return (
    <div id="navbar">
      <Navbar
        collapseOnSelect
        expand="sm"
      >
        <Navbar.Brand data-aos="fade-left">
          <Link id="brand"
            activeClass="active"
            to="/"
            spy={true}
            smooth={true}
            scroll={(el) => scrollWithOffset(el, 75)}
            exact
          >
            A P
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" data-aos="fade-left" />
        <Navbar.Collapse id="responsive-navbar-nav" data-aos="fade-left">
          <Nav className="ml-auto">
            <div className="nav-link">
              <Link
                // activeClass="active"
                to="/#experience"
                spy={true}
                smooth={true}
                duration={500}
                scroll={(el) => scrollWithOffset(el, 75)}
                exact
              >
                Experience
              </Link>
            </div>
            <div className="nav-link">
              <Link
                activeClass="active"
                to="/#projects"
                spy={true}
                smooth={true}
                duration={500}
                exact
              >
                Projects
              </Link>
            </div>
            <div className="nav-link">
              <Link
                activeClass="active"
                to="/#contact"
                spy={true}
                smooth={true}
                duration={500}
                scroll={(el) => scrollWithOffset(el, -75)}
                exact
              >
                Contact
              </Link>
            </div>
            <div className="nav-link"><a href={resume} target="_blank">Resume</a></div>
          </Nav>
        </Navbar.Collapse>
      </Navbar >
    </div >
  );
}
