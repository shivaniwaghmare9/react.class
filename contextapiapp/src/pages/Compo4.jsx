


// const Compo4=({user})=>{
//     return(
//         <>
//         <h1>Component-4</h1>
//         <h1>Welcome:{user}</h1>

//         </>
//     )
// }
// export default Compo4;

//===========================================(with-context)========================================================================================================================================
import { useContext } from "react";
import { myContext } from "../App";
const Compo4=()=>{
    const{name,setName}=useContext(myContext);
    return(
        <>

         <h1>Component=4</h1>
         <h1>Welcome:{name}</h1>
         <button onClick={()=>{setName("Prinshu")}}>Click</button>
        </>
    )
}
export default Compo4;