// //===============================================COUNTERAPP====================================================================================
// import { useSelector,useDispatch } from "react-redux";
// import { increment,decrement } from "./counterSlice";
// const App=()=>{
//   const data=useSelector(state=>state.mycounter.count);
//   const dispatch=useDispatch();
//   return(
//     <>
//      <h1>Welcome to ToDo App</h1>
//      <button onClick={()=>{dispatch(increment())}}>Increment</button>
//      <h1> {data}</h1>
//      <button onClick={()=>{dispatch(decrement())}}>Decrement</button>
//     </>
//   )
// }
// export default App;

//===============================================COLORRAPP(payload)====================================================================================
import { useSelector,useDispatch } from "react-redux";
import { changeColor } from "./colorSlice";
import { useState } from "react";
const App=()=>{
  const clr=useSelector(state=>state.mycolor.color);
  const dispatch=useDispatch();
  const[color,setColor]=useState("");
  return(
    <>
     <h1>Welcome to ToDo App</h1>
     Enter Color: <input type="text" value={color} 
     onChange={(e)=>{setColor(e.target.value)}} /><br/><br/>
     <button onClick={()=>{dispatch(changeColor(color))}}>Change</button><br/><br/>
     <div style={{width:"300px",height:"250px",border:"1px solid black",backgroundColor:clr}}>

     </div>
     

    </>
  )
}
export default App;