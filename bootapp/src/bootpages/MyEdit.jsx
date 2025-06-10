import axios from "axios";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
const Edit=()=>{
    const{id}=useParams();
    const[mydata,setMydata]=useState([]);
    const loadData=async()=>{
        let api=`http://localhost:3000/employee/${id}`
        const response=await axios.get(api);
        console.log(response.data);
        setMydata(response.data)
    }
    useEffect(()=>{
     loadData()
    },[])
    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setMydata(Values=>({...Values,[name]:value}))
        console.log(mydata)
    }
    const handleSubmit=async()=>{
    let api=`http://localhost:3000/employee/${id}`
    const response=await axios.put(api,mydata);
       alert("data successfully updated!!")
    }
    return(
        <>
        <h3>Edit Employee Record!!!</h3>
        Employee Name: <input type="text" name="name" value={mydata.name} onChange={handleInput}/><br/><br/>
        Employee Number: <input type="text" name="empno"  value={mydata.empno} onChange={handleInput}/><br/><br/>
        Employee Designation: <input type="text" name="designation"  value={mydata.designation} onChange={handleInput}/><br/><br/>
        Employee Salary: <input type="text" name="salary"  value={mydata.salary} onChange={handleInput}/><br/><br/>
        <button onClick={handleSubmit}>Edit save!!</button>
          
        </>
    )
}
export default Edit;