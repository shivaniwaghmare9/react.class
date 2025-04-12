import { useState } from "react";


const Search=()=>{
    const[empno,setEmpno]=useState("");
   const handleSearch=()=>{
   // let api=`http://localhost:3000/Employee/?empno${empno}`;

   }


    return(
        <>
        <h1 id="head">Search Page!!!</h1>
        Enter Employee No: <input type="text" value={empno}  onChange={(e)=>{setEmpno(e.target.empno)}}/>
        <button onClick={handleSearch}>Search</button>
        </>
    )
}
export default Search;