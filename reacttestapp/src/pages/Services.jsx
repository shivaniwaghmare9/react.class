import axios from "axios";
import { useState,useEffect } from "react";
import Table from 'react-bootstrap/Table';


const Services=()=>{
    const[myData,setMydata]=useState([]);
    const loadData=async()=>{
        let api="http://localhost:3000/info";
        const response=await axios.get(api);
        setMydata(response.data);
        console.log(response.data);
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
                <td>{key.designation}</td>
                <td>{key.department}</td>
                <td>{key.salary}</td>
              </tr>
            </>
        )
    })
    return(
        <>
       <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>SNO</th>
          <th>Name</th>
          <th>Designation</th>
          <th>Department</th>
          <th>Salary</th>
        </tr>
      </thead>
      <tbody>
        {Record}
      </tbody>
      </Table>
         
        </>
    )
}
export default Services;