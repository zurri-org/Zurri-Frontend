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
          <li><a href="/">Privacy policy</a></li>
          <li><a href="/">Terms of use</a></li>
          <li><a href="/">Site map</a></li>
        </ul>
          </Col>
          <Col sm>
          <ul className="list-unstyled" >
          <li><a href="/">Privacy policy</a></li>
          <li><a href="/">Terms of use</a></li>
          <li><a href="/">Site map</a></li>
        </ul>
          </Col>
          <Col sm>
          <ul className="list-unstyled" >
          <li><a href="/">Privacy policy</a></li>
          <li><a href="/">Terms of use</a></li>
          <li><a href="/">Site map</a></li>
        </ul>
          </Col>
          </Row>
          </Container>
        <div className="footer-bottom mt-3">
          <p id="copyright" className="text-centre"> &copy; {new Date().getFullYear()} figma inc. All rights reserved</p></div>
      </div>
    </footer>
    );
  }
}

export default Footer;
