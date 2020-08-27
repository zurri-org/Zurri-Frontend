import React from "react";
import {
  Navbar,
  Nav,
  InputGroup,
  Form,
  FormControl,
  Image,
  Button
} from "react-bootstrap";
import imageLogo from "../../../assets/img/logo.JPG";

const AppHeader = () => {
    return (
      <>
        <Navbar
          collapseOnSelect
          expand="lg"
          variant="light"
          className="navbar-custom"
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
              <Nav.Link href="/contactUs">CONTACTUS</Nav.Link>
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
                >
                  JOIN
                </Button>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
}

export default AppHeader;