import Carousel from 'react-bootstrap/Carousel';
import img1 from "../images/img1.webp";
import img2 from "../images/hero-bg.jpg";
import img3 from "../images/myimg.avif";
/*============================================(POLICY IMAGE)===========================================================================================================*/

import img4 from "../images/returns.svg";
import img5 from "../images/cod.svg";
import img6 from "../images/lowest-price.svg";

const Home=()=>{
    return(
        <>
            <Carousel fade>
      <Carousel.Item>
       <img src={img1}  width="100%" height="450px"/>
        <Carousel.Caption id="caption">
          <h3 className="descrip">Smart Shopping
            <br/>Trusted by Millions
          </h3>
          <button className="btn1">Shop Now</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={img2} alt="web" width="100%" height="450px"/>
        <Carousel.Caption id="caption1">
        {/* <h3 className="descrip1">Smart Shopping
            <br/>Trusted by Millions
          </h3>
          <button className="btn3">Shop Now</button> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={img3} alt="web" width="100%" height="450px"/>
        <Carousel.Caption id="caption1">
        {/* <h3 className="descrip1">Smart Shopping
            <br/>Trusted by Millions
          </h3>
          <button className="btn3">Shop Now</button> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> 

  {/*============================================================================================================================================*/}
    <div id="policy">
      <h5> <img src={img4} alt="web" />7 Days Easy Return</h5>
      <h5> <img src={img5} alt="web" />Cash on Delivery</h5>
      <h5> <img src={img6} alt="web" />Lowest Prices </h5>
    </div>
    
        </>
    )
}
export default Home;