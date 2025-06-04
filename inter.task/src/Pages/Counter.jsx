
import { useState } from "react";
const Counter=()=>{
    const[count,setCount]=useState(0);
    const Incre=()=>{
        setCount(count+1);
    }
    const Decre=()=>{
        if(count==0)
        {
            alert("Not less then 0")
        }
        else
        {
            setCount(count-1);
        }
    }
    return(
        <>
        <div className="counter">
         <h3>Counter App!!!</h3>
         <h4>Counting:{count}</h4>
         <button onClick={Incre} className="btn1">Increment</button>
         <button onClick={Decre}className="btn2">Decrement</button>
         <button onClick={()=>{setCount(0)}}className="btn3">Reset</button>
         </div>
        </>
    )
}
export default Counter;