
import Compo4 from "./Compo4";

// const Compo3=({user})=>{
//     return(
//         <>
//          <h1>Component-3</h1>
//          {/* <Compo4 user={user}/> */}
//          
//         </>
//     )
// }
// export default Compo3;

const Compo3=()=>{
    return(
        <>
         <h1>Component-3</h1>
         
         <Compo4/>
        </>
    )
}
export default Compo3;