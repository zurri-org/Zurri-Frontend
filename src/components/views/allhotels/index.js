import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  Row,
  Form,
  Button,
  Col,
  Container,
  Jumbotron,
  Card,
} from "react-bootstrap";
import { fetchHotels } from "../../../actions/hotelsActions";
import HotelType from "./hotelType";
const AllHotels = ({
  hotel_data,
  loading,
  hotel_error,
  notifier,
  fetchHotels,
  props,
}) => {
  useEffect(() => {
    fetchHotels();
  }, [fetchHotels]);
  const appartments = [
    { name: "Arsenal Suits" },
    { name: "Chelsea Suits" },
    { name: "Manchester United Suits" },
  ];
  const [field, setField] = useState("");
  const [error, setError] = useState(false);
  const handleField = (e) => {
    setField(e.target.value);
    setError(false);
  };
  const handleRoute = () => {
    if (field.length > 4) {
      props.history.push("/searchLandingPage");
    } else {
      setError(true);
      alert("search bar cannot be empty");
    }
  };
  return (
    <>
      <Row className="text-center d-block home-search mb-4">
        <h4>HOTELS, RESORTS, MOTELS&MORE</h4> <br />
        <span>
          Find the best prices and spots out of thousands within Uganda
        </span>
        <Col md={6} className="mx-auto">
          <Form inline className="mx-auto search-form mt-4">
            <Form.Control
              className="mr-sm-2 mb-2 custom-input home-input"
              id="search"
              placeholder="Find Hotel, Resort, Hostel,......"
              size="lg"
              value={field}
              style={{ borderColor: error ? "red" : "black" }}
              onChange={(e) => {
                handleField(e);
              }}
            />
            <Button
              type="submit"
              className="mb-2 custom-btn-block no-border-radius"
              onClick={handleRoute}
              size="bg">
              SEARCH
            </Button>
          </Form>
        </Col>
      </Row>
      {loading === "Loading" ? (
        <Jumbotron fluid className="top-section mb-4 mr-auto ml-auto">
          <Container>
            <h1>Loading......</h1>
            <p>Please wait</p>
          </Container>
        </Jumbotron>
      ) : (
        <>
          <section className="section rooms-color">
            <Row className="mt-4 mb-8">
              <h1 className="mt-4 section-header">HOTELS</h1>
            </Row>
            <Container className="mt-3 mb-4 text-center">
              <Row>
                {hotel_data.data !== undefined &&
                  hotel_data.data.hotels.map((appartment, index) => (
                    <Col xs={12} sm={6} md={4} className="mb-4" key={index}>
                      <Card className="rooms-card">
                        <a href="/hotel">
                          <Card.Img
                            variant="top"
                            src={appartment.image ? appartment.image.url : null}
                          />
                        </a>
                        <Card.Body>
                          <Card.Text>
                            {appartment.hotel_name}
                            <br />
                            <i
                              className="mr-1 fa fa-star-o"
                              aria-hidden="true"></i>
                            <i
                              className="mr-1 fa fa-star-o"
                              aria-hidden="true"></i>
                            <i
                              className="mr-1 fa fa-star-o"
                              aria-hidden="true"></i>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
              </Row>
            </Container>
          </section>
          <HotelType
            heading="RESORTS"
            sectionColor=""
            appartments={appartments}
          />
          <HotelType
            heading="MOTELS"
            sectionColor="rooms-color"
            appartments={appartments}
          />
        </>
      )}
    </>
  );
};

const mapStateToProps = ({ Hotel }) => {
  console.log(Hotel);
  const { hotel_data, loading, hotel_error, notifier } = Hotel;
  return { hotel_data, loading, hotel_error, notifier };
};

export default connect(mapStateToProps, { fetchHotels })(AllHotels);
