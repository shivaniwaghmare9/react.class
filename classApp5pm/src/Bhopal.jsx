
import { useContext } from "react";
import { MyContext } from "./App";
const Bhopal=()=>{
    const{name}=useContext(MyContext)
    return(
        <>
        <h1>Welcome to bhopal!!{name}</h1>
        </>
    )
}
export default Bhopal;