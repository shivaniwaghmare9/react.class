


// const Cybrom=()=>{
//     return(
//       <>
//       <h1>Welcome to our Cybrom !!!!</h1>
//       </>
//     )
//   }
//   export default Cybrom;

//====================================PROPS=====================================================================
const Cybrom=(props)=>{
    return(
      <>
      <h2> WELCOME TO {props.nm}!!!!</h2>
      <h2> This is my {props.ins}!!!!</h2>
      <h2> Our fees {props.fee}!!!!</h2>
      </>
    )
  }
  export default Cybrom;