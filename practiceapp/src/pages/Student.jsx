


// const Student=()=>{
//     return(
//       <>
//       <h1>Welcome to our Student profile!!!!</h1>
//       </>
//     )
//   }
//   export default Student;
//==========================================PROPS===========================================================================
const Student=(props)=>{
    return(
        <>
           <h2>My name is:{props.nm}</h2>
           <h2>My city is:{props.ct}</h2>
           <h2>My insititue is:{props.ins}</h2>
        </>
    )
}
export default Student;