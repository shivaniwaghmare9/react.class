
import { useContext } from "react";
import { MyContext } from "./UserContext";
const Cybrom=({children})=>{
    const{user,setUser}=useContext(MyContext)
    return(
        <>
          <h1>Welcome to:{user}</h1>
          {children}
        </>
    )
}
export default Cybrom;