
import { createContext,useState } from "react";
import Cybrom from "./Cybrom";
const Mycontext=createContext();
const App=()=>{
    const[name,setName]=useState("Shivani");
    return(
        <>
        <h1>Welcome to context app:{name}</h1>
        <button onClick={()=>{setName("Ram")}}>Click</button>
        <Mycontext.Provider value={{name,setName}}>
              <Cybrom/>
        </Mycontext.Provider>
       
        </>
    )
}
export default App;
export {Mycontext}