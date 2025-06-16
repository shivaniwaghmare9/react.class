
import { useContext } from "react";
import { Mycontext } from "./UserContext";
const Cybrom=({children})=>{
    const{name}=useContext(Mycontext);
    return(
        <>
        <h1>Welcome to cybrom!!{name}</h1>
        {children}
        </>
    )
}
export default Cybrom;