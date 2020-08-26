import React,{Component} from 'react';
import Flogo from '../../assets/img/fb.png';
import Tlogo from '../../assets/img/twitter.png';

class Footer extends Component{
  render(){
    return(
      <footer>
        <div>
          <ul>
            <li>&#169; 2020 figma inc. All rights reserved</li>
            <li><a>Privacy policy</a></li>
            <li><a>Terms of use</a></li>
            <li><a>Site map</a></li>
          </ul>
          <ul className="image">
            <li><img src={Flogo} alt="fb"/></li>
            <li><img src={Tlogo} alt="twitter"/></li>
            
            
          </ul>
        
        </div>
          

      </footer>
    );
  }
}

export default Footer;
