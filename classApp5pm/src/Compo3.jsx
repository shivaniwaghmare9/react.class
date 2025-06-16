
import { useContext } from "react";
import { MyContext } from "./App";
const Compo3=()=>{
    const{user,setUser}=useContext(MyContext)
    return(
        <>
        <h1>Componente-3:{user}</h1>
        <button onClick={()=>{setUser("riyaa")}}>click</button>
        
        </>
    )
}
export default Compo3;