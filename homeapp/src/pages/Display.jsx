
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
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
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
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>

      </tbody>
      </Table>

        </>
    )
}
export default Display;