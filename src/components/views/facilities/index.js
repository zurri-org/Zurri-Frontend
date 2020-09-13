import React from 'react';
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
                    <Card.Img variant="top" src={Bizserv} className="services" id="sev" onMouseOut={()=>{
                        let element= document.getElementById("sev");
                        element.classList.toggle("opacity");
                    }}/>
                    <Card.Body>
                        <Card.Title>Business Services</Card.Title>
                        <Card.Text>
                        In a busy working day, you may well need to have a quiet place where you can sit and work, read the day's newspapers, watch TV or concentrate on a good book.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted" id="small"></small>
                        
                       

                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={Fnb} className="services" id="sev1" onMouseOver={()=>{
                        let element= document.getElementById("sev1");
                        element.classList.toggle("opacity");
                        
                        
                    }
                        
                    } />
                    <Card.Body>
                        <Card.Title>Food and Beverages</Card.Title>
                        <Card.Text>
                        We go to great lengths to ensure good quality and we would like to give our guests the best start to the day. Therefore, we offer a delicious breakfast buffet that focuses on quality, ecology, health and, not least, good taste.{' '}
                        </Card.Text>
                    </Card.Body>
                      <Card.Footer>
                          <small className="text-muted"></small>
                      </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={Fitness} className="services" id="sev2" onMouseOver={()=>{
                        let element= document.getElementById("sev2");
                        element.classList.toggle("opacity");
                    }
                }
                         />
                    <Card.Body>
                        <Card.Title>Fitness</Card.Title>
                        <Card.Text>
                        Time for today's workout? We welcome you to our brand-new fitness which is located on the 4th floor. The room is about 60 square meters and available for all our guests.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted"></small>
                        <p id="test"></p>
                    </Card.Footer>
                    </Card>
                    
                    </CardGroup><br></br>
                    <CardGroup>
                <Card>
                    <Card.Img variant="top" src={Concierge} className="services" id="sev3" onMouseOver={()=>{
                        let element= document.getElementById("sev3");
                        element.classList.toggle("opacity");
                     }} />
                    <Card.Body>
                        <Card.Title>Concierge Services</Card.Title>
                        <Card.Text>
                        If you are in doubt about where to eat during your visit at Zurri Hotels, do not fear. By contacting the hotel reception our competent personnel can guide you to many exciting and great "hidden" eateries.

If you prefer more of the night life and a couple of drinks out on the town, we are just as well-prepared. 
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted"></small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={Transp} className="services" id="sev4" onMouseOver={()=>{
                        let element= document.getElementById("sev4");
                        element.classList.toggle("opacity");
                     }} />
                    <Card.Body>
                        <Card.Title>Transportation service</Card.Title>
                        <Card.Text>
                        If you would like a private transfer or sight-seeing, please contact the hotel directly.{' '}
                        </Card.Text>
                    </Card.Body>
                      <Card.Footer>
                          <small className="text-muted"></small>
                      </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={Room}className="services" id="sev5" onMouseOver={()=>{
                        let element= document.getElementById("sev5");
                        element.classList.toggle("opacity");
                     }} />
                    <Card.Body>
                        <Card.Title>In-Room Services</Card.Title>
                        <Card.Text>
                        As a guest at Zurri Hotels, you fall asleep behind hotel walls that cherish Danish design and retro phenomena – the ones that have passed through the nostalgic eye of a needle and once again found the way to our homes and hearts.
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
