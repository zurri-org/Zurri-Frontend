import React, {useState} from 'react';
import {Carousel, Button, Fade} from 'react-bootstrap';
import Rm1 from '../../../assets/img/rm1.jpg';
import Rm2 from '../../../assets/img/rm2.jpg';
import Rm3 from '../../../assets/img/rm3.jpg';
import Pool1 from '../../../assets/img/pool1 (1).jpg';
import Pool2 from '../../../assets/img/pool1 (2).jpg';
import Pool3 from '../../../assets/img/pool1 (3).jpg';
import '../../../assets/css/styles.css';



const Searchpage = ()=>{
    const [open, setOpen] = useState(false);
  
    return<>
    
<div className="carousel-grid">
    <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Rm1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Rm2}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Rm3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

    
    <div className="carousel-div">
        <h4>STANDARD</h4><br/>
        <p>Free wifi <br/>Aircooling <br/>Access to fitness centre<br/></p>
        <button
        onClick={() => {
            setOpen(!open);
            
        }}
        className="more-btn"
        aria-controls="example-fade-text"
        aria-expanded={open}
      >
        See more
      </button>

    </div>
</div>
<Fade in={open}>
        <div id="example-fade-text" className="carousel-grid" id="reveal-grid">
            <div id="reveal-text" >Our Standard Rooms are the ideal choice for you who want a price-friendly room with plenty of daylight. We have made sure to create a healthy sleeping environment, since you can adjust the temperature on the air cooling and block the light from street lamps with thick floor to ceiling curtains<br/>

Furthermore, you can look forward to a TV, bathtub with shower, and iron and ironing board.<br/> <br/> We offer Standard Rooms as both single rooms and double rooms of which the latter is made-up with either a large double bed or two separate beds.

Single room: 18 sqm and a single bed of 90 cm.<br/>
Double room: 18-20 sqm and a double bed of 180 cm or 2 beds of 90 cm.</div>
            <div className="reveal-div">
              Facilities<br/>
              <div className="icon-grid">
                <div>
                  <i className="fa fa-wifi"></i><br/>
                  <i className="fa fa-wifi"></i><br/>
                  <i className="fa fa-wifi"></i><br/>
                  <i className="fa fa-television"></i><br/>
                  <i className="fa fa-wifi"></i><br/>
                  <i className="fa fa-wifi"></i><br/>
                  <i className="fa fa-coffee"></i><br/>
                  <i className="fa fa-coffee"></i><br/>
                  <i className="fa fa-bath"></i><br/>
                </div>
                <div>
                  <ul>
                    <li> Free wifi</li>
                    <li> Air cooling</li>
                    <li> Accesss to the hotel fitness center</li>
                    <li> Tv with 36 channels</li>
                    <li> Coffee and tea Facilities </li>
                    <li> Ironing kit</li>
                    <li> Shampoo, conditioner, shower gel and body lotion</li>
                    <li> Bathub with a shower</li>
                  </ul>
                </div>
              </div>
             
            </div>
          
        </div>
      </Fade>



        <div className="Hr-line"></div>

      <div className="carousel-grid">
        <div className="carousel-div" id="grid2">
        <h4>STANDARD</h4><br/>
        <p>Free wifi <br/>Aircooling <br/>Access to fitness centre<br/></p>
        <button
        onClick={() => {
            setOpen(!open);
            
        }}
        className="more-btn"
        aria-controls="example-fade-text"
        aria-expanded={open}
      >
        See more
      </button>

    </div>

    <Carousel id="grid2">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Pool1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Pool2}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Pool3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

</div>
<Fade in={open}>
        <div id="example-fade-text" className="carousel-grid" id="reveal-grid">
            
            <div className="reveal-div">
              Facilities<br/>
              <div className="icon-grid" id="grid2">
                <div>
                  <i className="fa fa-wifi"></i><br/>
                  <i className="fa fa-wifi"></i><br/>
                  <i className="fa fa-wifi"></i><br/>
                  <i className="fa fa-television"></i><br/>
                  <i className="fa fa-wifi"></i><br/>
                  <i className="fa fa-wifi"></i><br/>
                  <i className="fa fa-coffee"></i><br/>
                  <i className="fa fa-coffee"></i><br/>
                  <i className="fa fa-bath"></i><br/>
                </div> 
                <div>
                  <ul>
                    <li> Free wifi</li>
                    <li> Air cooling</li>
                    <li> Accesss to the hotel fitness center</li>
                    <li> Tv with 36 channels</li>
                    <li> Coffee and tea Facilities </li>
                    <li> Ironing kit</li>
                    <li> Shampoo, conditioner, shower gel and body lotion</li>
                    <li> Bathub with a shower</li>
                  </ul>
                </div>
              </div>
             
            </div>
            <div id="reveal-text" >Our Standard Rooms are the ideal choice for you who want a price-friendly room with plenty of daylight. We have made sure to create a healthy sleeping environment, since you can adjust the temperature on the air cooling and block the light from street lamps with thick floor to ceiling curtains<br/>

Furthermore, you can look forward to a TV, bathtub with shower, and iron and ironing board.<br/> <br/> We offer Standard Rooms as both single rooms and double rooms of which the latter is made-up with either a large double bed or two separate beds.

Single room: 18 sqm and a single bed of 90 cm.<br/>
Double room: 18-20 sqm and a double bed of 180 cm or 2 beds of 90 cm.</div>
          
        </div>
      </Fade>

        
    </>
    
}
export default Searchpage;