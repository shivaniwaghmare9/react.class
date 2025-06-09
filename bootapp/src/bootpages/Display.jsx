
import { useState,useEffect } from "react";
import axios from "axios";
const Display=()=>{
  const[mydata,setMydata]=useState([]);
  const loadData=async()=>{
    let api="http://localhost:3000/employee";
    const response=await axios.get(api)
    console.log(response.data);
    setMydata(response.data)
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
        <td>{key.empno}</td>
        <td>{key.designation}</td>
        <td>{key.salary}</td>
       </tr>
      </>
    )
  })
    return(
        <>
        
          <h3 align="center">Display Our data</h3>
          <hr />
          <div className="data">
          <table border="1" width="500px">
            <tr>
              <th>Sno</th>
              <th>Name</th>
              <th>Empno</th>
              <th>Designation</th>
              <th>Salary</th>
            </tr>
            {ans}
          </table>

        </div>
        </>
    )
}
export default Display;