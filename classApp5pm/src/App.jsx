
import { useState } from "react";
const App=()=>{
    const [name,setName]=useState("Shivani");
    return(
        <>
        <h1>USeState : {name}</h1>
        <button onClick={()=>{setName("Priyaa")}}>Click</button>
        </>
    )
}
export default App;