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
        <div className="box">
           <h2>My Counter:{count}</h2>
           <button onClick={()=>{setCount(count+1)}}className="btn1">Increment</button>
           <button onClick={dec} className="btn2">Decrement</button>
        </div>
        </>
    )
}
export default Placement;