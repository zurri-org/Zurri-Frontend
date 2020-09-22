import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import PageSection from "../../static/section";
import AboutSection from "./aboutSection";

const Hotel = () => {
    const appartments = [
        { name: "Arsenal Suits" },
        { name: "Chelsea Suits" },
        { name: "Manchester United Suits" },
    ];
    return (
      <>
        <section className="row landing-section">
          <Container className="mt-3">
            <Row>
              <Col sm={6} xs={6} className="landing-header">
                <div>
                  <h1 className="mt-4">Sparkle, Aluxury Hotel</h1>
                  <p className="mt-4">This is the space for Home page</p>
                  <Button size="md" className="mt-4">
                    BOOK NOW
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* about us section */}
        <AboutSection />
        
        {/* Reusable component sections */}
        <PageSection
          heading="ROOMS & RATES"
          sectionColor="rooms-color"
          appartments={appartments}
        />
        <PageSection
          heading="Facilities"
          sectionColor=""
          appartments={appartments}
        />
      </>
    );
}

export default Hotel;
