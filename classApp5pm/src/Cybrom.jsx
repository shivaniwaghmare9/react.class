
import { useContext } from "react";
import { MyContext } from "./UserContext";
const Cybrom=({children})=>{
    const{user,setUser}=useContext(MyContext)
    return(
        <>
         <h1>Welcome to cybrom:{user}</h1>
         <button onClick={()=>{setUser("ram")}}>Click</button>
         {children}
        </>
    )
}
export default Cybrom;