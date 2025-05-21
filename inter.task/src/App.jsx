import { useState } from "react";
import { addTask } from "./todoSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const App=()=>{
  const[name,setName]=useState("");
  const dispatch=useDispatch();
  const work=useSelector(state=>state.todo.task);
  const ans=work.map((key)=>{
     return(
      <tr>
        <td>{key.task}</td>
      </tr>
     )
  })
  
  return(
    <>
    <div className="from">

    
     <h1>Todo App</h1>
    Enter Task: <input type="text" value={name} 
    onChange={(e)=>{setName(e.target.value)}}/><br/><br/>
    <button onClick={()=>{dispatch(addTask({task:name}))}} id="btn">Add Task</button>

     <table border="2" width="500px" id="tbl">
      <tr>
        <th>Task Name</th>
        <th>Category badge</th>
        <th>Delete</th>
      </tr>
      {ans}
    </table>
  </div>
    </>
  )
  

}
export default App;