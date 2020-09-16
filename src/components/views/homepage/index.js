import React from "react";
import { Jumbotron, Container } from "react-bootstrap";

const HomePage = () => {
    return (
      <>
        <Container className="top-section">
          <Jumbotron>
            <h1>Home Page!</h1>
            <p>This is the space for Home page</p>
            <p>Its under development please...</p>
          </Jumbotron>
        </Container>
        <Container className="top-section">
          <Jumbotron>
            <h1>Home Page!</h1>
            <p>This is the space for Home page</p>
            <p>Its under development please...</p>
          </Jumbotron>
        </Container>
      </>
    );
}

export default HomePage;