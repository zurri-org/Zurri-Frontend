import React from 'react'
import {
    Navbar,
    Nav,
    NavDropdown,
    NavItem,
    Button
} from "react-bootstrap";
const AppNavBar = () => {
    return (
      <div className="dark-nav-bar d-none d-lg-block">
        <Navbar collapseOnSelect expand="lg" variant="dark">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="pr-4">
            <Nav className="ml-auto">
              <NavItem className="dropdown-section pr-4">
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
              </NavItem>
              <NavItem className="dropdown-section pl-4">
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
              </NavItem>
              <NavItem className="dropdown-section pl-4">
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
              </NavItem>
            </Nav>
            <NavItem>
              <Button size="lg" className="ml-4 mr-4" variant="primary">CHECK AVAILABILITY</Button>
            </NavItem>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
}

export default AppNavBar;
