import { useState, useEffect } from 'react';
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
    const api=`https://mocki.io/v1/10512a17-105f-435d-a920-dce1478345bd/?productName=${mydata}`
    const response = await axios.get(api);
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
     return(
        <>
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={key.image} />
      <Card.Body>
        <Card.Title><h4>Product Name:{key.productName}</h4></Card.Title>
        <Card.Text className="txt">
               <h6>Id:{key.serialId}</h6>
                <h6>Brandname:{key.brandName}</h6>
                <h6>Price:{key.price}</h6>
                <h6>Colo:r{key.color}</h6>
                <h6>Size:{key.size}</h6>
        </Card.Text>
        <Button variant="primary" onClick={()=>{dispatch(addCart({id:key.id, productName:key.productName, brandName:key.brandName,price:key.price, color:key.color,key:key.size}))}} id="cardbtn">Add to Cart</Button>
      </Card.Body>
    </Card>        
        </>
    )
   
 })

    return(
        <> 
      <h1 className="heading">Products</h1>
        
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