
import { useContext } from "react";
import { MyContext } from "../bootpages/Context";
const Bhopal=()=>{
    const{user,setUser}=useContext(MyContext)
    return(
        <>
           <h3>Welcome to bhopal:{user}</h3>
           <button onClick={()=>{setUser("Ram")}}>Click</button>
        </>
    )
}
export default Bhopal;