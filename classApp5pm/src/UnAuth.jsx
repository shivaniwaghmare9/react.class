
import { useContext,useState } from "react";
import { MyContext } from "./Logincontext";
const UnAuth=()=>{
  const[user,setUser]=useState("")
   const{login}=useContext(MyContext);
    return(
        <>
          
          Enter Name: <input type="text" value={user} onChange={(e)=>{setUser(e.target.value)}}/><br/><br/>
          <button onClick={()=>{login(user)}}>Login</button>
        </>
    )
}
export default UnAuth;