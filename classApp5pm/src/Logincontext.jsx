
import { useState,createContext } from "react";
const MyContext=createContext();
const LoginContext=({children})=>{
    const[user,setUser]=useState({name:"",auth:false})
    const login=(nm)=>{
        setUser({name:nm,auth:true})
    }
    const logout=()=>{
        setUser({name:"",auth:false})
    }
    return(
        <>
         <MyContext.Provider value={{user,login,logout}}>
            {children}
         </MyContext.Provider>
        </>
    )
}
export default LoginContext;
export {MyContext}