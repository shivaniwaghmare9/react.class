
import { useSelector,useDispatch } from "react-redux";
import { addTask } from "./todoSlice";
import { useState } from "react";
const App=()=>{ 
  const data=useSelector(state=>state.todo.task)
  const dispatch=useDispatch();
  const[val,setVal]=useState("")
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
    <h1>Todo App!!</h1>
    Enter Task: <input type="text" value={val} onChange={(e)=>{setVal(e.target.value)}} /><br/><br/>
    <button onClick={()=>{dispatch(addTask({task:val}))}}>Add</button><br/>
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