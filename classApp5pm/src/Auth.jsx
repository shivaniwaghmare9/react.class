import { useContext } from "react";
import { MyContext } from "./Logincontext";
const Auth=()=>{
    const{user,logout}=useContext(MyContext);
    return(
        <>
        <h1>Welcome to react class: {user.name}</h1>
        <button onClick={logout}>Logout</button>
        </>
    )
}
export default Auth;