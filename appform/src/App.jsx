//========================================FORM(WORK)==========================================================================================
// import { useState } from "react";
// const App=()=>{
//   const[name,setName]=useState("");
//   const[city,setCity]=useState("");

//   const handleSubmit=()=>{
//     alert(`Name: ${name} City: ${city}`);
//   }
//   return(
//     <>
//      <h1>Application form</h1>
//      Name:<input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/><br/><br/>
//      City:<input type="text" value={city} onChange={(e)=>{setCity(e.target.value)}}/><br/><br/>
//      <button onClick={handleSubmit}>Submit</button>
//     </>
//   )
// }
// export default App;

//=======================================FORM(USE-SPREADOPRATOR)======================================================================================================

import { useState } from "react";
const App=()=>{
  const[input,setInput]=useState({});
  const handleInput=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    
    setInput(values=>({...values,[name]:value}))
    console.log(input);
  }
  return(
    <>
    <h1>Application Form</h1>
    Name: <input type="text" name="name"  onChange={handleInput}/><br/><br/>
    Roll: <input type="text" name="rollno"  onChange={handleInput}/><br/><br/>
    City: <input type="text" name="city"  onChange={handleInput}/><br/><br/>
    Fees: <input type="text" name="fees"  onChange={handleInput}/><br/><br/>
    <button onClick={handleInput}>Submit</button>
    </>
  )
}
export default App;