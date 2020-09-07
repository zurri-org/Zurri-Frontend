import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Image,
  Button,
} from "react-bootstrap";
import imageLogo from "../../../assets/img/logo.JPG";
import { useEffect } from "react";
import Register from "../../views/auth/register";

const AppHeader = () => {
  const [scroll, setScroll] = useState(1);
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY < 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  });
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="light"
        className={
          scroll
            ? "navbar-custom fixed-top"
            : "navbar-custom fixed-top scrolled-nav"
        }
      >
        
        <Navbar.Brand href="/" className={scroll ? null : "scrolled-nav-items"}>
          <Image
            src={imageLogo}
            height="50px"
            className="ml-4 mt-auto mb-auto"
          />
        </Navbar.Brand>
        <div className="custom-color d-lg-none d-xl-none">
          Welcome: {" "} <strong className="custom-color">Bryan</strong>
        </div>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className={scroll ? null : "scrolled-nav-items"}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto mr-4 nav-bar-custom font-14">
            <Nav.Link href="/">HOME</Nav.Link>
            <Nav.Link href="/rooms&rates">ROOMS&RATES</Nav.Link>
            <Nav.Link href="/facilities">FACILITIES</Nav.Link>
            <Nav.Link href="/contactUs">CONTACT US</Nav.Link>
            <Nav.Link href="/aboutpage">ABOUT US</Nav.Link>
            <Nav.Link href="/" className="custom-color">
              HELLO: <strong className="custom-color">Bryan</strong>
            </Nav.Link>
            <div className="btn-holder">
              <Button
                size="sm"
                className="mr-4 btn-custom font-12 custom-purple"
              >
                SIGN IN
              </Button>
              <Button
                variant="outline-info"
                size="sm"
                className="mr-4  btn-custom font-12"
                onClick={() => setModalShow(true)}
              >
                JOIN
              </Button>
            </div>
          </Nav>
        </Navbar.Collapse>
        
      </Navbar>

      {/* Registration Modal */}
      <Register show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default AppHeader;
