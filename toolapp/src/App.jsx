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
import { useSelector,useDispatch } from "react-redux";
import { increment,decrement } from "./counterSlice";
const App=()=>{
  const mydata=useSelector(state=>state.mycounter.count);
  const dispatch=useDispatch();
  return(
    <>
      <h1>Welcome to toolkit classes!!!!</h1>
      <button onClick={()=>{dispatch(increment())}}>Increment</button>
      <h1>{mydata}</h1>
      <button onClick={()=>{dispatch(decrement())}}>Decrement</button>
    </>
  )
}
export default App;