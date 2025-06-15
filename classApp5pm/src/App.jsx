
import { useState,useEffect } from "react";
const App=()=>{
    const[count,setCount]=useState(0)
    useEffect(()=>{
        setTimeout(()=>{
           setCount(count+1)
        },2000)
       
    })
    return(
        <>
        <h1>Count:{count}</h1>
        </>
    )
}
export default App;