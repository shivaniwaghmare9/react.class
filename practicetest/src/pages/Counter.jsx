import { ToastContainer,toast } from  "react-toastify";;
import { useState } from "react";

const Counter=()=>{
    const[count,setCount]=useState(0);
    const Dec=()=>{
        if(count<=0)
        {
           toast.error("not less than 0!!!")
        }
        else{
            setCount(count-1)
        }
    }    
    return(
        <>
         <div id="counter">
          <h1>Counter App!!!!</h1>
           <h2>Counter {count}</h2>
           <button onClick={()=>{setCount(count+1)}}>Increment</button>
           <button onClick={Dec}>Decrement</button>
           <button onClick={()=>{setCount(0)}}>Reset</button>
         </div>
         <ToastContainer/>
        </>
    )
}
export default Counter;