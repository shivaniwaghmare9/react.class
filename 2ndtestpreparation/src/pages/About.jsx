
import axios from "axios";
import { useState } from "react";
const About=()=>{
    const[input,setInput]=useState({});
    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInput(Values=>({...Values,[name]:value}));
        console.log(input);
    }
    const handleSubmit=async()=>{
        let api="http://localhost:3000/student";
        const response=await axios.post(api,input);
        alert("data successfully inserted!!")
    }
    return(
        <>
        <form>
            Enter Name: <input type="text" name="name" onChange={handleInput}/><br/><br/>
            Enter Rollno: <input type="text" name="rollno" onChange={handleInput}/><br/><br/>
            Enter City: <input type="text" name="city" onChange={handleInput}/><br/><br/>
            Enter Fees: <input type="text" name="fees" onChange={handleInput}/><br/><br/>
            <button onClick={handleSubmit}>Submit</button>
        </form>
        </>
    )
}
export default About;