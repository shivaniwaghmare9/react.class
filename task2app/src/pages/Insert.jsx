
import axios from "axios";
import { useState } from "react";
const Insert=()=>{
      const[input,setInput]=useState({});
      const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;

        setInput((values)=>({...values,[name]:value}))
       console.log(input);
      }

      const handleSubmit=async()=>{
        let data="http://localhost:3000/datacollection";
        const response=await axios.post(data,input)
         alert("Information Succesfully Saved!!!");
         console.log(response);

      }
    return(
        <> 
          <h2>Welcome to insert page!!!</h2>
          <hr />
          Name: <input type="text"  name="name"  onChange={handleInput}/><br/><br/>
          Empno: <input type="text"  name="empno" onChange={handleInput}/><br/><br/>
          Post: <input type="text"  name="post" onChange={handleInput}/><br/><br/>
          Salary: <input type="text"  name="salary" onChange={handleInput}/><br/><br/>
          <button onClick={handleSubmit}>Submit</button>
        </>
    )
}
export default Insert;