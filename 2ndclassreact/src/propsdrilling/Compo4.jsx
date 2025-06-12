
// const Compo4=({user})=>{
//     return(
//         <>
//          <h3>Components-4 {user}</h3>
//         </>
//     )
// }
// export default Compo4;

//===============================================================CONTEXT===========================================================

import { useContext } from "react";
import { UserContext } from "../bootpages/Context";
const Compo4=()=>{
    const{user}=useContext(UserContext)
    return(
        <>
         <h3>Components-4 {user}</h3>
        </>
    )
}
export default Compo4;