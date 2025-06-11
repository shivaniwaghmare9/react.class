import axios from "axios";
import { useState,useEffect } from "react";

const Display=()=>{
    const[mydata,setMydata]=useState([]);
    const loadData=async()=>{
        let api="http://localhost:3000/students";
        const response=await axios.get(api);
        setMydata(response.data);
        console.log(response.data);
    }
    useEffect(()=>{
        loadData();
    },[])
    let sno=0;
    const show=mydata.map((key)=>{
        sno++;
        return(
            <>
            <tr>
              <td>{sno}</td>
              <td>{key.name}</td>
              <td>{key.rollno}</td>
              <td>{key.city}</td>
              <td>{key.fees}</td>
            </tr>
            </>
        )
    })
    return(
        <>
        <h1>Display data!!!</h1>
        <hr />
        <table border="1" width="500px">
            <tr>
                <th>Sno</th>
                <th>Name</th>
                <th>Rollno</th>
                <th>City</th>
                <th>Fees</th>
            </tr>
            {show}
        </table>
        </>
    )
}
export default Display;