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




const Cybrom=({children})=>{
    return(
        <>
        <h1>Welcome to Cybrom!!</h1>
       {children}
        </>
    )
}
export default Cybrom;