


// //===========================================useeffect(1)======================================================================================================
// import { useState,useEffect } from "react";
// const App=()=>{
//   const[myval,setMyval]=useState(0);
//   useEffect(()=>{
//     setTimeout(()=>{
//       setMyval(myval+1);
//     },3000)
//   })
//   return(
//     <>
//     <h3>welcome to my App:{myval}</h3>
//     </>

//   )
// }
// export default App;

//===========================================================================================================================

//===========================================useeffect(2)======================================================================================================
// import { useState,useEffect } from "react";
// const App=()=>{
//   const[myval,setMyval]=useState(0);
//   useEffect(()=>{
//     setTimeout(()=>{
//       setMyval(myval+1);
//     },3000)
//   },[])
//   return(
//     <>
//     <h3>welcome to my App:{myval}</h3>
//     </>

//   )
// }
// export default App;
//===============================================useeffect(3)==========================================================================================

import { useState,useEffect } from "react";
const App=()=>{
  const [count,setCount]=useState(0);
  const[multi,setMulti]=useState(0);
  useEffect(()=>{
    setMulti(count*2)
  },[count])
  return(
  <>
  <h3>Counter App!!</h3>
  <h4>Addition: {count}</h4>
  <h4>Multiplication:{multi}</h4>
  <button onClick={()=>{setCount(count+1)}}>Click me</button>
  </>
  )
}
export default App;