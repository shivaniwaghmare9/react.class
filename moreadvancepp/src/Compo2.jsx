import Compo3 from "./Compo3";



// const Compo2=({user})=>{
//     return(
//         <>
//          <h1>Component-2</h1>
//          {/* <Compo3 user={user}/> */}
//         
//         </>
//     )
// }
// export default Compo2;

const Compo2=()=>{
    return(
        <>
         <h1>Component-2</h1>
         
         <Compo3/>
        </>
    )
}
export default Compo2;