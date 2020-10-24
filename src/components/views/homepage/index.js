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
import mapImage from "../../../assets/img/mapsnip.JPG";
import airImage from "../../../assets/img/airsnip.JPG";
import panelImage from "../../../assets/img/panel.JPG";

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
                    Find Flights From Uganda
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
                            placeholder="City or Airport"
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
                            placeholder="City or Airport"
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
                                className="fa fa-calendar"
                                aria-hidden="true"
                              ></i>
                            </InputGroup.Text>
                          </InputGroup.Prepend>
                          <Form.Control
                            size="md"
                            className="home-input custom-input"
                            placeholder="Departure date"
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
                                className="fa fa-calendar"
                                aria-hidden="true"
                              ></i>
                            </InputGroup.Text>
                          </InputGroup.Prepend>
                          <Form.Control
                            size="md"
                            className="home-input custom-input"
                            placeholder="Arrival date"
                          />
                        </InputGroup>
                      </Col>
                    </Form.Row>
                    <Form.Row className="mt-2">
                      <Col>
                        <Form.Label className="font-13 text-mute">
                          Travelers:
                        </Form.Label>
                        <InputGroup>
                          <InputGroup.Prepend>
                            <InputGroup.Text className="home-prepend font-12">
                              <i
                                className="fa fa-arrow-down"
                                aria-hidden="true"
                              ></i>
                            </InputGroup.Text>
                          </InputGroup.Prepend>
                          <Form.Control
                            className="home-input custom-input"
                            placeholder="2, First class"
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
                                className="fa fa-calendar"
                                aria-hidden="true"
                              ></i>
                            </InputGroup.Text>
                          </InputGroup.Prepend>
                          <Form.Control
                            size="md"
                            className="home-input custom-input"
                            placeholder="Check in date"
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
                                className="fa fa-calendar"
                                aria-hidden="true"
                              ></i>
                            </InputGroup.Text>
                          </InputGroup.Prepend>
                          <Form.Control
                            size="md"
                            className="home-input custom-input"
                            placeholder="Check out date"
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
                            placeholder="Guests"
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

      <Row>
        <Col md={12}>
          <Row className="pr-3 m-5">
            <Col md={5} sm={5} className="ml-auto d-flex flex-column">
              <div className="text-right m-auto">
                <h2 className="custom-color">Connecting All Ends Of </h2>
                <h2 className="custom-color">
                  The World To <span className="home-color">Uganda</span>
                </h2>
              </div>
              <a href="javascript: void(0)" className="btn btn-outline-success">
                Book a Flight
              </a>
            </Col>
            <Col md={5} sm={5} className="mr-auto">
              <img
                src={mapImage}
                alt="Map Illustration"
                className="mr-4 mt-4 img-fluid"
              />
            </Col>
          </Row>
        </Col>
        <Col md={12}>
          <Row className="m-5">
            <Col md={6} sm={6} className="ml-auto">
              <img
                src={airImage}
                className="img-fluid"
                alt="Air Illustration"
              />
            </Col>
            <Col md={4} sm={4} className="mr-auto d-flex flex-column">
              <div className="text-left m-auto">
                <h2 className="custom-color">Making Your Travel</h2>
                <h2 className="custom-color">Plans Easy And</h2>
                <h2 className="home-color">Seamless</h2>
              </div>
              <a href="javascript: void(0)" className="btn btn-outline-success">
                Make Hotel Reservation
              </a>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className="justify-content-center m-5">
        <Col md={12} className="text-center mb-3">
          <h2>Most Visted Places</h2>
        </Col>
        <Col md={8} className="m-auto">
          <Row className="justify-content-center text-center">
            <Col md={3} sm={3} className="mr-4 d-flex mt-1 mb-2 custom-div">
              <div className="text-right m-auto">
                <h3>Kampala</h3>
              </div>
            </Col>
            <Col md={3} sm={3} className="mr-4 d-flex mt-1 mb-2 custom-div">
              <div className="text-right m-auto">
                <h3>Entebbe</h3>
              </div>
            </Col>
            <Col md={3} sm={3} className="mr-4 d-flex mt-1 mb-2 custom-div">
              <div className="text-right m-auto">
                <h3>Jinja</h3>
              </div>
            </Col>
            <Col md={3} sm={3} className="mr-4 d-flex mt-1 mb-2 custom-div">
              <div className="text-right m-auto">
                <h3>Mbale</h3>
              </div>
            </Col>
            <Col md={3} sm={3} className="mr-4 d-flex mt-1 mb-2 custom-div">
              <div className="text-right m-auto">
                <h3>Fort Portal</h3>
              </div>
            </Col>
            <Col md={3} sm={3} className="mr-4 d-flex mt-1 mb-2 custom-div">
              <div className="text-right m-auto">
                <h3>The Rwenzori</h3>
              </div>
            </Col>
            <Col md={3} sm={3} className="mr-4 d-flex mt-1 mb-2 custom-div">
              <div className="text-right m-auto">
                <h3>Karamoja</h3>
              </div>
            </Col>
            <Col md={3} sm={3} className="mr-4 d-flex mt-1 mb-2 custom-div">
              <div className="text-right m-auto">
                <h3>Gulu</h3>
              </div>
            </Col>
            <Col md={3} sm={3} className="mr-4 d-flex mt-1 mb-2 custom-div">
              <div className="text-right m-auto">
                <h3>Arua</h3>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className="m-5">
        <Col md={12}>
          <Row>
            <Col md={6} sm={6} className="ml-auto">
              <img
                src={panelImage}
                className="img-fluid"
                alt="Air Illustration"
              />
            </Col>
            <Col md={4} sm={4} className="mr-auto d-flex flex-column">
              <div className="text-left m-auto">
                <h2 className="custom-color">Are You Failing To Plan For</h2>
                <h2 className="custom-color">
                  Your Journey, Let Us <span className="home-color">Help</span>
                </h2>
              </div>
              <a href="javascript: void(0)" className="btn btn-outline-success">
                Plan Your Trip With Us
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default HomePage;
