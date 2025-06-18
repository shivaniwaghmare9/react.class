
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from "axios";
import { useState,useEffect } from "react";
const Display=()=>{
    const [mydata,setMydata]=useState([]);
    const loadData=async()=>{
        let api="https://mocki.io/v1/10512a17-105f-435d-a920-dce1478345bd";
        const response=await axios.get(api);
        console.log(response.data)
        setMydata(response.data)
    }
    useEffect(()=>{
        loadData()
    },[])
    const ans=mydata.map((key)=>{
        return(
            <>
            <Card style={{ width: '18rem' }} className="card">
      <Card.Body>
        <Card.Title><h4>Product Name:{key.productName}</h4></Card.Title>
        <Card.Text>
                <h6>Id:{key.serialId}</h6>
                <h6>Brandname:{key.brandName}</h6>
                <h6>Price:{key.price}</h6>
                <h6>Colo:r{key.color}</h6>
                <h6>Size:{key.size}</h6>
        </Card.Text>
        <Button variant="primary" id="cardbtn" onClick={()=>{dispatch(addCart({id:key.id, productName:key.productName, brandName:key.brandName,price:key.price, color:key.color,key:key.size}))}}>Add cart</Button>
      </Card.Body>
    </Card>
       
            </>
        )
    })
    return(
        <>
         <h3 align="center">Display Data</h3>
         <hr />
         <div id="cardData">
            {ans}
         </div>
         
        </>

    )
}
export default Display;