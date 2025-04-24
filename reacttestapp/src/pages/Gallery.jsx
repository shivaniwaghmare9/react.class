
import { useState,useEffect } from "react";
const Gallery=()=>{
    const[count,setCount]=useState(0);
    const[multi,setMulti]=useState(0);
    useEffect(()=>{
        setMulti(count*2)
    },[count])
    
        
    return(
        <>
         <h1>Counter:{count}</h1>
         <h1 >Multiplication::{multi}</h1>
         <button onClick={()=>{setCount(count+1)}}>Click</button>
         
        </>
    )
}
export default Gallery;