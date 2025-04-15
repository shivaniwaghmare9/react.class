// import { useState,createContext } from "react";
// import Compo1 from "./Compo1";
// const myContext=createContext();

//=============================================PROPS (DRILLING)(15-04-2025)==================================================================================================
// const App=()=>{
//   const[user,setUser]=useState("shivani");

//   return(
//     <>
//       <h1>Welcome :{user}!!!</h1>
//       {/* <Compo1 user={user}/> */}
//       
//     </>
//   )
// }
// export default App;
//============================================OR(CONTEXT)========================================================================================================
// const App=()=>{
//   const[user,setUser]=useState("shivani");
  
//   return(
//     <>
//       <h1>Welcome :{user}!!!</h1>
//       <button onClick={()=>{setUser("shreyaa")}}>Click Here</button>
//       <myContext.Provider value={{user,setUser}}>
//       <Compo1 />
//      </myContext.Provider>
//     </>
//   )
// }
// export default App;
// export {myContext};
//=======================================WORK(15-04-2025)=================================================================================================
// import { useState } from "react";
// import Compo1 from "./Compo1";
// const App=()=>{
//   const[user,setUser]=useState("Shivani");
//   return(
//     <>
//      <h1>Welcome :{user}</h1>
//      <Compo1 user={user}/>

//     </>
//   )
// }
// export default App;
//=========================================WORK(context)======================================================================================================================
import { useState,createContext } from "react";
import Compo1 from "./Compo1";
const myContext=createContext();
const App=()=>{
  const[user,setUser]=useState("Shivani");
  return(
    <> 
     <h1>Welcome:{user}</h1>
     <button onClick={()=>{setUser("Ram")}}>Click Here</button>
     <myContext.Provider value={{user,setUser}}>
      <Compo1/>
     </myContext.Provider>
    </>
  )
}
export default App;
export {myContext};