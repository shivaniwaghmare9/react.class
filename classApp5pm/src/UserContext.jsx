
import { useState,createContext } from "react";
const MyContext=createContext();
const UserContext=({children})=>{
    const[user,setUser]=useState("shivani");
    return(
        <> 
         <MyContext.Provider value={{user,setUser}}>
            {children}
         </MyContext.Provider>
        </>
    )
}
export default UserContext;
export {MyContext}