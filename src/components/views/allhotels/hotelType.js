import React from "react";
import { Row, Container, Card, Col } from "react-bootstrap";
import hotelImage from "../../../assets/img/bg1.jpg";
const HotelType = ({ heading, sectionColor, appartments }) => {
  console.log("fetched data---",appartments.data.hotels);
  return (
    <section className={sectionColor ? "section rooms-color" : "section"}>
      <Row className="mt-4 mb-8">
        <h1 className="mt-4 section-header">{heading}</h1>
      </Row>
      <Container className="mt-3 mb-4 text-center">
        <Row>
          {appartments.data.hotels &&
            !!appartments.data.hotels.length &&
            appartments.data.hotels.map((appartment, index) => (
              <Col xs={12} sm={6} md={4} className="mb-4" key={index}>
                <Card className="rooms-card">
                  <a href="/hotel">
                    <Card.Img variant="top" src={hotelImage} />
                  </a>
                  <Card.Body>
                    <Card.Text>
                      {appartment.hotel_name}
                      <br />
                      <i className="mr-1 fa fa-star-o" aria-hidden="true"></i>
                      <i className="mr-1 fa fa-star-o" aria-hidden="true"></i>
                      <i className="mr-1 fa fa-star-o" aria-hidden="true"></i>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      </Container>
    </section>
  );
};

export default HotelType;
