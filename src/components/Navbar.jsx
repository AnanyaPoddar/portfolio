import "../styles.css";
import { Navbar, Nav, Button } from "react-bootstrap";
import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import favicon from "../media/favicon.ico"
import resume from "../media/AnanyaPoddarResumeJan2023.pdf";

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
        expand="md"
      >
        <Navbar.Brand data-aos="fade-right">
          <Link id="brand"
            to="/"
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
                smooth={true}
                duration={500}
                scroll={(el) => scrollWithOffset(el, 100)}
                exact
              >
                Experience
              </Link>
            </div>
            <div className="nav-link" data-aos="fade-left">
              <Link
                to="/#projects"
                smooth={true}
                duration={500}
                scroll={(el) => scrollWithOffset(el, 75)}
                exact
              >
                Projects
              </Link>
            </div>
            <div className="nav-link" data-aos="fade-left">
              <Link
                to="/#skills"
                smooth={true}
                duration={500}
                scroll={(el) => scrollWithOffset(el, 75)}
                exact
              >
                Skills
              </Link>
            </div>
            <div className="nav-link" data-aos="fade-left">
              <Link
                to="/#contact"
                smooth={true}
                duration={500}
                scroll={(el) => scrollWithOffset(el, -75)}
                exact
              >
                Contact
              </Link>
            </div>
            <Button id="nav-btn" data-aos="fade-left" variant="outline-light"><a style={{ "textDecoration": "none", "color": "white" }} href={resume} target="_blank" rel="noreferrer">Resume</a></Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar >
    </div >
  );
}
