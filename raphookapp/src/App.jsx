
// import { useRef } from "react";
// const App=()=>{
//   const myRef=useRef();
//   const myDisplay=()=>{
//    myRef.current.style.border="2px solid red";
//    myRef.current.style.width="300px";
//    myRef.current.style.padding="30px";
//    myRef.current.style.borderRadius="20px";
//    myRef.current.style.backgroundColor="yellow";
//   }
//   return(
//     <>
//         <h1>Welcome to Cybrom!!!</h1>
//         <div ref={myRef}>
//           we are Cybrom Student
//         </div>
//         <button onClick={myDisplay}>Click </button>
//     </>
//   )
// }
// export default App;

//==================================================================================================================
// import { useRef } from "react";
// const App=()=>{
//   const myRef=useRef("");
//   const display=()=>{
//     myRef.current.innerHTML="we are learn user hook";

//   }
// return(
//   <>
//       <h1 ref={myRef}>Welcome to Cybrom!!!</h1>
      
//       <button onClick={display}>Click </button>
//   </>
// )
// }
// export default App;

// import { useState,useRef } from "react";
// import { useEffect } from "react";

// const App=()=>{
//   const[name,setName]=useState("");
//   const myRef=useRef(0);
//   useEffect(()=>{
//     myRef.current+=1;
//   })
//   return(
//     <>
//      Enter name: <input type="text"  value={name} 
//      onChange={(e)=>{setName(e.target.value)}}/>
//      <h1>Rendering count:{myRef.current}</h1>
//     </>
//   )
// }
// export default  App;
//========================================================================================================================================
import { useRef } from "react";
const App=()=>{
  const myRef=useRef();
  const back=()=>{
   
    myRef.current.style.backgroundColor="yellow";
  }
  const text=()=>{
    myRef.current.innerHTML="we are cybrom student";
    myRef.current.style.color="red";
    myRef.current.style.padding="50px";
  }
  const border=()=>{
    myRef.current.style.border="2px solid red";
    myRef.current.style.borderRadius="100%";
   
    
  }
  return(
    <>
   <div ref={myRef} style={{width:"200px",height:"200px",border:"1px solid black"}}>
     
   </div>
   <button onClick={back} >Color</button> 
   <button onClick={text}> Text</button>
   <button onClick={border}> border</button>
     
    </>
  )
}
export default App;