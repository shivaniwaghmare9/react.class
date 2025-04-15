//==============================================from props=====================================================================
// import Compo2 from "./Compo2";



// const Compo1=({user})=>{
//     return(
//         <>
//          <h1>Component-1</h1>
//          <Compo2 user={user}/>
//         </>
//     )
// }
// export default Compo1;
//========================================from context=====================================================================================
// const Compo1=()=>{
//     return(
//         <>
//          <h1>Component-1</h1>
//          <Compo2 />
//         </>
//     )
// }
// export default Compo1;

//==================================WORK====================================================================================================
// import Compo2 from "./Compo2";
// const Compo1=({user})=>{
//     return(
//         <>
//          <h1>Component-1</h1>
//          <Compo2 user={user}/>
//         </>
//     )
// }
// export default Compo1;

//====================================work(context)=============================================================================================
import Compo2 from "./Compo2";
const Compo1=()=>{
    return(
        <>
        <h1>Component-1</h1>
         <Compo2/>
        </>
    )
}
export default Compo1;