
import { createContext } from "react";
import { useState } from "react";
const MyContext=createContext();
const UserContext=({children})=>{
    const[user,setUser]=useState("Shivani")
    return(
        <>
          <MyContext.Provider value={{user,setUser}}>
            {children}
          </MyContext.Provider>
        </>
    )
}
export default UserContext;