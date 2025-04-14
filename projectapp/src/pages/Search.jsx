import axios from "axios";
import { useState } from "react";


const Search=()=>{
    const[empno,setEmpno]=useState("");
    const[myData,setMydata]=useState([]);
   const handleSearch=async()=>{
    let api=`http://localhost:3000/Employee/?empno=${empno}`;
    const response=await axios.get(api);
    console.log(response.data);
    setMydata(response.data);

   }
   const ans=myData.map((key)=>{
    return(
        <> 
        <div id="box1">
        <h1>Welcome:{key.name}</h1>
        <h1>Your Company Emp No:{key.empno}</h1>
        <h1> Your Designation:{key.designation}</h1>
        <h1> Your Salary is :{key.salary}</h1>
        </div>
        </>
    )
   })


    return(
        <>
        <h1 id="head">Search Page!!!</h1>
        Enter Employee No: <input type="text" value={empno}  
        onChange={(e)=>{setEmpno(e.target.value)}}/>
        <button onClick={handleSearch} id="btn">Search</button>

        <div id="box2">
            {ans}
        </div>
        </>
    )
}
export default Search;