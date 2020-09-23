import React from "react";
import { Modal, Container, Row, Col, Button } from "react-bootstrap";
import AboutSection from "./aboutSection";
import RoomSection from "./roomSection";
import BookingForm from "../BookingForm/Form";
import Facilities from "./facilities";

const HomePage = () => {
    const [show, setShow] = React.useState(false);
    return (
        <>
            <section className="row landing-section">
                <Container className="mt-3">
                    <Row>
                        <Col sm={6} xs={6} className="landing-header">
                            <div>
                                <h1 className="mt-4">Sparkle, Aluxury Hotel</h1>
                                <p className="mt-4">This is the space for Home page</p>
                                <Button size="md" className="mt-4" onClick={() => setShow(true)}>BOOK NOW</Button>
                                <Modal
                                    show={show}
                                    onHide={() => setShow(false)}
                                    dialogClassName="modal-90w"
                                    aria-labelledby="example-custom-modal-styling-title"
                                >
                                <Modal.Body>
                                    <BookingForm />
                                </Modal.Body>
                                </Modal>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <AboutSection />
            <RoomSection />
            <Facilities />
        </>
    )
}

export default HomePage;