
import { useState } from "react";
const App=()=>{
    const[input,setInput]=useState({});
    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInput(Values=>({...Values,[name]:value}))
        console.log(input)
    }
    
    return(
        <>
          <h1>Welcome to useState hook</h1>
          Enter Name : <input type="text" name="name" onChange={handleInput}/><br/><br/>
          Enter City : <input type="text" name="city" onChange={handleInput}/><br/><br/>
          Enter Roll : <input type="text" name="roll" onChange={handleInput}/><br/><br/>
          Enter Fees : <input type="text" name="fees" onChange={handleInput}/><br/><br/>
          <button onClick={handleInput}>Click</button>

        </>
    )
}
export default App;