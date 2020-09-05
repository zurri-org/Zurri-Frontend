import React from 'react'
import {
  Row, Col, Dropdown, Button
} from "react-bootstrap";
const AppNavBar = () => {
  return (
    <Row className="dark-nav-bar justify-content-md-center">
      <Col xs="6" sm="3" md="3" lg="2">
        <div className="dropdown-section mt-3 initial">
          <h5 className="font-14 font-weight-bold header ml-2">CHECK IN:</h5>
          <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              Fri Jun 5, 2020
          </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Col>
      <Col xs="6" sm="3" md="3" lg="2">
        <div className="dropdown-section mt-3 ml-3">
          <h5 className="font-14 font-weight-bold header ml-4">CHECK IN:</h5>
          <Dropdown className="ml-2">
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              Fri Jun 5, 2020
          </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Col>
      <Col xs="6" sm="3" md="3" lg="2">
        <div className="dropdown-section mt-3 ml-4">
          <h5 className="font-14 font-weight-bold header ml-4">CHECK IN:</h5>
          <Dropdown className="ml-2">
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              Fri Jun 5, 2020
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Col>
      <Col xs="6" sm="3" md="3" lg="2">
        <Button size="lg" className="check-btn" variant="info">CHECK AVAILABILITY</Button>
      </Col>
    </Row>
  );
}

export default AppNavBar;
