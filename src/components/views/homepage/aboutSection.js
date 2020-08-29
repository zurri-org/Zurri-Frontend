import React from "react";
import { Container, Row, Col, Image,Button } from "react-bootstrap";
import hotelImage from "../../../assets/img/bg1.jpg";

const AboutSection = () => {
    return (
        <section className="about-section">
            <Row className="mt-4 mb-8">
                <h1 className="mt-4 section-header">ABOUT US</h1>
            </Row>
            <Container className="mt-3">
                <Row>
                    <Col sm={6}>
                        <Container className="mt-4 text-center desc">
                            <h1 className="mb-4 custom-color">Sparkel Hotel Ltd</h1>
                            <p className="font-14 p-color">
                                Lorem ipsum, or lipsum as it is sometimes 
                                known, is dummy text used in laying out print, graphic or web designs. 
                                The passage is attributed to an unknown typesetter in the 15th century
                                
                            </p>
                            <p className="font-14 p-color">
                                who is thought to have scrambled parts of Cicero's De Finibus 
                                Bonorum et Malorum for use in a type specimen book. It usually 
                                begins with:
                            </p>
                            <Button size="sm" className="mt-4 custom-btn">Read More</Button>
                        </Container>
                    </Col>
                    <Col sm={6}>
                        <Image src={hotelImage} thumbnail />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default AboutSection;
