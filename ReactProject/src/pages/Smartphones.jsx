import { useState, useEffect } from 'react';
import axios from 'axios';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { addCart } from '../cartSlice';
import { useDispatch } from 'react-redux';

const SmartPhones=()=>{
 const [mydata, setMydata]= useState([]);
 const dispatch = useDispatch();

 const loadData=async()=>{
    
    const response = await axios.get("http://localhost:3000/products/?productname=SmartPhone");
    console.log(response.data);
    setMydata(response.data);
 }

 useEffect(()=>{
    loadData();
 }, []);

 const ans=mydata.map((key)=>{
    return(
        <>
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={key.image} />
      <Card.Body>
        <Card.Title> {key.productname} </Card.Title>
        <Card.Text className="txt">
         Name:{key.name}<br/>
         OperatingSystem:{key.operatingsystem}<br/>
         BatteryCapacity:{key.BatteryCapacity}
         Price : {key.price}
        </Card.Text>
        <Button variant="primary" onClick={()=>{dispatch(addCart({id:key.id, name:key.name, operatingsystem:key.operatingsystem, BatteryCapacity:key.BatteryCapacity,  image:key.image,qnty:1,  price:key.price}))}} id="cardbtn">Add to Cart</Button>
      </Card.Body>
    </Card>
        
        </>
    )
 })

return(
        <>

           

      <h1 className="heading"> Our Latest SmartPhones</h1>
      <div id='cardData'>
      {ans}
      </div>
      
        </>
    )
}

export default SmartPhones;