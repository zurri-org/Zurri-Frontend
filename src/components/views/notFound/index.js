import React from "react";
import {Container, Jumbotron} from "react-bootstrap";

const NotFound = () => {
    return (
        <Container>
            <Jumbotron className="mt-3">
                <h1>Page Not Found !</h1>
                <p>Please<a href="/">click here</a> to Home Page</p>
                <p>Thanks...</p>
            </Jumbotron>
        </Container>
    );
}

export default NotFound;