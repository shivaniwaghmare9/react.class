
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
// import { useRef } from "react";
// const App=()=>{
//   const myRef=useRef();
//   const back=()=>{
   
//     myRef.current.style.backgroundColor="yellow";
//   }
//   const text=()=>{
//     myRef.current.innerHTML="we are cybrom student";
//     myRef.current.style.color="red";
//     myRef.current.style.textAlign="center";
//     myRef.current.style.display="flex";
//     myRef.current.style.alignItems="center";
//   }
//   const border=()=>{
//     myRef.current.style.border="2px solid red";
//     myRef.current.style.borderRadius="100%";
   
    
//   }
//   return(
//     <>
//    <div ref={myRef} style={{width:"200px",height:"200px",border:"1px solid black"}}>
     
//    </div>
//    <button onClick={back} >Color</button> 
//    <button onClick={text}> Text</button>
//    <button onClick={border}> border</button>
     
//     </>
//   )
// }
// export default App;


//============================================(24-04-2025[used demo hook])=======================================================================================================================
// import { useState } from "react";
// const App=()=>{
//   const[add,setAdd]=useState(0);
//   const[sub,setSub]=useState(100);
//   // const myMulti=useMemo(()=>{
//   //      console.log()
//   // },[add])
//   function myMulti(){
//     console.log("*****");
//     return add*2
//   }
//   return(
//     <>
//       <h1>Welcome </h1>
//       <h2>Addition:{add}</h2>
//       <button onClick={()=>{setAdd(add+1)}}>Add</button>
//       <h2>Substraction:{sub}</h2>
//       <button onClick={()=>{setSub(sub-1)}}>Minus</button>
//       <hr />
//       <h2>Multiplication:{myMulti()}</h2>
//     </>
//   )
// }
// export default App;

//===================================================================================================================================================================
// import { useMemo } from "react";
// import { useState } from "react";
// const App=()=>{
//   const[add,setAdd]=useState(0);
//   const[sub,setSub]=useState(100);
//   const myMulti=useMemo(()=>{
//     console.log("*****");
//     return add*2
//   },[add])
  
//   return(
//     <>
//       <h1>Welcome </h1>
//       <h2>Addition:{add}</h2>
//       <button onClick={()=>{setAdd(add+1)}}>Add</button>
//       <h2>Substraction:{sub}</h2>
//       <button onClick={()=>{setSub(sub-1)}}>Minus</button>
//       <hr />
//       <h2>Multiplication:{myMulti}</h2>
//     </>
//   )
// }
// export default App;

// import { useState,useMemo } from "react";
// const App=()=>{
//   const[mynum,setMynum]=useState(0);
//   const[name,setName]=useState("");
//   function myMulti(){
//     for(var i=0; i<10000000;i++){}
//     return mynum*2;
//   }
//   return(
//     <>

//       <h1>Welcome!!!</h1>
//       Select Number: <input type="number" value={mynum}  
//       onChange={(e)=>{setMynum(e.target.value)}}/>
//        Select Name: <input type="text" value={name}  
//       onChange={(e)=>{setName(e.target.value)}}/>
//       <hr />
//       <h1>Multiplication:{myMulti()}</h1>
//     </>
//   )
// }
// export default App;

//====================================================expencive====================================================================================================

import { useState,useMemo } from "react";
const App=()=>{
  const[mynum,setMynum]=useState(0);
  const[name,setName]=useState("");
  const myMulti=useMemo(()=>{
    for(var i=0; i<10000000;i++){}
    return mynum*2;
  },[mynum])
  return(
    <>

      <h1>Welcome!!!</h1>
      Select Number: <input type="number" value={mynum}  
      onChange={(e)=>{setMynum(e.target.value)}}/>
       Select Name: <input type="text" value={name}  
      onChange={(e)=>{setName(e.target.value)}}/>
      <hr />
      <h1>Multiplication:{myMulti}</h1>
    </>
  )
}
export default App;