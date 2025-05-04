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
// import { useSelector,useDispatch } from "react-redux";
// import { changeColor } from "./colorSlice";
// import { useState } from "react";
// const App=()=>{
//   const clr=useSelector(state=>state.mycolor.color);
//   const dispatch=useDispatch();
//   const[color,setColor]=useState("");
//   return(
//     <>
//      <h1>Welcome to ToDo App</h1>
//      Enter Color: <input type="text" value={color} 
//      onChange={(e)=>{setColor(e.target.value)}} /><br/><br/>
//      <button onClick={()=>{dispatch(changeColor(color))}}>Change</button><br/><br/>
//      <div style={{width:"300px",height:"250px",border:"1px solid black",backgroundColor:clr}}>

//      </div>
     

//     </>
//   )
// }
// export default App;

//==============================================NAMEAPP=====================================================================================================
// import { useSelector,useDispatch } from "react-redux";
// import { changeName } from "./nameSlice";
// const App=()=>{
//   const data=useSelector(state=>state.myname.user)
//   const dispatch=useDispatch();
//   return(
//     <>
//       <h1>TODO APP</h1>
//       <h2>Welcome to cybrom:{data}</h2>
//       <button onClick={()=>{dispatch(changeName())}}>Change</button>
//     </>
//   )
// }
// export default App;

//=================================================================================================================================================================
import { useSelector,useDispatch } from "react-redux";
import { addTask } from "./todoSlice";
import { useState } from "react";
const App=()=>{
  const data=useSelector(state=>state.todo.task);
  const dispatch=useDispatch();
  const[txt,setTxt]=useState("");
  console.log(data);
  let sno=0;
  const ans=data.map((key)=>{
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
       <h1>Welcome to todo app!!!!</h1>
       Enter Your Task: <input type="text" value={txt} 
       onChange={(e)=>{setTxt(e.target.value)}}/><br/><br/>
       <button onClick={()=>{dispatch(addTask({task:txt}))}}>Add</button><br/><br/>
       <table border="2" width="400px"> 
        <tr>
          <th>SNO</th>
          <th>TASK</th>
        </tr>
        {ans}
       </table>
    </>
  )
}
export default App;