//========================================================================(CHILDREN-WITH-COMPONENT)===========================================================)
import { useContext,createContext,useState } from "react";
const myContext=createContext();

const UserContext=({children})=>{
    const[name,setName]=useState("Shivani");
    return(
        <>
         <myContext.Provider value={{name}}>
            {children}
         </myContext.Provider >
        </>
    )
}
export default UserContext;
export {myContext};