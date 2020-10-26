import React from "react";
import { Jumbotron, Container, Row, Col } from "react-bootstrap";
const Aboutpage = () => {
    return (
      <div>
        <div className="background"></div>
          <Jumbotron fluid>
            <Row className="justify-content-center">
                <Col md={6}>
              <h1>Mission</h1>
              <p>Our mission and vision is to bring tourism to you</p>
              <p>
                It is with great pleasure that we offer you this medium through
                which you can explore any tourist centre of your choice just by
                swiping your fingers
              </p>
              <p>
                You no longer have to worry about trial and error when it comes
                to hotel reservations. we bring to you the best hotel listings
                and other tourist centres
              </p>
              <p>Your first choice can indeeed be your best choice!</p>
              </Col>
            </Row>
            <Row className="justify-content-center">
                <Col md={6}>
              <h2>Our Story</h2>
              <p>
                Zurri was inspired by the Build For SDG Cohort 2 program hosted by
                facebook and Andela, 2020
              </p>
              <p>
                We are young enthusiastic programmers who are so keen on making
                a difference in the world, starting from Africa
              </p>
              <p>
                We are an elite group of individuals spread out in different
                parts of Africa, especially in the east and west of africa
              </p>
              <p>
                As a result of diversity in our ethnicity, school of thoughts,
                and lifestyles, we bring the most peculiarity to everything we
                do!
              </p>
              </Col>
            </Row>
          </Jumbotron>
        <div id="mission">
          <div className="profiles">
              <h1>The Team</h1>
              <div className="my-3">
            <ul>
              <li>
                <img
                  src="https://ca.slack-edge.com/T018L7UGPSR-U0195DC21SM-0285874fc8c8-512"
                  alt="Team Member"
                />
                <br />
                <p> Bonstana</p>
              </li>
              <li>
                <img
                  src="https://ca.slack-edge.com/T018L7UGPSR-U018PBW0F5L-240b3a9dc674-512"
                  alt="Team Member"
                />
                <br />
                <p> Emmanuella Okorie</p>
              </li>
              <li>
                <img
                  src="https://ca.slack-edge.com/T018L7UGPSR-U018E1ALS9M-a3a5251b426a-512"
                  alt="Team Member"
                />
                <br />
                <p> Kulaba Bryan</p>
              </li>
              <li>
                <img
                  src="https://ca.slack-edge.com/T018L7UGPSR-U01986DH34Z-fbbe1a8c9fb5-512"
                  alt="Team Member"
                />
                <br />
                <p> Mutebi Nuhu</p>
              </li>
              <li>
                <img
                  src="https://ca.slack-edge.com/T018L7UGPSR-U018ZPC46NQ-34b7043ec961-512"
                  alt="Team Member"
                />
                <br />
                <p> Ronnie Lutaro</p>
              </li>
              <li>
                <img
                  src="https://ca.slack-edge.com/T018L7UGPSR-U01917JPGJ0-ad62b037cf26-512"
                  alt="Team Member"
                />
                <br />
                <p> Ampaire Phemia</p>
              </li>
            </ul>
            </div>
          </div>
        </div>
      </div>
    );
};
export default Aboutpage;