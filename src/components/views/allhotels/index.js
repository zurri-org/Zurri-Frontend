import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Row, Form, Button, Col } from "react-bootstrap";
import { fetchHotels } from "../../../actions/hotelsActions";
import HotelType from "./hotelType";
const AllHotels = ({
  hotel_data,
  loading,
  hotel_error,
  notifier,
  fetchHotels,
}) => {
  useEffect(() => {
    fetchHotels();
  }, [fetchHotels]);
  const appartments = [
    { name: "Arsenal Suits" },
    { name: "Chelsea Suits" },
    { name: "Manchester United Suits" },
  ];
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
              className="mr-sm-2 mb-2 no-border-radius"
              id="search"
              placeholder="Find Hotel, Resort, Hostel,......"
              size="lg"
            />
            <Button
              type="submit"
              className="mb-2 custom-btn-block no-border-radius"
              size="bg"
            >
              SEARCH
            </Button>
          </Form>
        </Col>
      </Row>

      {/* Reusable component sections */}
      <HotelType
        heading="HOTELS"
        sectionColor="rooms-color"
        appartments={appartments}
      />
      <HotelType heading="RESORTS" sectionColor="" appartments={appartments} />
      <HotelType
        heading="MOTELS"
        sectionColor="rooms-color"
        appartments={appartments}
      />
    </>
  );
};

const mapStateToProps = ({Hotel}) => {
  console.log(Hotel);
  const { hotel_data, loading, hotel_error, notifier } = Hotel;
  return { hotel_data, loading, hotel_error, notifier };
  
}

export default connect(mapStateToProps, { fetchHotels })(AllHotels);
