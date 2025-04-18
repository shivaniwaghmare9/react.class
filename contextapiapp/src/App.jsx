import { useState } from "react";
import Compo1 from "./pages/Compo1";

const App=()=>{
  const[user,setUser]=useState("Shivani");
  return(
    <>
     <h1>Welcome:{user}</h1>
     <Compo1 user={user}/>
    </>
  )
}
export default App;