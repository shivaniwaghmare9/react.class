
//=============================================USESTATE-SETNAME=========================================================================

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
//=================================================USESTATE-SETCOLOR==============================================================================
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

//==========================================COUNTER APP=========================================================================
// import { useState } from "react";

// const App=()=>{
//   const [cnt,setCnt]=useState(0);

//  const myDec=()=>{
//   if(cnt<=0)
//   {
//     alert("Not Less than 0.")
//   }
//   else{
//     setCnt(cnt-1)
//   }
 //}
//   return(
//     <>
//     <h1 align="center">My Counter App</h1>
//        <div style={{border:"2px solid black",padding:"20px",borderRadius:"30px",backgroundColor:"grey",width:"300px",margin:"auto" }}>

//           <h1>my count:{cnt}</h1>
//           <button onClick={()=>{setCnt(cnt+1)}} id="btn1">Increment</button>
//          <button onClick={myDec} id="btn2">Decrement</button>
//          <button onClick={()=>{setCnt(0)}} id="btn3">Reset</button>
//       </div>
//     </>
//   )
// }
// export default App;


//==============================================COUNT========================================================================================

// import { useState, useEffect } from "react";

// const App=()=>{
//   const [count,setCount]=useState(0);
//   useEffect(()=>{
//     setTimeout(()=>{
//       setCount(count+1)
//     },4000)
//   })
//   return(
//     <>
//   <h1>Welcome:{count}</h1>
//   <button>Click Me</button>
//     </>
//   )
// }
// export default App;



//============================================(HOOK)USESTATE-WORK-IN-HOME=========================================================================================================
// import {useState} from "react";
// const App=()=>{
//   const [name,setName]=useState("Drishti");
//   return(
//     <>
//     <h1>Welcome To My World {name}</h1>
//     <button onClick={()=>{setName("Shivani")}}>Click me</button>
//     </>
//   )
// }
// export default App;
//===================================================COLOR=========================================================================================
// import {useState} from "react";
// const App=()=>{
//   const [color,setColor]=useState("red");
//   return(
//     <>
//     <h1 style={{color:color}}>Welcome To My World {color}</h1>
//     <button onClick={()=>{setColor("orange")}}>Click me</button>
//     <button onClick={()=>{setColor("green")}}>green color</button>
//     <button onClick={()=>{setColor("blue")}}>blue color</button>
//     <button onClick={()=>{setColor("yellow")}}>yellow color</button>
//     </>
//   )
// }
// export default App;

//================================================================================================================================================
import { useState } from "react";
const App=()=>{
  const[cnt,setCnt]=useState(0);
  const Dec=()=>{
    if(cnt<=0)
    {
      alert("count less than 0.");
    }
    else
    {
      setCnt(cnt-1);
    }
  }
  return(
    <>
    <h1 align="center">My Counter App</h1>
    <div id="box1">
      <h2>Count:{cnt}</h2>
      <button onClick={()=>{setCnt(cnt+1)}} id="Btn1">Increment</button>
      <button onClick={Dec} id="Btn2">Decrement</button>
      <button onClick={()=>{setCnt(0)}} id="Btn3">Reset</button>
 
    </div>
    </>
  )
}
export default App;