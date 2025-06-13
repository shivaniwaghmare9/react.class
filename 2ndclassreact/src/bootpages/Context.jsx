
// import { useState } from "react";
// import Compo1 from "../propsdrilling/Compo1";
// const Context=()=>{
//     const[user,setUser]=useState("preetam")
//     return(
//         <>
//           <h3>Welcome To: {user}</h3>
//           <Compo1 user={user}/>
//         </>
//     )
// }
// export default Context;
//======================================================CONTEXT(HOOK)============================================================================
// import { createContext } from "react";
// import { useState } from "react";
// import Compo1 from "../propsdrilling/Compo1";
// const UserContext=createContext();
// const Context=()=>{
//     const[user,setUser]=useState("Shivani")
//     return(
//         <>
//           <h3>Welcome To: {user}</h3>
//           <UserContext.Provider value={{user}}>
//              <Compo1 />
//           </UserContext.Provider>
//         </>
//     )
// }
// export default Context;
// export {UserContext}

//==========================================================================================================================================

// import { createContext,useState } from "react";
// import Cybrom from "../propsdrilling/Cybrom";
// const MyContext=createContext();
// const Context=()=>{
//   const[user,setUser]=useState("shivani")
//   return(
//     <>
//       <h3>Welcome to context app:{user}</h3>
//       <button onClick={()=>{setUser("Riyaa")}}>Click</button>
//       <MyContext.Provider value={{user,setUser}}>
//            <Cybrom/>
//       </MyContext.Provider>
//     </>
//   )
// }
// export default Context;
// export {MyContext}

//========================================CHILDREN======================================================================================================
// import Cybrom from "../propsdrilling/Cybrom";
// const Context=()=>{
//   return(
//     <>
//        <h1>Welcome to app</h1>
//        <Cybrom>
//           <h4>We learn mern full stack course</h4>
//        </Cybrom>
//     </>
//   )
// }
// export default Context;

//=====================================================================================================================================================================================

import Cybrom from "../propsdrilling/Cybrom";
const Context=()=>{
  return(
    <>
       <h1>Welcome to app</h1>
       <Cybrom/>
    </>
  )
}
export default Context;