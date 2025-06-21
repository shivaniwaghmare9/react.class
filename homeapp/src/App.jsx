
import { useSelector,useDispatch } from "react-redux"
import { useState } from "react"
import { addTask,taskDelete } from "./todoSlice"
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
        <td>
          <span onClick={()=>{dispatch(taskDelete({id:key.id}))}}>delete</span>
        </td>
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
        <th>Delete</th>
      </tr>
      {ans}
     </table>
    </>
  )
}
export default App;









