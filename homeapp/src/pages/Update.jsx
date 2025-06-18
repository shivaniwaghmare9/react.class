
import Table from 'react-bootstrap/Table';
import { useState,useEffect } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const  Update=()=>{
    const[mydata,setMydata]=useState([])
    const navigate=useNavigate();
    const loadData=async()=>{
        let api="http://localhost:3000/product";
        const response=await axios.get(api)
        setMydata(response.data)
        console.log(response.data)
    }
    useEffect(()=>{
        loadData();
    },[])
    const dataDelete=async(id)=>{
        let api=`http://localhost:3000/product/${id}`
        const response=await axios.delete(api,mydata);
        console.log(response.data)
        alert("data successfully deleted")
        loadData();
    }
    const dataEdit=(id)=>{
        navigate(`/edit/${id}`)
    }
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
                <td>
                    <button onClick={()=>{dataEdit(key.id)}}>update</button>
                </td>
                <td>
                    <button onClick={()=>{dataDelete(key.id)}}>Delete</button>
                </td>
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
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {ans}
      </tbody>
      </Table>

        </>
    )
}
export default Update;