
import { useState } from "react";
const App=()=>{
    const[student,setStudent]=useState({phy:"",chem:"",math:"",engli:"",hindi:""})
    const[result,setResult]=useState()
    const handleInout=(e)=>{
        let name=e.target.name;
        let value=e.targte.value;
        setStudent(Values=>({...Values,[name]:value}))
    }
    const handleSubmit=()=>{
        const[phy,chem,math,engli,hindi]=student;
        const marks=student.reduce((acc,mark)=> acc+mark);
        const total=marks/5

        let  division="";
        if(division>=75){
            division("first division")
        }else if(division>=60){
            division("second division")
        }else if(division>=45){
            division("third division")
        }
        else{
            division("fail")
        }
        percentage
       
        setResult(()=>{
            total,
            percentage: percentage.Tofixed(2),
            division;
        })

    }

    return(
        <>
          Name: <input type="text" name="name" onChange={handleInout}/><br/><br/>
          Roll: <input type="text" name="roll" onChange={handleInout} /><br/><br/>
          Physics: <input type="text" name="phy" onChange={handleInout} /><br/><br/>
          Chemistry: <input type="text" name="chem" onChange={handleInout} /><br/><br/>
          Maths: <input type="text" name="math" onChange={handleInout} /><br/><br/>
          English: <input type="text" name="engli" onChange={handleInout} /><br/><br/>
          Hindi: <input type="text" name="hindi" onChange={handleInout} /><br/><br/>
          <button onClick={handleSubmit}>Calculate</button>
        </>
    )
}
export default App;