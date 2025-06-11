
// const Compo5=({user})=>{
//     return(
//         <>
//         <h3>Component-5 welcome:{user}</h3>
//         </>
//     )
// }
// export default Compo5;

import { useContext } from "react";
import { UserContext } from "./App";
const Compo5=()=>{
    const{user}=useContext(UserContext);
    return(
        <>
        <h3>Component-5 welcome:{user}</h3>
        </>
    )
}
export default Compo5;