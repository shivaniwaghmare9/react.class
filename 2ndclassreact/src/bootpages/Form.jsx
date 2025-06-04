
import { useState } from "react";
const Form=()=>{
  const[input,setInput]=useState({});
  const handleInput=(e)=>{
      let name=e.target.name;
      let value=e.target.value;
      setInput(values=>({...values,[name]:value}))
      console.log(input);
  }
  return(
    <>
    <div className="form">
    <h3>Application Form!!</h3>
    Enter Name:<br/> <input type="text" name="name" onChange={handleInput}/><br/><br/>
    Enter Rollno:<br/> <input type="text" name="rollno" onChange={handleInput}/><br/><br/>
    Enter City:<br/> <input type="text" name="city" onChange={handleInput}/><br/><br/>
    Enter Fees:<br/> <input type="text" name="fees" onChange={handleInput}/><br/><br/>
    <button>Submit</button>
    </div>
    </>
  )
}
export default Form;