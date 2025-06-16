
import { useSelector,useDispatch } from "react-redux";
import { addTask,RemoveTask,ReByIndex,taskComplete,taskInComplete,myEdit } from "./todoSlice";
import { useState } from "react";
const App=()=>{ 
  const data=useSelector(state=>state.todo.task)
  const dispatch=useDispatch();
  const[val,setVal]=useState("")
  const[btn,setBtn]=useState(true);
  const[myid,setMyid]=useState("");
  const dataEdit=(key,work)=>{
    setVal(work)
    setBtn(false)
    setMyid(id)
  }
  const editData=()=>{
    dispatch(myEdit({id:myid,work:val}))
    setBtn(true)
  }
  console.log(data);
  let sno=0;
  const ans=data.map((key,index)=>{
    sno++;
    return(
      <>
      <tr>
        <td>{sno}</td>
        <td>{key.taskStatus?(
          <>
          <span style={{color:"red",textDecoration:"line-through"}}>
            {key.work}
          </span>
          </>
        ):(
         <>
         {key.work}
         </>
        )
        }
          </td>
        <td>
          <button onClick={()=>{dispatch(RemoveTask({id:key.id}))}}>remove</button>
        </td>
        <td>
          <button onClick={()=>{dispatch(ReByIndex({id:index}))}}>delete</button>
        </td>
        <td>
          <button onClick={()=>{dispatch(taskComplete({id:key.id}))}}>complete</button>
        </td>
        <td>
          <button onClick={()=>{dispatch(taskInComplete({id:key.id}))}}>incomplete</button>
        </td>
        <td>
          <button onClick={()=>{dataEdit(key.id,key.work)}}>Edit</button>
        </td>
      </tr>
      </>
    )
  })
  return(
    <>
    <h1>Todo App!!</h1>
    Enter Task: <input type="text" value={val} onChange={(e)=>{setVal(e.target.value)}} /><br/><br/>
    {btn?(
      <>
      <button onClick={()=>{dispatch(addTask({id:Date.now(),work:val,taskStatus:false}))}}>Add</button><br/>
      </>
    ):(
      <>
       <button onClick={editData}>EditSave</button>
      </>
    )}
    
    <table border="1" width="500px">
      <tr>
        <th>Sno</th>
        <th>Task</th>
        <th>Remove</th>
        <th>Delete</th>
        <th>Complete</th>
        <th>Incomplete</th>
        <th>Edit</th>
      </tr>
      {ans}
    </table>
    </>
  )
}
export default App;