import React, { useState } from "react";
import {
  Navbar,
  Nav,
  InputGroup,
  Form,
  FormControl,
  Image,
  Button,
  NavItem,
  NavDropdown
} from "react-bootstrap";
import imageLogo from "../../../assets/img/logo.JPG";
import { useEffect } from "react";
import Register from "../../views/auth/register";

const AppHeader = () => {
  const [scroll, setScroll] = useState(1)
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY < 100
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck)
      }
    })
  });
    return (
      <>
        <Navbar
          collapseOnSelect
          expand="lg"
          variant="light"
          className={scroll ? 'navbar-custom fixed-top' : 'navbar-custom fixed-top scrolled-nav'}
        >
          <Navbar.Brand href="/">
            <Image src={imageLogo} height="50px" className="ml-4 mt-auto mb-auto" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto mr-4 nav-bar-custom font-14">
                <Nav.Link href="/">HOME</Nav.Link>
                <Nav.Link href="/rooms&rates">ROOMS&RATES</Nav.Link>
                <Nav.Link href="/facilities">FACILITIES</Nav.Link>
                <Nav.Link href="/contactUs">CONTACT US</Nav.Link>
                <Nav.Link href="/aboutpage">ABOUT US</Nav.Link>
                <Form inline className="mr-3 ml-4">
                  <InputGroup size="sm" className="input-group-custom">
                    <FormControl
                      className="search-input"
                      type="text"
                      placeholder="search"
                      size="sm"
                    />
                    <InputGroup.Append size="sm">
                      <InputGroup.Text size="sm" className="input-icon-custom">
                        <i className="fa fa-search" aria-hidden="true"></i>
                      </InputGroup.Text>
                    </InputGroup.Append>
                  </InputGroup>
                </Form>
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
            <div className="other-links d-block d-lg-none">
              <Nav className="ml-auto mr-4 nav-bar-custom font-14">

                  <h5 className="font-14 font-weight-bold header ml-2">CHECK IN:</h5>
                  <NavDropdown title="Fri Jun 5, 2020" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#">
                      Another action
                  </NavDropdown.Item>
                    <NavDropdown.Item href="#">
                      Something
                  </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#">
                      Separated link
                  </NavDropdown.Item>
                  </NavDropdown>

                <h5 className="font-14 font-weight-bold header ml-2">CHECK OUT:</h5>
                <NavDropdown title="Fri Jun 5, 2020" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>

                <h5 className="font-14 font-weight-bold header ml-2">OCCUPANCY</h5>
                <NavDropdown title="1 Room: 1 Adult/Room" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
                <NavItem>
                  <Button size="lg" className="ml-4 mr-4 btn-nav" variant="primary">CHECK AVAILABILITY</Button>
                </NavItem>
              </Nav>
            </div>
          </Navbar.Collapse>
        </Navbar>

        {/* Registration Modal */}
        <Register show={modalShow} onHide={() => setModalShow(false)} />
      </>
    );
}

export default AppHeader;