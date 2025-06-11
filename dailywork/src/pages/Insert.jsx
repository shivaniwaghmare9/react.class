import axios from "axios";
import { useState } from "react"


const Insert=()=>{
    const[input,setInput]=useState({});
    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInput(Values=>({...Values,[name]:value}))
        console.log(input)
    }
    const handleSubmit=async()=>{
        let api="http://localhost:3000/students";
        const response=await axios.post(api,input);
        console.log(response.data);
        alert("data successfully inserted!!")
    }

    return(
        <>
           <h1>Insert data!!!</h1>
           Enter Name: <input type="text" name="name" onChange={handleInput}/><br/><br/>
           Enter Rollno: <input type="text" name="rollno" onChange={handleInput}/><br/><br/>
           Enter City: <input type="text" name="city" onChange={handleInput}/><br/><br/>
           Enter Fees: <input type="text" name="fees" onChange={handleInput}/><br/><br/>
           <button onClick={handleSubmit}>Save!!</button>
        </>
    )
}
export default Insert;