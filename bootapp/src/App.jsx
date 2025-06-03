
// import { useState } from "react";
// const App=()=>{
//   const[count,setCount]=useState(0)
//   const incre=()=>{
//     setCount(count+1);
//   }
//   const myDec=()=>{
//     if(count==0)
//     {
//       alert("No decrement")
//     }
//     else{
//       setCount(count-1);
//     }
    
//   }
//   return(
//     <>
//     <div>
//      <h3>Counter App!</h3>
//      <button onClick={incre}>Increment</button>
//      <h2>{count}</h2>
//      <button onClick={myDec}>Deccrement</button>
//      <button onClick={()=>{setCount(0)}}>Reset</button>
//      </div>
//     </>
//   )
// }
// export default App;

//=================================================================================================================================================
import { useState,useEffect } from "react";
const App=()=>{
  const[myval,setMyval]=useState(0);
  useEffect(()=>{
    setTimeout(()=>{
      setMyval(myval+1);
    },3000)
  })
  return(
    <>
    <h3>welcome to my App:{myval}</h3>
    </>

  )
}
export default App;