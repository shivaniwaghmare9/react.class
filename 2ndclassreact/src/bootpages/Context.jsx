
import { useState } from "react";
import Compo1 from "../propsdrilling/Compo1";
const Context=()=>{
    const[user,setUser]=useState("preetam")
    return(
        <>
          <h3>Welcome To: {user}</h3>
          <Compo1 user={user}/>
        </>
    )
}
export default Context;