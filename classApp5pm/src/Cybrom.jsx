// import Bhopal from "./Bhopal";
// const Cybrom=()=>{
//     return(
//         <>
//         <h1>Welcome to Cybrom!!</h1>
//         <Bhopal/>
//         </>
//     )
// }
// export default Cybrom;
// //===============================================================================================================================

// const Cybrom=({children})=>{
//     return(
//         <>
//         <h1>Welcome to Cybrom!!</h1>
//        {children}
//         </>
//     )
// }
// export default Cybrom;

///====================================================================================================================

import { useContext } from "react";
import { MyContext } from "./UserContext";
const Cybrom=({children})=>{
    const{name}=useContext(MyContext)
    return(
        <>
        <h1>Welcome to bhopal: {name}</h1>
        {children}
        </>
    )
}
export default Cybrom;