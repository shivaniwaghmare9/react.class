
// import { useContext,useState } from "react";
// import { myContext } from "./LoginContext";

// const UnAuthApp=()=>{
//     const[name,setName]=useState("");
//     const{login}=useContext(myContext);
//     return(
//         <>
        
//          Enter your name: <input type="text" value={name} 
//          onChange={(e)=>{setName(e.target.value)}}/><br/><br/>
//          <button onClick={()=>{login(name)}}>Login!!</button>
//         </>
//     )
// }
// export default UnAuthApp;

import { useState,useContext } from "react";
import { myContext } from "./LoginContext";

const UnAuthApp=()=>{
    const[name,setName]=useState("");
    const {login}=useContext(myContext);
    
    return(
        <>
         Enter your Name: <input type="text" value={name} 
         onChange={(e)=>{setName(e.target.value)}}/><br/><br/>
         <button onClick={()=>{login(name)}}>Login</button>
        </>
    )
}
export default UnAuthApp;