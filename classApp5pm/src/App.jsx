import Cybrom from "./Cybrom";
import { useState,createContext } from "react";
const MyContext=createContext();
const App=()=>{
    const[name,setName]=useState("shivani")
    return(
        <>
        <h1>App!!</h1>
        <MyContext.Provider value={{name}}>
         <Cybrom/>
        </MyContext.Provider>
        
        </>
    )
}
export default App;
export {MyContext}