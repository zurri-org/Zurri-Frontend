import React, { useState } from "react";
import { connect } from "react-redux";
import {
  Navbar,
  Nav,
  Image,
  Button,
} from "react-bootstrap";
import imageLogo from "../../../assets/img/logo.JPG";
import { useEffect } from "react";
import Register from "../../views/auth/register";
import { open_modal } from "../../../actions/authActions";

const AppHeader = ({ close_modal, open_modal }) => {
  const [scroll, setScroll] = useState(1);
  const [modalShow, setModalShow] = useState(false);
  const data = (localStorage.getItem("user") != null ) ? JSON.parse(localStorage.getItem("user")).data : null

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY < 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  });

  useEffect(() => {
    setModalShow(close_modal);
  }, [close_modal]);

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
          Welcome: {" "} <strong className="custom-color">{data != null ? data.user.name != null ? data.user.name : null : null}</strong>
        </div>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className={scroll ? null : "scrolled-nav-items"}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto mr-4 nav-bar-custom font-14">
            <Nav.Link href="/">HOME</Nav.Link>
            <Nav.Link href="/aboutpage">ABOUT US</Nav.Link>
            {data != null ? data.user.name != null ? (
              <>
                <Nav.Link href="/rooms&rates">ROOMS&RATES</Nav.Link>
                <Nav.Link href="/facilities">FACILITIES</Nav.Link>
                <Nav.Link href="/contactUs">CONTACT US</Nav.Link>
                <Nav.Link href="/" className="custom-color">
                  HELLO: <strong className="custom-color">{data.user.name}</strong>
                </Nav.Link>
              </>

            ) : null : (
                <div className="btn-holder">
                  <Button
                    size="sm"
                    className="mr-4 btn-custom font-12 custom-purple"
                    onclick={() => setModalShow(true)}
                  >
                    SIGN IN
                  </Button>
                  <Button
                      variant="outline-info"
                      size="sm"
                      className="mr-4  btn-custom font-12"
                      onClick={() => open_modal()}
                    >
                      JOIN
                  </Button>
                </div>
              )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/* Registration Modal */}
      <Register show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

const mapStateToProps = ({ Auth }) => {
  const { close_modal } = Auth;
  return { close_modal };
};

export default connect(mapStateToProps, { open_modal })(AppHeader);
