
import { useState,createContext,useContext } from "react";
const myContext=createContext();
const UserContext=({children})=>{
    const[name,setname]=useState("Sweta");
    return(
        <>
           
           <myContext.Provider value={{name}}>
            {children}
           </myContext.Provider>
        </>
    )
}
export default UserContext;
export {myContext};