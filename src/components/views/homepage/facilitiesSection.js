import React from "react";
import { Row, Container, Col, Card, Button } from "react-bootstrap";
import hotelImage from "../../../assets/img/bg1.jpg";

const FacilitiesSection = () => {
    const appartments = [
        { name: "Swimming Pool" },
        { name: "Accomodation" },
        { name: "Restaurant" }
    ];
    return (
        <section className="section">
            <Row className="mt-4 mb-8">
                <h1 className="mt-4 section-header">Facilities</h1>
            </Row>
            <Container className="mt-3 mb-4 text-center">
                <Row>
                    {appartments.map((appartment, index) => (
                        <Col sm={6} md={4} className="mb-4" key={index}>
                            <Card className="rooms-card">
                                <Card.Img variant="top" src={hotelImage} />
                                <Card.Body>
                                    <Card.Text>
                                        {appartment.name}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
                <Button size="sm" className="mt-4 mb-4 custom-btn">View All</Button>
            </Container>
        </section>
    )
}
export default FacilitiesSection;
