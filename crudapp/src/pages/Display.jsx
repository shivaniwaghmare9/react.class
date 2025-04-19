

import axios from "axios";
import { useState,useEffect } from "react";
import Table from 'react-bootstrap/Table';
const Display=()=>{
    const[myData,setMydata]=useState([]);
    const loadData=async()=>{
        let api="http://localhost:3000/Info";
        const response=await axios.get(api);
        console.log(response.data);
        setMydata(response.data);
    }
    useEffect(()=>{
        loadData();
    },[])
    let sno=0;
    const Record=myData.map((key)=>{
        sno++;
        return(
            <>
             <tr>
                <td>{sno}</td>
                <td>{key.name}</td>
                <td>{key.rollno}</td>
                <td>{key.subject}</td>
                <td>{key.university}</td>
             </tr>
            </>
        )
    })
    return(
        <>
         <h1>Display Page!!</h1>
         <Table striped bordered hover>
      <thead>
        <tr>
          <th>Sno</th>
          <th>Name</th>
          <th>Rollno</th>
          <th>Subject</th>
          <th>University</th>
        </tr>
      </thead>
      <tbody>
        {Record}
      </tbody>
      </Table>
        </>
    )
}
export default Display;