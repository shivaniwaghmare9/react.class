import Compo1 from "./Compo1";
import { useState } from "react";
const App=()=>{
     const[user,setUSer]=useState("shivani")
    return(
        <>
         <h1>Props Drilling!!{user}</h1>
         <Compo1 user={user}/>
        </>
    )
}
export default App;