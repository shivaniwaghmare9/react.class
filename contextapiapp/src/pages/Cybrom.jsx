//========================================(with-component)======================================================================================================
// import { useContext } from "react";
// import { myContext } from "../App";
// const Cybrom=()=>{
//      const{name}=useContext(myContext);
//     return(
//         <>
//          <h1>welcome:{name}</h1>
         
//         </>
//     )
// }
// export default Cybrom;

//=============================================(children)=========================================================================================

// const Cybrom=({children})=>{
    
//     return(
//         <>
//          <h1>Welcome to Cybrom</h1>
//          {children}
//         </>
//     )
// }
// export default Cybrom;

//=============================================with-other-context-componetfiel=============================================================================================
import { useContext } from "react";
import { myContext } from "../UserContext";
const Cybrom=({children})=>{

    const{name,setname}=useContext(myContext);
    return(

        <>
           <h1>Hello i am  {name}</h1>
           <button onClick={()=>{setname("shivani")}}>Change</button>
        </>
    )
}
export default Cybrom;