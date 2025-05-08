import Carousel from 'react-bootstrap/Carousel';
import img1 from "../images/online-shopping.jpg";
import img2 from "../images/online2.webp";
import img3 from "../images/img1.webp";
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
//====================================================(BRANDS IMAGES)==================================================================================================
import img14 from "../images/brand1.webp";
import img15 from "../images/brand2.webp";
import img16 from "../images/brand3.webp";
import img17 from "../images/brand4.webp";
import img18 from "../images/brand5.webp";
import img19 from "../images/brand6.webp";
import img20 from "../images/brand7.webp";
import img21 from "../images/brand8.webp";
import { useState } from 'react';

const Home=()=>{
  const [mydata,setMydata]=useState([]);
  const loadData=()=>{
    let BackendUrl=""
  }
    return(
        <>
            <Carousel fade>
      <Carousel.Item>
       <img src={img1}  width="100%" height="450px"/>
        <Carousel.Caption id="caption1">
          <h3 className="descrip1">Smart Shopping
            <br/>Trusted by Millions
          </h3>
          <button className="btn1">Shop Now</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={img2} alt="web" width="100%" height="450px"/>
        <Carousel.Caption id="caption">
        <h3 className="descrip">Smart Shopping
            <br/>Trusted by Millions
          </h3>
          <button className="btn2">Shop Now</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       <img src={img3} alt="web" width="100%" height="450px"/> 
        <Carousel.Caption id="caption">
          <h3 className="descrip">Smart Shopping
            <br/>Trusted by Millions
          </h3>
          <button className="btn3">Shop Now</button> 
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
      <h5> <img src={img9} alt="web" /> Foot wear </h5>
      <h5> <img src={img10} alt="web" /> Home Decor  </h5>
      <h5> <img src={img11} alt="web" /> Beauty </h5>
      <h5> <img src={img12} alt="web" /> Accessories</h5>
      <h5> <img src={img13} alt="web" /> Menswear </h5>
    </div>
    {/*===========================================================================================================================================================================================*/}
                 <h1 align="center">ORIGINAL BRANDS</h1>
    <div class="product">
                    <div>
                      <img src={img14} alt="scent"/><br/><br/>
                    </div>
                    <div>
                      <img src={img15} alt="scent"/><br/><br/>
                    </div>
                    <div>
                      <img src={img16} alt="scent"/><br/><br/>
                    </div>
                    <div>
                      <img src={img17} alt="scent"/><br/><br/>
                    </div>
                    <div>
                      <img src={img18} alt="scent"/><br/><br/>
                    </div>
                    <div>
                      <img src={img19} alt="scent"/><br/><br/>
                    </div>
                    <div>
                      <img src={img20} alt="scent"/><br/><br/>
                    </div>
                    <div>
                      <img src={img21} alt="scent"/><br/><br/>
                   </div>
      </div>


            








        </>
    )
}
export default Home;