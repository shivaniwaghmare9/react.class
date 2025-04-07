// import { useState } from "react";

// const App=()=>{
//   const [name,setName]=useState("Riya")
//   return(
//     <>
//      <h1>Welcome to my App {name}</h1>
//      <button onClick={()=>{setName("Shivani")}}>Submit</button>

//     </>
//   )
// }
// export default App;
//=====================================================================================
// import { useState } from "react";

// const App=()=>{
//   const [color,setColor]=useState("red")
//   return(
//     <>
//      <h1 style={{color:color}}>My favouriet color is :{color}</h1>
//      <button onClick={()=>{setColor("green")}}>green color</button>
//      <button onClick={()=>{setColor("blue")}}>blue color </button>
//      <button onClick={()=>{setColor("orange")}}>orange color</button>
//      <button onClick={()=>{setColor("black")}}>balck color</button>

//     </>
//   )
// }
// export default App;

//===================================================================================================================
// import { useState } from "react";

// const App=()=>{
//   const [cnt,setCnt]=useState(0);

//  const mydec=()=>{
//   if(setCnt<=0)
//   {
//     alert("no")
//   }
//   else{
//     setCnt(cnt-1)
//   }
//  }
//   return(
//     <>
//     {/*<h1 align="center">My counter App</h1>
//     <div style={{border:"2px solid black",padding:"20px",borderRadius:"30px",backgroundColor:"grey",width:"400px",margin:"auto" ,height:"300px"}}></div>*/}

//     <h1>my count:{cnt}</h1>
//     <button onClick={()=>{setCnt(cnt+1)}}>Increment</button>
//     <button onClick={()=>{mydec}>Decrement</button>
//     <button onClick={()=>{setCnt(0)}}>Reset</button>
//     </>
//   )
// }
// export default App;


//==============================================================================================================

import { useState, useEffect } from "react";
const App=()=>{
  const [count,setCount]=useState(0);
  useEffect(()=>{
    setTimeout(()=>{
      setCount(count+1)
    },4000)
  })
  return(
    <>
  <h1>welcome:{count}</h1>
  <button>Submit</button>
    </>
  )
}
export default App;