
import { useState } from "react";
const App=()=>{
    const [color,setColor]=useState("red");
    return(
        <>
        <h1 style={{color:color}}>USeState : {color}</h1>
        <button onClick={()=>{setColor("green")}}>Green</button>
        <button onClick={()=>{setColor("yellow")}}>Yellow</button>
        <button onClick={()=>{setColor("blue")}}>Blue</button>
        <button onClick={()=>{setColor("orange")}}>Oragne</button>
        </>
    )
}
export default App;