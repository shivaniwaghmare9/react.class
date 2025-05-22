import { useState, useEffect } from 'react';
import BackendURL from "../config/backendUrl";
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { addCart } from '../cartSlice';
import { useDispatch } from 'react-redux';
const Search=()=>{
 const [mydata, setMydata]= useState([]);
 const dispatch = useDispatch();
 const [product, setProduct] = useState("");


 const loadData=async()=>{
    const response = await axios.get(BackendURL);
    console.log(response.data);
    setMydata(response.data);
 }
 useEffect(()=>{
    loadData();
 }, []);


const handleInput=(e)=>{
      let value=e.target.value;
      setProduct(value);
}
const ans=mydata.map((key)=>{
     let myval= product.toLocaleLowerCase();
     let mystr= key.name.toLocaleLowerCase();
     let status= mystr.includes(myval);
   
   if (status)
   {


    return(
        <>
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={key.image} />
      <Card.Body>
        <Card.Title> {key.name} </Card.Title>
        <Card.Text className="txt">
         OperatingSystem:{key.operatingsystem}<br/>
         BatteryCapacity:{key.BatteryCapacity}
         Price : {key.price}
        </Card.Text>
        <Button variant="primary" onClick={()=>{dispatch(addCart({id:key.id, name:key.name, operatingsystem:key.operatingsystem, BatteryCapacity:key.BatteryCapacity, category:key.category,  image:key.image,qnty:1,  price:key.price}))}}>Add to Cart</Button>
      </Card.Body>
    </Card>        
        </>
    )
   }  
 })

    return(
        <> 
      <h1 className="heading"> Our Latest Products</h1>
        
        <center>

       
        Enter Product Name : <input type="text" value={product}
        onChange={handleInput} id="inpt"/>
       </center>
       <br /> <br /> <br />
      <div id='cardData'>
      {ans}
      </div>     
        </>
    )
}
export default Search;