

import axios from "axios";
import { useState,useEffect } from "react"
const Display=()=>{
  const[myData,setMydata]=useState([]);
  const loadData=async()=>{
    let data="http://localhost:3000/datacollection";
    const response=await axios.get(data);
    console.log(response.data);
    setMydata(response.data);
}
  useEffect(()=>{
    loadData();
  },[]);
  const Record=myData.map((key)=>{
    return(
      <>
        <tr>
          <td>{key.name}</td>
          <td>{key.empno}</td>
          <td>{key.post} </td>
          <td>{key.salary}</td>
        </tr>
      </>
    )
  })
    return(
        <> 
          <h2>Welcome to Display page!!!</h2>
          <hr />
          <table border="1" width="500px">
            <tr>
              <th>Name</th>
              <th>Empno</th>
              <th>Post</th>
              <th>Salary</th>
            </tr>
            {Record}
          </table>

        </>
    )
}
export default Display;