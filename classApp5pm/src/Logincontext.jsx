
import { useState,createContext } from "react";
const MyContext=createContext();
const LoginContex=({children})=>{
    const[name,setName]=useState({name:"",auth:false});
    const login=(nm)=>{
        setName({name:nm,auth:true})
    }
    const logout=()=>{
        setName({name:"",auth:false})
    }
    return(
        <>
         <MyContext.Provider value={{name,login,logout}}>
            {children}
         </MyContext.Provider>
        </>
    )
}
export default LoginContex;
export {MyContext}