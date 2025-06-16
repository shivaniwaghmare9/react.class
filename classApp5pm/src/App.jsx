import Compo1 from "./Compo1";
import { useState,createContext } from "react";
const MyContext=createContext()
const App=()=>{
     const[user,setUser]=useState("shivani")
    return(
        <>
         <h1>Props Drilling use Context api!!{user}</h1>
         <button onClick={()=>{setUser("ram")}}>click</button>
         <MyContext.Provider value={{user,setUser}}>
            <Compo1 />
         </MyContext.Provider>
         
        </>
    )
}
export default App;
export {MyContext}