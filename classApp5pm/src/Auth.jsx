
import { useContext } from "react";
import { MyContext } from "./LoginContext";
const Auth=()=>{
    const{user,logout}=useContext(MyContext);
    return(
        <>
         <h2>Welcome to :{user.name}</h2>
         <button onClick={logout}>Logout</button>
        </>
    )
}
export default Auth;