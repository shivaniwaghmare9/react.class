
import { useState } from "react";
const Faculty=()=>{
    const[count,setCount]=useState(0);
    const Incre=()=>{
       setCount(count+1);
    }
    const Decre=()=>{
        if(count==0)
        {
            alert("not less then 0")
        }
        else
        {
            setCount(count-1);  
        }
    }
    return(
        <>
       <div>
           <h1>Counter App!!!</h1>
           <h2>{count}</h2>
           <button onClick={Incre}>Incremnet</button>
           <button onClick={Decre}>Decrement</button>
       </div>
        </>
    )
}
export default Faculty; 