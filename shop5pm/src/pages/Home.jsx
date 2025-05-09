import Carousel from 'react-bootstrap/Carousel';
import img1 from "../images/online-shopping.jpg";
import img2 from "../images/online2.webp";
import img3 from "../images/img3.jpg";
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
//===============================================(TEMPLATE IMAGE)===============================================================================================
import  img22 from "../images/img2.webp"
//====================================================(BRANDS IMAGES)==================================================================================================
import img14 from "../images/bag2.avif";
import img15 from "../images/headphone2.jpg";
import img16 from "../images/loation.webp";
import img17 from "../images/makeup2.jpg";
import img18 from "../images/smartphone.avif";
import img19 from "../images/footwear.avif";
import img20 from "../images/purfume.avif";
import img21 from "../images/book2.webp";
//============================================(CRUD-DATA)=======================================================================================================================
import { useState,useEffect } from 'react';
import backendUrl from '../config/BackendUrl';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { addCart } from '../cartSlice';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Home=()=>{
  const [mydata,setMydata]=useState([]);
 const dispatch=useDispatch();
  const loadData= async()=>{
    const response= await axios.get(backendUrl)
    console.log(response.data);
    setMydata(response.data);
    
  }
   useEffect(()=>{
    loadData();
   },[])

   const ans=mydata.map((key)=>{
    return(
      <>
    <Card style={{ width: '18rem' }} className="card">
      <Card.Img variant="top" src={key.image}  id="img"/>
      <Card.Body>
        <Card.Title> {key.Name} </Card.Title>
        <Card.Text>
         KurtaFabric:{key.Fabric}<br/>
         {key.SleeveLength}<br/>
         SetType:{key.SetType}<br/>
          Pattern:{key.Pattern}<br/>
          Category:{key.category}<br/>
          Price : {key.price}
        </Card.Text>
        <Button variant="primary" onClick={()=>{dispatch(addCart({id:key.id, Name:key.Name, Fabric:key.Fabric, category:key.category,  image:key.image, qnty:1,  price:key.price}))}}>Add to Cart</Button>
      </Card.Body>
    </Card>
      </>
    )
   })
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
      {/* <Carousel.Item>
       <img src={img3} alt="web" width="100%" height="450px"/> 
        <Carousel.Caption id="caption">
          <h3 className="descrip">Smart Shopping
            <br/>Trusted by Millions
          </h3>
          <button className="btn3">Shop Now</button> 
        </Carousel.Caption> 
      </Carousel.Item>*/}
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
       
       <div id="template">
         <img src={img22} alt="web" />
       </div>


    {/*=======================================================================================================================================================================================================*/}
                  <h1 align="center" style={{backgroundColor:" rgba(188, 204, 209, 0.735)",marginTop:"20px"}}>ORIGINAL BRANDS</h1>
    <div className="product">
                    <div>
                      <img src={img14} alt="scent"/> <h2>Bags</h2><br/><br/>
                    </div>
                    <div>
                      <img src={img15} alt="scent"/> <h2>Electronics</h2><br/><br/>
                    </div>
                    <div>
                      <img src={img16} alt="scent"/> <h2>Personal Care</h2><br/><br/>
                    </div>
                    <div>
                      <img src={img17} alt="scent"/><h2>Make up </h2><br/><br/>
                    </div>
                    <div>
                      <img src={img18} alt="scent"/> <h2>Smart Phones</h2><br/><br/>
                    </div>
                    <div>
                      <img src={img19} alt="scent"/> <h2>Foot Wear</h2><br/><br/>
                    </div>
                    <div>
                      <img src={img20} alt="scent"/><h2>Purfume</h2> <br/><br/>
                    </div>
                    <div>
                      <img src={img21} alt="scent"/><h2> Books</h2><br/><br/>
                   </div>
      </div> 


            

     <div  id='cardData'>
      {ans}
     </div>






        </>
    )
}
export default Home;