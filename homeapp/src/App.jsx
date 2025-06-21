
// import { useSelector,useDispatch } from "react-redux";
// import { bgClrChange } from "./colorSlice";
// import { useState } from "react";
// const App=()=>{
//   const[txtval,setTxtVal]=useState("")
//   const myclr=useSelector(state=>state.mycolor.color)
//   const dispatch=useDispatch();
//   return(
//     <>
//     <h3 align="center">Welcome to my color</h3><br/>
//     <div style={{marginLeft:"20%"}}>
//     Enter Color: <input type="text" value={txtval} onChange={(e)=>{setTxtVal(e.target.value)}}/><br/><br/>
//     <button onClick={()=>{dispatch(bgClrChange(txtval))}} style={{backgroundColor:"blue",border:"none",color:"aliceblue"}}>Change Color</button><br/><br/>
//     <div style={{width:"200px",height:"200px",backgroundColor:myclr}}>

//     </div>
//     </div>
//     </>
//   )
// }
// export default App;






import { useSelector,useDispatch } from "react-redux"
import { useState } from "react"
import { addTask } from "./todoSlice"
const App=()=>{
  const[txt,setTxt]=useState("")
  const data=useSelector(state=>state.todo.task);
  const dispatch=useDispatch();
   console.log(data);
   let sno=0;

   const ans=data.map((key)=>{
    sno++;
    return(
      <>
       <tr>
        <td>{sno}</td>
        <td>{key.work}</td>
       </tr>
      </>
    )
   })
  return(
    <>
     <h3>Todo App!!</h3>
     Enetr Task: <input type="text" value={txt} onChange={(e)=>{setTxt(e.target.value)}}/><br/><br/>
     <button onClick={()=>{dispatch(addTask({work:txt}))}}>Add Task</button><br/><br/>
     <hr />
     <table border="1" width="500px">
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









