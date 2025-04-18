// import { useState } from "react";
// import Compo1 from "./pages/Compo1";

// const App=()=>{
//   const[user,setUser]=useState("Shivani");
//   return(
//     <>
//      <h1>Welcome:{user}</h1>
//      <Compo1 user={user}/>
//     </>
//   )
// }
// export default App;

//===========================================(with-context)========================================================================================================================

import { useState,createContext } from "react";
import Compo1 from "./pages/Compo1";
const myContext=createContext();
const App=()=>{
  const[name,setName]=useState("Drishti");
  return(
    <>
      <h1>Welcome:{name}</h1>
      <button onClick={()=>{setName("Divya")}}>Click</button>
      <myContext.Provider value={{name,setName}}>
              <Compo1/>
      </myContext.Provider>

    </>
  )
}
export default App;
export {myContext};