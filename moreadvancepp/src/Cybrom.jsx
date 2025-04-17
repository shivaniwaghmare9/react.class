
// import { useContext } from "react";
// import {myContext} from "./App";


// const Cybrom=()=>{
//     const{name}=useContext(myContext);
//     return(
//         <>
         
//          <h1>Welcome: {name}</h1>
        
//         </>
//     )
// }
// export default Cybrom;
//=========================================================================================================================


// const Cybrom=({children})=>{
    
//     return(
//         <>
         
//          <h1>Welcome to cybrom </h1>
//          {children}
        
//         </>
//     )
// }
// export default Cybrom;

//=================================================(CHILDREN)==================================================================================
import { useContext } from "react";
import  { myContext } from "./UserContext";

const Cybrom=({children})=>{
    const{name}=useContext(myContext);
    
    return(
        <>
         
         <h1>Welcome to cybrom {name}</h1>
         
        
        </>
    )
}
export default Cybrom;


