
import { useState } from "react";
const Contact=()=>{
    const[student,setStudent]=useState({
        name:"",rollno:"",physics:"",chemistry:"",maths:"",english:"",hindi:""});
        const[result,setResult]=useState(null)
        const handleChnage=(e)=>{
            let name=e.target.name;
            let value=e.target.value;
            setStudent(Values=>({...Values,[name]:value}))
            // console.log(student);
        }
        const calculateSubmit=()=>{
          const {phy,chem,math,eng,hin}=student;
          const marks=[Number(phy),Number(chem),Number(math),Number(eng),Number(hin)];
          const total=marks.reduce((acc,mark)=>acc+mark,0)
          const percentage=total/5
        }
        let percentage=""
        if()
       setResult((
        
       ))
    return(
        <>
        <div className="form">
           <h3>Student Records Form!!!</h3>
           <input type="text" name="name" placeholder="Name" onChange={handleChnage}/><br/><br/>
           <input type="text" name="rollno" placeholder="Rollno"onChange={handleChnage}/><br/><br/>
           <input type="number" name="physics" placeholder="Physics" onChange={handleChnage}/><br/><br/>
           <input type="number" name="chemistry" placeholder="Chemistry" onChange={handleChnage}/><br/><br/>
           <input type="number" name="maths" placeholder="Maths" onChange={handleChnage}/><br/><br/>
           <input type="number" name="english" placeholder="English" onChange={handleChnage}/><br/><br/>
           <input type="number" name="hindi" placeholder="Hindi" onChange={handleChnage}/><br/><br/>
           <button onClick={calculateSubmit}>Calculate</button>
        </div>
        </>
    )
}
export default Contact;