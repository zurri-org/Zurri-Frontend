import React,{Component} from 'react';
import{
  Container,
  Row,
  Col
} from "react-bootstrap";


class Footer extends Component{
  render(){
    return(
      <footer className="mt-auto p-5">
      <div className="dark-nav-bar">
      <Container>
        <Row>
          <Col sm>
          <ul className="list-unstyled" >
          <li><a href="/aboutpage">About Us</a></li>
          <li><a href="/">Blog</a></li>
          <li><a href="/">Careers</a></li>
        </ul>
          </Col>
          <Col sm>
          <ul className="list-unstyled" >
          <li><a href="/allhotels">Top Hotels</a></li>
          <li><a href="/flights">Top Destinations</a></li>
          <li><a href="/">Plan your trip</a></li>
        </ul>
          </Col>
          <Col sm>
          <ul className="list-unstyled" >
          <li><a href="/">FAQS</a></li>
          <li><a href="/">Zurri Booking</a></li>
          <li><a href="/">Uganda Airlines</a></li>
        </ul>
          </Col>
          </Row>
          </Container>
        <div className="footer-bottom mt-3">
          <p id="copyright" className="text-centre"> &copy; {new Date().getFullYear()} Zurri. All rights reserved</p></div>
      </div>
    </footer>
    );
  }
}

export default Footer;
