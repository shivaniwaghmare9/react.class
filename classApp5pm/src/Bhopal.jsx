
import { useContext } from "react";
import { Mycontext } from "./App";
const Bhopal=()=>{
    const{name,setName}=useContext(Mycontext)
    return(
        <>
         <h1>Welcome to Bhopal:{name}</h1>
         <button onClick={()=>{setName("Sima")}}>Click</button>
        </>
    )
}
export default Bhopal;