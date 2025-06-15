
import { useState } from "react";
const Contact=()=>{
    const[student,setStudent]=useState({
        name:"",rollno:"",physics:"",chemistry:"",maths:"",english:"",hindi:""});
        const[result,setResult]=useState(null)
        const calculateSubmit=()=>{
            
        }

    return(
        <>
        <div className="form">
           <h3>Student Records Form!!!</h3>
           <input type="text" name="name" placeholder="Name"/><br/><br/>
           <input type="text" name="rollno" placeholder="Rollno"/><br/><br/>
           <input type="number" name="physics" placeholder="Physics"/><br/><br/>
           <input type="number" name="chemistry" placeholder="Chemistry"/><br/><br/>
           <input type="number" name="maths" placeholder="Maths"/><br/><br/>
           <input type="number" name="english" placeholder="English"/><br/><br/>
           <input type="number" name="hindi" placeholder="Hindi"/><br/><br/>
           <button onClick={calculateSubmit}>Calculate</button>
        </div>
        </>
    )
}
export default Contact;