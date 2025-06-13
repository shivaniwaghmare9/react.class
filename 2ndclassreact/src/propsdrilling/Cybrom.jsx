// import Bhopal from "./Bhopal";

// const Cybrom=()=>{
//     return(
//         <>
//            <h3>Welcome to cybrom!!</h3>
//            <Bhopal/>
//         </>
//     )
// }
// export default Cybrom;

//===============================================================================================================================================================

// const Cybrom=({children})=>{
//     return(
//         <>
//            <h3>Welcome to cybrom!!</h3>
//            {children}
//         </>
//     )
// }
// export default Cybrom;

//=========================================CHILDREN(OTHER FILE)===========================================================================================================

import { useContext } from "react";
import { MyContext } from "../componenet/UserContext";
const Cybrom=({children})=>{
    const{user,setUser}=useContext(MyContext)
    return(
        <>
       <h3>Welcome to cybrom:{user}</h3>
       <button onClick={()=>{setUser("ram")}}>Click</button>
       {children}
        </>
    )
}
export default Cybrom;