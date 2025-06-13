
import { useContext,useState} from "react";
import { MyContext } from "./LoginContext";
const Unauth=()=>{
    const[name,setName]=useState("")
    const{login}=useContext(MyContext);
    return(
        <>
         
         Enter Name: <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/><br/><br/>
         <button onClick={()=>{login(name)}}>Login</button>
        </>
    )
}
export default Unauth;