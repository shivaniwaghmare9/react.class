import { useState,createContext } from "react";
const Mycontext=createContext();
const UserContext=({children})=>{
    const[name,setName]=useState("Shivani");
    return(
        <>
         <Mycontext.Provider value={{name}}>
             {children}
         </Mycontext.Provider>
        </>
    )
}
export default UserContext;
export {Mycontext}