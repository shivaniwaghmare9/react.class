
import { useContext } from "react";
import { MyContext } from "./Logincontext";
const UnAuth=()=>{
   const{name,login}=useContext(MyContext);
    return(
        <>
          <h1>Login System!!</h1>
          Enter Name: <input type="text" value={name}/><br/><br/>
          <button onClick={login}>Login</button>
        </>
    )
}
export default UnAuth;