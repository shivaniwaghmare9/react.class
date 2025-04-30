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

//===============================================(30-04-2025(payload[todo-list]))====================================================================================================================
import { useSelector,useDispatch } from "react-redux";
import { useState } from "react";
import { addTask } from "./todoSlice";
const App=()=>{
  const work=useSelector(state=>state.todo.task);
  const dispatch=useDispatch();
  const[val,setVal]=useState("");
  console.log(work)
  let sno=0;
  const ans=work.map((key)=>{
    sno++;
    return(
      <>
       <tr>
        <td>{sno}</td>
        <td>{key.task}</td>
       </tr>
      </>
    )
  })
  return(
    <>
       <h1>My change color program</h1>
       Enter Work: <input type="text"value={val}  
       onChange={(e)=>{setVal(e.target.value)}}/><br/><br/>
       <button onClick={()=>{dispatch(addTask({task:val}))}}>Add</button>
         <hr />
         <table border="1"width="300px">
          <tr>
            <th>Sno</th>
            <th>Task</th>
          </tr>
          {ans}
         </table>
       
    </>
  )
}
export default App;


//=================================================================================================================================================================

// const App=()=>{
//   return(
//     <>
//      <h1></h1>
//     </>
//   )
// }
// export default App;