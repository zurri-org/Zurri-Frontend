import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Form,
  InputGroup,
} from "react-bootstrap";

const HomePage = () => {
  return (
    <>
      <section className="row home-section">
        <Container className="mt-4 d-inline">
          <Row>
            <Col sm={5} xs={12} md={5} className="mx-auto">
              <Card className="home-card p-4">
                <Card.Body>
                  <Card.Title className="text-center">
                    Find Flight From Uganda
                  </Card.Title>
                  <Form>
                    <Form.Row className="mt-2">
                      <Col>
                        <Form.Label className="font-13 text-mute">
                          From:
                        </Form.Label>
                        <InputGroup>
                          <InputGroup.Prepend>
                            <InputGroup.Text className="home-prepend font-12">
                              <i
                                className="fa fa-map-marker"
                                aria-hidden="true"
                              ></i>
                            </InputGroup.Text>
                          </InputGroup.Prepend>
                          <Form.Control
                            size="md"
                            className="home-input custom-input"
                            placeholder="CITY OR AIRPORT"
                          />
                        </InputGroup>
                      </Col>
                      <Col>
                        <Form.Label className="font-13 text-mute">
                          To:
                        </Form.Label>
                        <InputGroup>
                          <InputGroup.Prepend>
                            <InputGroup.Text className="home-prepend font-12">
                              <i
                                className="fa fa-map-marker"
                                aria-hidden="true"
                              ></i>
                            </InputGroup.Text>
                          </InputGroup.Prepend>
                          <Form.Control
                            size="md"
                            className="home-input custom-input"
                            placeholder="CITY OR AIRPORT"
                          />
                        </InputGroup>
                      </Col>
                    </Form.Row>
                    <Form.Row className="mt-2">
                      <Col>
                        <Form.Label className="font-13 text-mute">
                          Depart:
                        </Form.Label>
                        <InputGroup>
                          <InputGroup.Prepend>
                            <InputGroup.Text className="home-prepend font-12">
                              <i
                                className="fa fa-location-arrow"
                                aria-hidden="true"
                              ></i>
                            </InputGroup.Text>
                          </InputGroup.Prepend>
                          <Form.Control
                            size="md"
                            className="home-input custom-input"
                            placeholder="CITY OR AIRPORT"
                          />
                        </InputGroup>
                      </Col>
                      <Col>
                        <Form.Label className="font-13 text-mute">
                          Arrival:
                        </Form.Label>
                        <InputGroup>
                          <InputGroup.Prepend>
                            <InputGroup.Text className="home-prepend font-12">
                              <i
                                class="fa fa-arrow-down"
                                aria-hidden="true"
                              ></i>
                            </InputGroup.Text>
                          </InputGroup.Prepend>
                          <Form.Control
                            size="md"
                            className="home-input custom-input"
                            placeholder="CITY OR AIRPORT"
                          />
                        </InputGroup>
                      </Col>
                    </Form.Row>
                    <Form.Row className="mt-2">
                      <Col>
                        <Form.Label className="font-13 text-mute">
                          Depart:
                        </Form.Label>
                        <InputGroup>
                          <InputGroup.Prepend>
                            <InputGroup.Text className="home-prepend font-12">
                              <i
                                className="fa fa-location-arrow"
                                aria-hidden="true"
                              ></i>
                            </InputGroup.Text>
                          </InputGroup.Prepend>
                          <Form.Control
                            size="md"
                            className="home-input custom-input"
                            placeholder="FIRST CLASS"
                          />
                        </InputGroup>
                      </Col>
                      <Col className="mt-2">
                        <Button className="search-btn mt-4" size="md">
                          {" "}
                          Search
                        </Button>
                      </Col>
                    </Form.Row>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={5} xs={12} md={5} className="mx-auto">
              <Card className="home-card p-4">
                <Card.Body>
                  <Card.Title className="text-center">
                    Find Hotels In Uganda
                  </Card.Title>
                  <Form>
                    <Form.Row className="mt-2">
                      <Col>
                        <Form.Label className="font-13 text-mute">
                          Checkin:
                        </Form.Label>
                        <InputGroup>
                          <InputGroup.Prepend>
                            <InputGroup.Text className="home-prepend font-12">
                              <i
                                className="fa fa-map-marker"
                                aria-hidden="true"
                              ></i>
                            </InputGroup.Text>
                          </InputGroup.Prepend>
                          <Form.Control
                            size="md"
                            className="home-input custom-input"
                            placeholder="CITY OR AIRPORT"
                          />
                        </InputGroup>
                      </Col>
                      <Col>
                        <Form.Label className="font-13 text-mute">
                          Checkout:
                        </Form.Label>
                        <InputGroup>
                          <InputGroup.Prepend>
                            <InputGroup.Text className="home-prepend font-12">
                              <i
                                className="fa fa-map-marker"
                                aria-hidden="true"
                              ></i>
                            </InputGroup.Text>
                          </InputGroup.Prepend>
                          <Form.Control
                            size="md"
                            className="home-input custom-input"
                            placeholder="CITY OR AIRPORT"
                          />
                        </InputGroup>
                      </Col>
                    </Form.Row>
                    <Form.Row className="mt-2">
                      <Col>
                        <Form.Label className="font-13 text-mute">
                          Guests:
                        </Form.Label>
                        <InputGroup>
                          <InputGroup.Prepend>
                            <InputGroup.Text className="home-prepend font-12">
                              <i
                                className="fa fa-location-arrow"
                                aria-hidden="true"
                              ></i>
                            </InputGroup.Text>
                          </InputGroup.Prepend>
                          <Form.Control
                            size="md"
                            className="home-input custom-input"
                            placeholder="FIRST CLASS"
                          />
                        </InputGroup>
                      </Col>
                      <Col className="mt-2">
                        <Button className="search-btn mt-4" size="md">
                          {" "}
                          Search
                        </Button>
                      </Col>
                    </Form.Row>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default HomePage;
