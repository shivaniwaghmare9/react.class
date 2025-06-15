
import axios from "axios";
import { useState } from "react";
const Insert=()=>{
    const[input,setInput]=useState({})
    const handleInput=(e)=>{
      let name=e.target.name;
      let value=e.target.value;
      setInput(Values=>({...Values,[name]:value}))
      console.log(input)
    }
    const handleSubmit=async()=>{
         let api="http://localhost:3000/record";
         const response=await axios.post(api,input);
         alert("data successfully inserted")
         console.log(response.data)
    }
    return(
        <>
        <h1>Insert page!!!</h1>
        Name: <input type="text" name="name" onChange={handleInput}/><br/><br/>
        Roll: <input type="text" name="rollno" onChange={handleInput}/><br/><br/>
        City: <input type="text" name="city" onChange={handleInput}/><br/><br/>
        Fees: <input type="text" name="fees" onChange={handleInput}/><br/><br/>
        <button onClick={handleSubmit}>Save!!</button>
        </>
    )
}
export default Insert;