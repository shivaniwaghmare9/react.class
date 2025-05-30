
import axios from "axios";
import { useState } from "react";


const App=()=>{
  const[input,setInput]=useState({});
  const handleInput=(e)=>{
    let name=e.target.name;
    let value=e.target.value;

    setInput((values)=>({...values,[name]:value}))
    console.log(input);
}

const handleSubmit=async()=>{
  let api="http://localhost:3000/information";
  let response=await axios.post(api,input);
  alert("information succesfully saved!!!");
  console.log(response)
}
  return(
    <> 
    <h1>Application Form</h1>
    Name: <input type="text" name="name"  onChange={handleInput}/> <br/><br/>
    Roll: <input type="text" name="rollno" onChange={handleInput}/><br/><br/>
    City: <input type="text" name="city" onChange={handleInput}/><br/><br/>
    Fees: <input type="text" name="fees" onChange={handleInput}/><br/><br/>
    <button onClick={handleSubmit}>Submit</button>

     
    </>
  )
}
export default App;