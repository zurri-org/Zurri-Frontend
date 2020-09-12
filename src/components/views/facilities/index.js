import React from 'react'
import { Container, Jumbotron, Card, CardGroup} from 'react-bootstrap';
import CardImage from "../../../assets/img/card.jpeg";
import Bizserv from "../../../assets/img/bizserv.jpeg";
import Fnb from "../../../assets/img/f&b.jpg";
import Fitness from "../../../assets/img/fitness.jpg";
import Room from "../../../assets/img/room.jpg";
import Transp from "../../../assets/img/transp.jpg";
import Concierge from "../../../assets/img/concierge.jpg";

const Facilities = () => {
    return (
        <Container>
            <div className="background2"></div>
            <Card style={{ width: '30rem'}}>
                <Card.Body>
                    <Card.Title>Safe to visit</Card.Title>
                    <img src={CardImage} className="cardImage"/>
                </Card.Body>
            </Card>
            <div className="cardText">
                
                <p>As a result of the recent pandemic we are all still trying to recover from, extreme health care has been put into consideration.
                    Necessary fumigation and sanitization processes have also taken place
                    and we are proud to say that, our facilities are 100% safe to visit
                </p>
            </div>
            <Jumbotron className="mt-3">
                <h1>Overview of Facilities and Services</h1>
            </Jumbotron>
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src={Bizserv} className="services" />
                    <Card.Body>
                        <Card.Title>Business Services</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted"></small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={Fnb} className="services" />
                    <Card.Body>
                        <Card.Title>Food and Beverages</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to additional
                            content.{' '}
                        </Card.Text>
                    </Card.Body>
                      <Card.Footer>
                          <small className="text-muted"></small>
                      </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={Fitness} className="services" />
                    <Card.Body>
                        <Card.Title>Fitness</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This card has even longer content than the first to
                            show that equal height action.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted"></small>
                    </Card.Footer>
                    </Card>
                    
                    </CardGroup><br></br>
                    <CardGroup>
                <Card>
                    <Card.Img variant="top" src={Concierge} className="services" />
                    <Card.Body>
                        <Card.Title>Concierge Services</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted"></small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={Transp} className="services" />
                    <Card.Body>
                        <Card.Title>Transportation service</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to additional
                            content.{' '}
                        </Card.Text>
                    </Card.Body>
                      <Card.Footer>
                          <small className="text-muted"></small>
                      </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={Room} className="services" />
                    <Card.Body>
                        <Card.Title>In-Room Services</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This card has even longer content than the first to
                            show that equal height action.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted"></small>
                    </Card.Footer>
                    </Card>
                    
                    </CardGroup>
        </Container>
    )
}

export default Facilities;
