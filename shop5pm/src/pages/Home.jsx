import Carousel from 'react-bootstrap/Carousel';
import img1 from "../images/img1.webp";
import img2 from "../images/hero-bg.jpg";
import img3 from "../images/myimg.avif";
/*============================================(POLICY IMAGE)===========================================================================================================*/

import img4 from "../images/returns.svg";
import img5 from "../images/cod.svg";
import img6 from "../images/lowest-price.svg";
/*============================================(ITEMS IMAGE)===========================================================================================================*/

import img7 from "../images/item1.webp";
import img8 from "../images/item2.webp";
import img9 from "../images/item3.webp";
import img10 from "../images/item4.webp";
import img11 from "../images/item5.webp";
import img12 from "../images/item6.webp";
import img13 from "../images/item7.webp";

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
      {/* <img src={img2} alt="web" width="100%" height="450px"/> */}
        <Carousel.Caption id="caption1">
        {/* <h3 className="descrip1">Smart Shopping
            <br/>Trusted by Millions
          </h3>
          <button className="btn3">Shop Now</button> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      {/* <img src={img3} alt="web" width="100%" height="450px"/> */}
        <Carousel.Caption id="caption1">
        {/* <h3 className="descrip1">Smart Shopping
            <br/>Trusted by Millions
          </h3>
          <button className="btn3">Shop Now</button> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> 

  {/*===========================================(POLICY)=================================================================================================*/}
    <div id="policy">
      <h5> <img src={img4} alt="web" />7 Days Easy Return</h5>
      <h5> <img src={img5} alt="web" />Cash on Delivery</h5>
      <h5> <img src={img6} alt="web" />Lowest Prices </h5>
    </div>

    {/*===========================================(ITEMS)=================================================================================================*/}
    <div id="items">
      <h5> <img src={img7} alt="web" />Ethnic Wear</h5>
      <h5> <img src={img8} alt="web" />Western Dresses</h5>
      <h5> <img src={img9} alt="web" /> Footwear </h5>
      <h5> <img src={img10} alt="web" /> Home Decor  </h5>
      <h5> <img src={img11} alt="web" /> Beauty </h5>
      <h5> <img src={img12} alt="web" /> Accessories</h5>
      <h5> <img src={img13} alt="web" /> Menswear </h5>
    </div>
    
        </>
    )
}
export default Home;