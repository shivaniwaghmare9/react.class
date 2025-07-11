
import Table from 'react-bootstrap/Table';
import { useState,useEffect } from "react";
import axios from 'axios';
const  Display=()=>{
    const[mydata,setMydata]=useState([])
    const loadData=async()=>{
        let api="http://localhost:3000/product";
        const response=await axios.get(api)
        setMydata(response.data)
        console.log(response.data)
    }
    useEffect(()=>{
        loadData();
    },[])
    let sno=0;
    const ans=mydata.map((key)=>{
        sno++;
        return(
            <>
             <tr>
                <td>{sno}</td>
                <td>{key.name}</td>
                <td>{key.productno}</td>
                <td>{key.productname}</td>
                <td>{key.qty}</td>
                <td>{key.price}</td>
             </tr>
            </>
        )
    })
    return(
        <>
        <h1>Display data!!</h1>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>Sno</th>
          <th>Customber Name</th>
          <th>Product NO</th>
          <th>Product Name</th>
          <th>Product Qty</th>
          <th>Net Price</th>
        </tr>
      </thead>
      <tbody>
        {ans}
      </tbody>
      </Table>

        </>
    )
}
export default Display;