import { useState,createContext } from "react";
import Compo1 from "./Compo1";
const myContext=createContext();


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

const App=()=>{
  const[user,setUser]=useState("shivani");
  
  return(
    <>
      <h1>Welcome :{user}!!!</h1>
      <button onClick={()=>{setUser("shreyaa")}}>Click Here</button>
      <myContext.Provider value={{user,setUser}}>
      <Compo1 />
    </myContext.Provider>
    
      
    </>
  )
}
export default App;
export {myContext};