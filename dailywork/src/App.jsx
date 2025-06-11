
// import { useState } from "react";
// import Compo1 from "./Compo1";
// const App=()=>{
//   const[user,setUser]=useState("Shivani")
//   return(
//     <>
//     <h3> Welcome App!! {user}</h3>
//     <Compo1 user={user}/>
//     </>
//   )
// }
// export default App;


import { useState,createContext } from "react";
import Compo1 from "./Compo1";
const UserContext=createContext();
const App=()=>{
  const[user,setUser]=useState("Shivani")
  return(
    <>
    <h3> Welcome App!! {user}</h3>
    <UserContext.Provider value={{user}}>
         <Compo1/>
    </UserContext.Provider>
    
    </>
  )
}
export default App;
export {UserContext}