import { useState } from "react";

const Placement=()=>{
    const[count,setCount]=useState(15);
    const dec=()=>{
        if(count<=15)
        {
            alert("count less than 15")
        }
        else{
            setCount(count-1);
        }
    }
    return(
        <>
           <h1>My Counter:{count}</h1>
           <button onClick={()=>{setCount(count+1)}}>Increment</button>
           <button onClick={dec}>Decrement</button>
        </>
    )
}
export default Placement;