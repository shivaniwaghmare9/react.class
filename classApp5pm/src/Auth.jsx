import { useContext } from "react";
import { MyContext } from "./Logincontext";
const Auth=()=>{
    const{name,logout}=useContext(MyContext)
    return(
        <>
           <h1>Welcome to :{name.user}</h1>
           <button onClick={logout}>Logout</button>
        </>
    )
}
export default Auth;