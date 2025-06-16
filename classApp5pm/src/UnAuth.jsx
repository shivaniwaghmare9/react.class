
import { useContext } from "react";
import { MyContext } from "./Logincontext";
const UnAuth=()=>{
   
    return(
        <>
          <h1>Login System!!</h1>
          Enter Name: <input type="text" /><br/><br/>
          <button>Click</button>
        </>
    )
}
export default UnAuth;