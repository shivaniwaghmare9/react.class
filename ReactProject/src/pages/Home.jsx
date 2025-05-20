import Carousel from 'react-bootstrap/Carousel';
import img2 from "../images/blankbanner.jpg"
import img1 from "../images/banner-image.png"

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import backendUrl from '../config/backendUrl';
import { useState,useEffect} from 'react';
import axios from 'axios';
 import { useDispatch } from 'react-redux';

import { FaTruck } from "react-icons/fa";
import { MdHighQuality } from "react-icons/md";
import { MdLocalOffer } from "react-icons/md";
import { RiSecurePaymentFill } from "react-icons/ri";
import { addCart } from '../cartSlice';
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
    <Card style={{ width: '18rem' }} className="card" >
      <Card.Img variant="top" src={key.image}  id="img"/>
      <Card.Body>
        <Card.Title> <h2>{key.productname}</h2> </Card.Title>
        <Card.Text className="txt">
         Name:{key.name}<br/>
         OperatingSystem:{key.operatingsystem}<br/>
         BatteryCapacity:{key.BatteryCapacity}<br/>
         Price:{key.price}
        </Card.Text>
        <Button variant="primary" onClick={()=>{dispatch(addCart({id:key.id, name:key.name,category:key.category,  image:key.image, qnty:1,  price:key.price}))}} id="cardbtn">Add to Cart</Button>
      </Card.Body>
    </Card>
      </>
    )
   })
    return(
        <>
{/*=======================================================(Carousel)==============================================================================================================*/}
      <Carousel fade>
      <Carousel.Item>
       <img src={img1}   height="450px"/>
        <Carousel.Caption id="caption1">
           <h1 className="descrip">YOUR PRODUCTSARE GREAT</h1>
          <button className="btn1">Shop Now</button>
        </Carousel.Caption>
      </Carousel.Item>
      {/* <Carousel.Item>
      <img src={img2} alt="web" width="100%" height="450px"/>
        <Carousel.Caption id="caption">
        <h1 className="descrip1">YOUR PRODUCTSARE GREAT</h1>
          <button className="btn1">Shop Now</button>
        </Carousel.Caption>
      </Carousel.Item> */}
      
    </Carousel> 
{/*=============================================================================================================================================================================================*/}
{/*=============================================================================================================================================================================================*/}
 <div id="icon">
      <div>
        <h3><FaTruck id="icons"/>FREE DELIVERY</h3>
        <p>Consectetur adipi elit lorem ipsum dolor sit amet.</p>
      </div>
      <div>
        <h3> <MdHighQuality id="icons"/>QUALITY GUARANTEE</h3>
        <p>Dolor sit amet orem ipsu mcons ectetur adipi elit.</p>
      </div>
      <div>
       <h3><MdLocalOffer id="icons"/>DAILY OFFERS</h3> 
       <p>Amet consectetur adipi elit loreme ipsum dolor sit.</p>
        </div>
      <div>
        <h3><RiSecurePaymentFill id="icons"/>100% SECURE PAYMANT</h3>
        <p>Rem Lopsum dolor sit amet, consectetur adipi elit.</p>
        </div>
 </div>
 {/*===================================================================================================================================================================*/}
   <section>
         <h1 style={{marginLeft:"5%"}}>SMART PRODUCTS</h1>
         <div  id='cardData'>
         {ans}
       </div>
    </section>  
     
       
        

        </>
    )
}
export default Home;