import React,{Component} from 'react';
import Flogo from '../../../assets/img/fb.png';
import Tlogo from '../../../assets/img/twitter.png';
import{
  Container,
  Row,
  Col
} from "react-bootstrap";


class Footer extends Component{
  render(){
    return(
      <footer className="mt-auto">
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
       
        
        <div className="footer-bottom">
          <p id="copyright" className="text-xs-centre"> &copy; {new Date().getFullYear()} figma inc. All rights reserved</p></div>
      </div>
    </footer>
    );
  }
}

export default Footer;
