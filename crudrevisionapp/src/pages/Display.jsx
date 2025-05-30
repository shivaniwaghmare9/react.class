
import axios from "axios";
import { useState,useEffect } from "react";
import Table from 'react-bootstrap/Table';

const Display=()=>{
    const[myData,setMydata]=useState([]);
    const loadData=async()=>{
        let api="http://localhost:3000/cruddata";
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
                <td>{key.empno}</td>
                <td>{key.designation}</td>
                <td>{key.salary}</td>
             </tr>
            </>
        )
    })

    return(
        <>
            <h2>Welcome to Display!!!</h2>
            <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>Sno</th>
                    <th>Name</th>
                    <th>Empno</th>
                    <th>Designation</th>
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
export default Display;