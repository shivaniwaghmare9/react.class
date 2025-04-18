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

// import { useState,createContext } from "react";
// import Compo1 from "./pages/Compo1";
// const myContext=createContext();
// const App=()=>{
//   const[name,setName]=useState("Drishti");
//   return(
//     <>
//       <h1>Welcome:{name}</h1>
//       <button onClick={()=>{setName("Divya")}}>Click</button>
//       <myContext.Provider value={{name,setName}}>
//               <Compo1/>
//       </myContext.Provider>

//     </>
//   )
// }
// export default App;
// export {myContext};

//======================================================================================================================================================

// import { useState,createContext, Children } from "react";
// import Cybrom from "./pages/Cybrom";
// const myContext=createContext();
// const App=()=>{
//   const[name,setName]=useState("Riyaa");
//   return(
//     <>
//        <h1>Welcome:{name}</h1>
//        <myContext.Provider value={{name}}>
//         <Cybrom/>
//        </myContext.Provider>
//     </>
//   )
// }
// export default App;
// export {myContext};

//=====================================================CHILDREN===========================================================================

// import { useState } from "react";
// import Cybrom from "./pages/Cybrom";

// const App=()=>{
//   const[name,setName]=useState("Riyaa");
//   return(
//     <>
//        <h1>Welcome:{name}</h1>
       
//        <Cybrom>
//          We learn to java Mern
//        </Cybrom>
//     </>
//   )
// }
// export default App;

//================================================with-other-context-componetfiel===========================================================================================
import Cybrom from "./pages/Cybrom";
const App=()=>{
  return(
    <>
     <h1>Welcome Welcome</h1>
     <Cybrom/>
    </>
  )
}
export default App;
