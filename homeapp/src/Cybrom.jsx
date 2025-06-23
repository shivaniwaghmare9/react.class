
import { useContext } from "react";
import { MyContext } from "./UserContext";
const Cybrom=()=>{
    const{user,setUser}=useContext(MyContext)
    return(
        <>
          <h1>Welcome to:{user}</h1>
        </>
    )
}
export default Cybrom;