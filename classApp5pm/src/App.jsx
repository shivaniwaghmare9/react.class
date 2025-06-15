
import { useState } from "react";
const App=()=>{
    const[name,setName]=useState("");
    const[city,setCity]=useState("");

    const handleSubmit=()=>{
        alert(`Name : ${name} City: ${city}`)
    }
    return(
        <>
          <h1>Welcome to useState hook</h1>
          Enter Name : <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/><br/><br/>
          Enter City : <input type="text" value={city} onChange={(e)=>{setCity(e.target.value)}}/><br/><br/>
          <button onClick={handleSubmit}>Click</button>

        </>
    )
}
export default App;