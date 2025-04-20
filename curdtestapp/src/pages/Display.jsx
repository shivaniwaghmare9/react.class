
import axios from "axios";
import { useState,useEffect } from "react";
import Table from 'react-bootstrap/Table';

const Display=()=>{
    const[myData,setMydata]=useState([]);
    const loadData=async()=>{
        let api="http://localhost:3000/record";
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
                <td>{key.age}</td>
                <td>{key.city}</td>
                <td>{key.course}</td>
            </tr>
            </>
        )
    })
    return(
        <>
          <h1 id="compo">Display Page!!!</h1>
          <Table striped bordered hover   id="tbl">
      <thead >
        <tr >
          <th>Sno</th>
          <th>Name</th>
          <th>Age</th>
          <th>City</th>
          <th>Course</th>
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