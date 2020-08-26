import React, {useState} from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const AppHeader = () => {
      const [isOpen, setIsOpen] = useState(false);

      const toggle = () => setIsOpen(!isOpen);
    return (
      <>
        <div>
          <Navbar color="faded" light expand="md">
            <NavbarBrand href="/">
              Logo
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="ml-auto" navbar>
                {/* <NavItem>
                  <NavLink href="/components/">Components</NavLink>
                </NavItem> */}
                <NavItem>
                  <NavLink href="/">HOME</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/rooms&rates">ROOMS&RATES</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/facilities">FACILITIES</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/contactUs">CONTACT US</NavLink>
                </NavItem>
                {/* <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Options
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>Option 1</DropdownItem>
                    <DropdownItem>Option 2</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Reset</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown> */}
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      </>
    );
}

export default AppHeader;