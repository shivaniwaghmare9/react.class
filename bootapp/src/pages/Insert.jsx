import { useState } from "react";
import axios from "axios";
const Insert=()=>{
    const[input,setInput]=useState({})
    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInput(Values=>({...Values,[name]:value}))
       console.log(input)
    }
    const handleSubmit=async()=>{
    let api="http://localhost:3000/employee";
    const response=await axios.post(api,input);
     console.log(response.data)
    alert("Data Successfully saved!!!")
  }

    return(
        <>
        <h3>Application Form</h3>
        Employee Name: <input type="text" name="name" onChange={handleInput}/><br/><br/>
        Employee Number: <input type="text" name="empno" onChange={handleInput}/><br/><br/>
        Employee Designation: <input type="text" name="designation" onChange={handleInput}/><br/><br/>
        Employee Salary: <input type="text" name="salary" onChange={handleInput}/><br/><br/>
        <button onClick={handleSubmit}>Save!!!</button>
        </>
    )
}
export default Insert;