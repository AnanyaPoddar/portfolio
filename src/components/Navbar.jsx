import "../styles.css";
import { Navbar, Nav, Button } from "react-bootstrap";
import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import favicon from "../images/favicon.ico"
import resume from "../images/AnanyaPoddarJan2022.pdf";

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
        <Navbar.Brand data-aos="fade-right">
          <Link id="brand"
            activeClass="active"
            to="/"
            spy={true}
            smooth={true}
            scroll={(el) => scrollWithOffset(el, 75)}
            exact
          >
          <img src={favicon}></img>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className="ml-auto">
            <div className="nav-link" data-aos="fade-left">
              <Link
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
            <div className="nav-link" data-aos="fade-left">
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
            <div className="nav-link" data-aos="fade-left">
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
            <Button id="nav-btn" data-aos="fade-left" variant="outline-light"><a style={{ "text-decoration": "none", "color": "white" }} href={resume} target="_blank">Resume</a></Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar >
    </div >
  );
}
