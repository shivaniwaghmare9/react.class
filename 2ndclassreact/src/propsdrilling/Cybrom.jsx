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

const Cybrom=({children})=>{
    return(
        <>
           <h3>Welcome to cybrom!!</h3>
           {children}
        </>
    )
}
export default Cybrom;