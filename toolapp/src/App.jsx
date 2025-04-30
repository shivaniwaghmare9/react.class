//================================================(28-04-2025(toolkit!!!))================================================================================================================

// import { useSelector,useDispatch } from "react-redux";
// import { increment,decrement } from "./counterSlice";
// const App=()=>{
//   const mydata=useSelector(state=>state.mycounter.count);
//   const dispatch=useDispatch();
//   return(
//     <>
//      <h1>Welcome tool!!!</h1>
//      <button onClick={()=>dispatch(increment())}>Increment</button>
//      <h1>{mydata}</h1>
//      <button onClick={()=>dispatch(decrement())}>Decrement</button>
//     </>
//   )
// }
// export default App;

//=================================================(work)===========================================================================================================
// import { useSelector,useDispatch } from "react-redux";
// import { increment,decrement } from "./counterSlice";
// const App=()=>{
//   const mydata=useSelector(state=>state.mycounter.count);
//   const dispatch=useDispatch();
//   return(
//     <>
//       <h1>Welcome to toolkit classes!!!!</h1>
//       <button onClick={()=>{dispatch(increment())}}>Increment</button>
//       <h1>{mydata}</h1>
//       <button onClick={()=>{dispatch(decrement())}}>Decrement</button>
//     </>
//   )
// }
// export default App;

//============================================(29-04-2025)=====================================================================================
// import { useSelector,useDispatch } from "react-redux";
// import { changename } from "./nameSlice";
// const App=()=>{
//   const usrname=useSelector(state=>state.myname.user)
//   const dispatch=useDispatch();
//   return(
//     <>
//      <h1>Welcome : {usrname}</h1>
//      <button onClick={()=>{dispatch(changename())}}>Change name</button>
//     </>
//   )
// }
// export default App;

//===============================================(30-04-2025(payload))====================================================================================================================
import { useSelector,useDispatch } from "react-redux";
import { useState } from "react";
import { changeColor } from "./colorSlice";
const App=()=>{
  const myclr=useSelector(state=>state.mycolor.color);
  const dispatch=useDispatch();
  const[val,setVal]=useState("");
  return(
    <>
       <h1>My change color program</h1>
       Enter Color: <input type="text"value={val}  
       onChange={(e)=>{setVal(e.target.value)}}/>
       <button onClick={()=>{dispatch(changeColor(val))}}>Change</button>
       <hr />
       <div style={{width:"200px", height:"200px", backgroundColor:myclr}}>

       </div>
    </>
  )
}
export default App;