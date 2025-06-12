
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
//======================================================CONTEXT(HOK)============================================================================
import { createContext } from "react";
import { useState } from "react";
import Compo1 from "../propsdrilling/Compo1";
const UserContext=createContext();
const Context=()=>{
    const[user,setUser]=useState("Shivani")
    return(
        <>
          <h3>Welcome To: {user}</h3>
          <UserContext.Provider value={{user}}>
             <Compo1 />
          </UserContext.Provider>
          
        </>
    )
}
export default Context;
export {UserContext}