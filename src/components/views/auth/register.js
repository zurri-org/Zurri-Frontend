import React from "react";
import {
    Modal,
    Button,
    Form,
    Row,
    Col
} from "react-bootstrap"

const Register = (props) => {
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            backdrop="static"
            ksyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter" className="custom-color">
                    Register
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col md="8" className="ml-auto mr-auto">
                        <Form className="register">
                            <Form.Group controlId="userName">
                                <Form.Label className="font-14 p-color">
                                    User Name
                                </Form.Label>
                                <Form.Control size="md" type="text" placeholder="Enter full name" className="custom-input" />
                            </Form.Group>
                            <Form.Group controlId="userEmail">
                                <Form.Label className="font-14 p-color">
                                    Email address
                                </Form.Label>
                                <Form.Control type="email" size="md" placeholder="Enter your email" className="custom-input"/>
                                <Form.Text className="custom-color font-12">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="userPassword">
                                <Form.Label className="font-14 p-color">Password</Form.Label>
                                <Form.Control type="password" size="md" placeholder="Password" className="custom-input"/>
                            </Form.Group>
                            <Button size="md" variant="outline-info" className="outline-custom-purple float-right" type="submit">
                                <i className="fa fa-check-circle-o" aria-hidden="true"></i> Register
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <p className="font-12">Have and account, click <a href="/" className="text-primary">here</a></p>
            </Modal.Footer>
        </Modal>
    )
}

export default Register;
