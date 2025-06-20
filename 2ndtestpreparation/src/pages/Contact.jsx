
import { useState } from "react";
const Contact=()=>{
    const[student,setStudent]=useState({
        name:"",rollno:"",physics:"",chemistry:"",maths:"",english:"",hindi:""});
        const[result,setResult]=useState(null)
        const handleChange=(e)=>{
            let name=e.target.name;
            let value=e.target.value;
            setStudent(Values=>({...Values,[name]:value}))
            console.log(student);
        }
        const calculateSubmit=()=>{
          const {physics,chemistry,maths,english,hindi}=student;
          const marks=[Number(physics),Number(chemistry),Number(maths),Number(english),Number(hindi)];
          const total=marks.reduce((acc,mark)=>acc+mark,0)
          const percentage=total/5

          let division="";
        if( percentage>=60){
            division="first division"
        }else if(percentage>=45){
            division="second division"
        } else if(percentage>=33){
            division="third division"
        }else{
            division="fail"
        }


       setResult({
        total,
        percentage: percentage.toFixed(2),
        division
       })
        }
        
    return(
        <>
    <div id="box">
        <div className="form">
           <h3>Student Records Form!!!</h3>
           <input type="text" name="name" placeholder="Name" onChange={handleChange}/><br/><br/>
           <input type="text" name="rollno" placeholder="Rollno"onChange={handleChange}/><br/><br/>
           <input type="number" name="physics" placeholder="Physics" onChange={handleChange}/><br/><br/>
           <input type="number" name="chemistry" placeholder="Chemistry" onChange={handleChange}/><br/><br/>
           <input type="number" name="maths" placeholder="Maths" onChange={handleChange}/><br/><br/>
           <input type="number" name="english" placeholder="English" onChange={handleChange}/><br/><br/>
           <input type="number" name="hindi" placeholder="Hindi" onChange={handleChange}/><br/><br/>
           <button onClick={calculateSubmit}>Calculate</button>
     
        </div>
        {result && (
            <div id="result">
                <h3>Result</h3>
                <h4>Total Marks:{result.total}</h4>
                <h4>Percentage:{result.percentage}%</h4>
                <h4>Division:{result.division}</h4>
            </div>
           )
        }

    </div>
        </>
    )
}
export default Contact;