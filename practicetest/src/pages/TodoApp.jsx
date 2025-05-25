
import { useSelector,useDispatch } from "react-redux";
import { useState } from "react";
import { addTask,Remove } from "../todoSlice";
const TodoApp=()=>{
    const data=useSelector(state=>state.todo.task)
    const dispatch=useDispatch();
    const [val,setVal]=useState("");
    let sno=0;
    const ans=data.map((key)=>{
        sno++;
        return(
            <>
             <tr>
                <td>{sno}</td>
                <td>{key.work}</td>
                <td>
                    <button onClick={()=>{dispatch(Remove({id:key.id}))}}>Remove</button>
                </td>
             </tr>

            </>
        )
    })
    return(
        <>
          <h1>ToDo App!!</h1>
          Enter Task: <input type="text" value={val} 
          onChange={(e)=>{setVal(e.target.value)}}/><br/><br/>
          <button onClick={()=>{dispatch(addTask({id:Date.now(),work:val}))}}>Add!!</button>
           <table border="2" width="300px">
            <tr>
                <th>SNO</th>
                <th>TASK</th>
                <th>REMOVE</th>
                <th></th>
            </tr>
            {ans}
           </table>
        </>
    )
}
export default TodoApp;