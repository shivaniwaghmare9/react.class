
import { useState } from "react";
const App=()=>{
    const[student,setStudent]=useState({name:"",rollno:"", phy:"",chem:"",math:"",engli:"",hindi:""})
    const[result,setResult]=useState(null)
    const handleInout=(e)=>{
        let name=e.target.name;
        let value=e.targte.value;
        setStudent(Values=>({...Values,[name]:value}))
    }
    const handleSubmit=()=>{
        const{phy,chem,math,engli,hindi}=student;
        const marks=[Number(phy),Number(chem),Number(math),Number(engli),Number(hindi)]
        const total=marks.reduce((acc,mark)=> acc+mark);
        const percentage=total/5

        let  division="";
        if(percentage>=75){
            division("first division")
        }else if(percentage>=60){
            division("second division")
        }else if(percentage>=45){
            division("third division")
        }
        else{
            division("fail")
        }
       
       
        setResult({
            total,
            percentage: percentage.toFixed(2),
            division
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
          <button onClick={handleSubmit}>Calculate</button><br/><br/>
          {result && (
            <>
            <h1>Result</h1>
            <h2>Total marks:{result.total}</h2>
            <h2>Percentage:{result.percentage}</h2>
            <h2>Division:{result.division}</h2>
            </>
          )}
        </>
    )
}
export default App;