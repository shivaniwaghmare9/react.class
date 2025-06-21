

import Table from 'react-bootstrap/Table';
import { useState,useEffect } from "react";
import axios from 'axios';

const Total=()=>{
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
    
    const totalQty= mydata.reduce((acc,key)=> acc +parseInt(key.qty),0);
    let  totalcount=0;
   let sno=0;
    const ans=mydata.map((key)=>{
        sno++;
        
        totalcount+=key.qty*key.price
        return(
            <>
             <tr>
                <td>{sno}</td>
                <td>{key.name}</td>
                <td>{key.productno}</td>
                <td>{key.productname}</td>
                <td>{key.qty}</td>
                <td>{key.price}</td>
                <td>
                    {key.qty*key.price}
                </td>
                
                    
             </tr>
            </>
        )
    })
    return(
        <>
        <h1>Display data!!</h1>
        <h2>Total:{totalcount}</h2>
        <h3>TotalProduct:{totalQty}</h3>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>Sno</th>
          <th>Customber Name</th>
          <th>Product NO</th>
          <th>Product Name</th>
          <th>Product Qty</th>
          <th>Net Price</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {ans}
      </tbody>
      </Table>

        </>
    )
}

export default Total;

//================================================second method===========================================================================================================================

// import { useState,useEffect } from "react";
// import axios from "axios";
// const Total=()=>{
//   const[totalQty,setTotalQty]=useState(0);
//   const[totalPrice,setTotalPrice]=useState(0);
//   useEffect(()=>{
//        axios.get("http://localhost:3000/product")
//        .then((res)=>{
//         const product=res.data;

//         const totalQuantity= product.reduce((sum,key)=>sum +parseInt(key.qty),0)

//          const totalSellingPrice= product.reduce((sum,key)=>sum +parseInt(key.qty)*parseInt(key.price),0)

//          setTotalQty(totalQuantity);
//          setTotalPrice(totalSellingPrice.toFixed(2));
//        })
//   },[])   
//   return(
//     <>
//      <h3>Inventory Totals</h3>
//      <p><b>Total Quantity:{totalQty}</b></p>
//      <p><b>Total Selling Price:{totalPrice}</b></p>
//     </>
//   )
// }
// export default Total;